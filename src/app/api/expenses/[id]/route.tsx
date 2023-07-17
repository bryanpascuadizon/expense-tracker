import Expense from "@/models/expense";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface ParamsProps {
  params: {
    id: string;
  };
}

// GET all expenses of the user
export const GET = async (req: NextRequest, { params }: ParamsProps) => {
  try {
    await connectToDB();
    const expenses = await Expense.find({ user_id: params.id }).populate("tag");

    if (!expenses) {
      return new NextResponse("No expenses found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(expenses), { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to get Expense List: ${error}`, {
      status: 500,
    });
  }
};

// POST an expense  of the user
export const POST = async (req: NextRequest, { params }: ParamsProps) => {
  try {
    const data = await req.json();
    await connectToDB();
    const { name, amount, dateOfTransaction, expenseType, expenseTag } =
      data.expense;
    const expenseData = await new Expense({
      name,
      amount,
      dateOfTransaction,
      type: expenseType,
      tag: expenseTag,
      user_id: params.id,
    });

    expenseData.save();

    return new NextResponse(JSON.stringify(expenseData), { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to post Expense: ${error}`, {
      status: 500,
    });
  }
};

// UPDATE and expense of the user
export const PATCH = async (req: NextRequest) => {
  try {
    const data = await req.json();
    await connectToDB();
    const { id, name, amount, dateOfTransaction, expenseType, expenseTag } =
      data.expenseItem;

    const existingExpense = await Expense.findById(id);

    existingExpense.name = name;
    existingExpense.amount = amount;
    existingExpense.dateOfTransaction = dateOfTransaction;
    existingExpense.type = expenseType;
    existingExpense.tag = expenseTag;
    existingExpense.save();

    return new NextResponse(JSON.stringify(existingExpense), { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to update Expense: ${error}`, {
      status: 500,
    });
  }
};

export const DELETE = async (req: NextRequest, { params }: ParamsProps) => {
  try {
    await connectToDB();

    const expenseItem = await Expense.findByIdAndRemove({ _id: params.id });

    if (!expenseItem) {
      return new NextResponse("Expense item not found", { status: 404 });
    }

    return new NextResponse("Successfully deleted expense", { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to delete Expense: ${error}`, {
      status: 500,
    });
  }
};
