import Expense from "@/models/expense";
import { connectToDB } from "@/utils/database";
import { ExpenseType } from "@/utils/types";
import moment from "moment";
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

    const filterExpenses = expenses.sort((a, b) => {
      const dateA: any = moment(a.dateOfTransaction);
      const dateB: any = moment(b.dateOfTransaction);
      return dateB - dateA;
    });

    return new NextResponse(JSON.stringify(filterExpenses), { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to get Expense List: ${error}`, {
      status: 500,
    });
  }
};

// POST an expense  of the user
export const POST = async (req: NextRequest, { params }: ParamsProps) => {
  try {
    const { expense } = await req.json();
    await connectToDB();
    const { name, amount, dateOfTransaction, type, tag } =
      expense as ExpenseType;
    const expenseData = await new Expense({
      name,
      amount,
      dateOfTransaction,
      type: type,
      tag: tag._id,
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
    const { expense } = await req.json();
    await connectToDB();
    const { _id, name, amount, dateOfTransaction, type, tag } =
      expense as ExpenseType;

    const existingExpense = await Expense.findById(_id);

    existingExpense.name = name;
    existingExpense.amount = amount;
    existingExpense.dateOfTransaction = dateOfTransaction;
    existingExpense.type = type;
    existingExpense.tag = tag;
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
