import Expense from "@/models/expense";
import { connectToDB } from "@/utils/databasw";
import { NextRequest, NextResponse } from "next/server";

// GET all expenses of the user
export const GET = async (req: NextRequest) => {
  try {
    const data = await req.json();
    await connectToDB();

    const expenses = await Expense.find({ user_id: data.userId });

    if (!expenses) {
      return new NextResponse("No expenses found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(expenses), { status: 200 });
  } catch (error) {
    return new NextResponse(
      `Failed to get Expenses: ${JSON.stringify(error)}`,
      { status: 500 }
    );
  }
};

// POST an expense  of the user
export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    await connectToDB();

    const expenseData = await new Expense({});

    expenseData.save();

    return new NextResponse(JSON.stringify(expenseData), { status: 200 });
  } catch (error) {
    return new NextResponse(
      `Failed to post Expense: ${JSON.stringify(error)}`,
      { status: 500 }
    );
  }
};

// UPDATE and expense of the user
export const PATCH = async (req: NextRequest) => {
  try {
    const data = await req.json();
    await connectToDB();

    const existingExpense = await Expense.findById(data.expenseId);

    existingExpense.save();

    return new NextResponse(JSON.stringify(existingExpense), { status: 500 });
  } catch (error) {
    return new NextResponse(
      `Failed to update Expense: ${JSON.stringify(error)}`,
      { status: 500 }
    );
  }
};
