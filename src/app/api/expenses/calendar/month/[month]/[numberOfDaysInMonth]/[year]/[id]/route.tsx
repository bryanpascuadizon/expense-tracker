import Expense from "@/models/expense";
import { MONTHS } from "@/utils/constants";
import { ExpenseType } from "@/utils/types";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

interface CalendarProps {
  params: {
    month: string;
    numberOfDaysInMonth: number;
    year: number;
    id: string;
  };
}
export const GET = async (req: NextRequest, { params }: CalendarProps) => {
  try {
    const startDate = `${params.year}-01-${params.month}`; // Current Month Selected
    const endDate = `${params.year}-01-${
      //Next Month of Current Month Selected
      MONTHS[moment(new Date()).month() + 1]
    }`;

    const expenseList: ExpenseType[] = await Expense.find({
      dateOfTransaction: { $gte: startDate, $lte: endDate },
    }).populate("tag");

    return new NextResponse(JSON.stringify(expenseList), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to get expense list by date", {
      status: 500,
    });
  }
};
