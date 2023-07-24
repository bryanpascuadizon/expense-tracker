import { ExpenseList } from "@/utils/types";
import axios from "axios";
import moment from "moment";

export const getUserExpenseList = async (userId: string | null | undefined) => {
  try {
    const expenseList = await axios.get(`/api/expenses/${userId}`);

    if (expenseList.status !== 200) {
      throw new Error("Failed to get Expense List of the user");
    }

    return expenseList.data;
  } catch (error) {
    console.error("Get User Expense Error: ", error);
  }
};

export const getUserExpenseListBasedOnDate = async () => {
  try {
  } catch (error) {
    console.error("Get User Expense By Date Error: ", error);
  }
};

export const getUserPeriodicReportList = async (expenseList: ExpenseList) => {
  try {
    const dailyCompute: number = computePeriodicExpenses("day", expenseList);
    const weeklyCompute: number = computePeriodicExpenses("week", expenseList);
    const monthlyCompute: number = computePeriodicExpenses(
      "month",
      expenseList
    );
    const yearlyCompute: number = computePeriodicExpenses("year", expenseList);
    return { dailyCompute, weeklyCompute, monthlyCompute, yearlyCompute };
  } catch (error) {
    console.error("Get User Periodic Report List: ", error);
  }
};

export const computePeriodicExpenses = (
  period: string,
  expenseList: ExpenseList
) => {
  const startPeriod = moment().startOf(
    period === "day"
      ? "day"
      : period === "week"
      ? "week"
      : period === "month"
      ? "month"
      : period === "year"
      ? "year"
      : "day"
  );
  const endPeriod = moment().endOf(
    period === "day"
      ? "day"
      : period === "week"
      ? "week"
      : period === "month"
      ? "month"
      : period === "year"
      ? "year"
      : "day"
  );

  let finalExpensList = expenseList.data === undefined ? [] : expenseList.data;

  const filterExpenseList = finalExpensList.filter(
    (item) =>
      moment(item.dateOfTransaction) >= startPeriod &&
      moment(item.dateOfTransaction) <= endPeriod
  );

  let periodCounter: number = 0.0;

  for (let i of filterExpenseList) {
    periodCounter += i.amount;
  }

  return periodCounter;
};
