import { ExpenseType, ExpenseList } from "@/utils/types";
import axios from "axios";
import moment from "moment";
import { getUserId } from "./Auth";
import { useMutation, useQuery } from "react-query";

const userId = getUserId();

/* Get all expenses of the user */
export const fetchUserExpenses = async () => {
  const expenseList = await axios.get(`/api/expenses/${userId}`);

  if (expenseList.status !== 200) {
    throw new Error(expenseList.statusText);
  }

  return expenseList.data as ExpenseType[];
};

/* Post an expense added by the user */
export const addUserExpense = async (expense: ExpenseType) => {
  const postRequest = await axios.post(`/api/expenses/${userId}`, {
    expense,
  });

  if (postRequest.status !== 200) {
    throw new Error(postRequest.statusText);
  }

  return postRequest;
};

/* Updates an expense edited by the user */
export const editUserExpense = async (expense: ExpenseType) => {
  const patchRequest = await axios.patch(`/api/expenses/${expense._id}`, {
    expense,
  });

  if (patchRequest.status !== 200) {
    throw new Error(patchRequest.statusText);
  }

  return patchRequest;
};

/* Deletes an expense choses by the user */
export const deleteUserExpense = async (expense: ExpenseType) => {
  const deleteRequest = await axios.delete(`/api/expenses/${expense._id}`);

  if (deleteRequest.status !== 200) {
    throw new Error(deleteRequest.statusText);
  }

  return deleteRequest;
};

/* Compute for Periodic Tabs using User Expense List */
export const getUserPeriodicReportList = async (expenses: ExpenseType[]) => {
  try {
    const dailyCompute: number = computePeriodicExpenses("day", expenses);
    const weeklyCompute: number = computePeriodicExpenses("week", expenses);
    const monthlyCompute: number = computePeriodicExpenses("month", expenses);
    const yearlyCompute: number = computePeriodicExpenses("year", expenses);
    return { dailyCompute, weeklyCompute, monthlyCompute, yearlyCompute };
  } catch (error) {
    console.error("Get User Periodic Report List: ", error);
  }
};

/* Compute User Expense List based on period */
export const computePeriodicExpenses = (
  period: string,
  expenses: ExpenseType[]
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

  let finalExpensList = expenses === undefined ? [] : expenses;

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
