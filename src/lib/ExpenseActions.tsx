import { ExpenseType } from "@/utils/types";
import axios from "axios";
import moment from "moment";
import { getUserId } from "./Auth";

const userId = getUserId();

/* Get all expenses of the user */
export const fetchUserExpenses = async () => {
  const expenseList = await axios.get(`/api/expenses/${userId}`);

  if (expenseList.status !== 200) {
    throw new Error(expenseList.statusText);
  }

  return expenseList.data as ExpenseType[];
};

/* Search User Expense by Date of Transaction */
export const fetchUserExpensesWithDate = async (
  month: string,
  day: number,
  year: number
) => {
  if (day === 0) {
    return [] as ExpenseType[];
  }

  const date: string = moment(`${month} ${day}, ${year}`).format("YYYY-MM-DD");
  const expenseList = await axios.get(
    `/api/expenses/calendar/${date}/${userId}`
  );

  if (expenseList.status !== 200) {
    throw new Error(expenseList.statusText);
  }

  console.log("Expense List: ", expenseList.data);
  return expenseList.data as ExpenseType[];
};

export const fetchUserExepensesByMonth = async (
  month: string,
  numberOfDaysInMonth: number,
  year: number
) => {
  const expenseList = await axios.get(
    `/api/expenses/calendar/month/${month}/${numberOfDaysInMonth}/${year}/${userId}`
  );

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
  let dailyExepenses: ExpenseType[] = [];
  let weeklyExpenses: ExpenseType[] = [];
  let monthlyExpenses: ExpenseType[] = [];
  let yearlyExpenses: ExpenseType[] = [];

  for (let expense of expenses) {
    let period = getExpensePeriod(expense);

    if (period.isDay === true) {
      dailyExepenses = [...dailyExepenses, expense];
    }

    if (period.isWeekly === true) {
      weeklyExpenses = [...weeklyExpenses, expense];
    }
    if (period.isMonthly === true) {
      monthlyExpenses = [...monthlyExpenses, expense];
    }
    if (period.isYearly === true) {
      yearlyExpenses = [...yearlyExpenses, expense];
    }
  }

  try {
    const dailyCompute: number = computePeriodicExpenses(dailyExepenses);
    const weeklyCompute: number = computePeriodicExpenses(weeklyExpenses);
    const monthlyCompute: number = computePeriodicExpenses(monthlyExpenses);
    const yearlyCompute: number = computePeriodicExpenses(yearlyExpenses);

    return { dailyCompute, weeklyCompute, monthlyCompute, yearlyCompute };
  } catch (error) {
    console.error("Get User Periodic Report List: ", error);
  }
};

/* Compute User Expense List based on period */
export const computePeriodicExpenses = (expenses: ExpenseType[]) => {
  let periodCounter: number = 0.0;

  for (let i of expenses) {
    periodCounter += i.amount;
  }

  return periodCounter;
};

/* Get Period of a particular expense */
export const getExpensePeriod = (expense: ExpenseType) => {
  let isPeriod = {
    isDay: false,
    isWeekly: false,
    isMonthly: false,
    isYearly: false,
  };

  //Daily
  if (
    moment(expense.dateOfTransaction) >= moment().startOf("day") &&
    moment(expense.dateOfTransaction) <= moment().endOf("day")
  ) {
    isPeriod.isDay = true;
  }

  //Weekly
  if (
    moment(expense.dateOfTransaction) >= moment().startOf("week") &&
    moment(expense.dateOfTransaction) <= moment().endOf("week")
  ) {
    isPeriod.isWeekly = true;
  }

  //Monthly
  if (
    moment(expense.dateOfTransaction) >= moment().startOf("month") &&
    moment(expense.dateOfTransaction) <= moment().endOf("month")
  ) {
    isPeriod.isMonthly = true;
  }

  //Monthly
  if (
    moment(expense.dateOfTransaction) >= moment().startOf("year") &&
    moment(expense.dateOfTransaction) <= moment().endOf("year")
  ) {
    isPeriod.isYearly = true;
  }

  return isPeriod;
};

/* Calendar Template */
export const makeCalendar = () => {
  let plotCalendar: number[] = [];
  let finalCalendar: number[] = [];

  const date = moment(new Date());

  const numberOfDaysInMonth = date.daysInMonth();
  const currentYear = date.year();
  const currentMonth = date.month() + 1;
  const currentDay = date.date();
  const firstDay = moment(
    new Date(`${currentMonth}/${currentDay - (currentDay - 1)}/${currentYear}`)
  ).day();

  //Fill Start of Month
  for (let i = 0; i <= firstDay; i++) {
    if (i !== firstDay) {
      plotCalendar = [...plotCalendar, 0];
    } else {
      plotCalendar = [...plotCalendar, 1];
    }
  }

  //Fill Rest of Days
  for (let i = 2; i <= numberOfDaysInMonth; i++) {
    plotCalendar = [...plotCalendar, i];
  }

  //Fill End of Month
  for (let i = 0; i <= plotCalendar.length; i += 7) {
    let start = i;
    let end = i + 7;
    let newCalendarGroup = [...plotCalendar.slice(start, end)];

    if (newCalendarGroup.length < 7) {
      let iteration = 7 - newCalendarGroup.length;
      for (let j = 0; j < iteration; j++) {
        newCalendarGroup = [...newCalendarGroup, 0];
      }
    }
    finalCalendar = [...finalCalendar, ...newCalendarGroup];
  }
  return finalCalendar;
};
