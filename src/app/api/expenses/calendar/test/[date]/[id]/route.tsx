import Expense from "@/models/expense";
import { ExpenseType } from "@/utils/types";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

interface CalendarProps {
  params: {
    date: string;
    id: string;
  };
}
export const GET = async (req: NextRequest, { params }: CalendarProps) => {
  try {
    const expenseList: ExpenseType[] = await Expense.find({
      dateOfTransaction: params.date,
    }).populate("tag");

    return new NextResponse(JSON.stringify(expenseList), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to get expense list by date", {
      status: 500,
    });
  }
};
