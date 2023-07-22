import axios from "axios";
import moment from "moment";

interface ExpenseList {
  _id: string;
  name: string;
  amount: number;
  dateOfTransaction: string;
  type: string;
  tag: {
    _id: string;
    name: string;
    color: string;
    user_id: string;
    __v: number;
  };
  user_id: string;
  __v: number;
}

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

export const getUserPeriodicReportList = async (
  userId: string | null | undefined
) => {
  try {
    const userExpenseList: ExpenseList[] = await getUserExpenseList(userId);
    const dailyCompute: number = computeDailyExpenses(userExpenseList);
    const weeklyCompute: number = computeWeeklyExpenses(userExpenseList);
    const monthlyCompute: number = computeMonthlyExpenses(userExpenseList);
    const yearlyCompute: number = computeYearlyxpenses(userExpenseList);
    return { dailyCompute, weeklyCompute, monthlyCompute, yearlyCompute };
  } catch (error) {
    console.error("Get User Periodic Report List: ", error);
  }
};

export const computeDailyExpenses = (expenseList: ExpenseList[]) => {
  const startDay = moment().startOf("day");
  const endDay = moment().endOf("day");

  const filterExpenseList = expenseList.filter(
    (item: ExpenseList) =>
      moment(item.dateOfTransaction) >= startDay &&
      moment(item.dateOfTransaction) <= endDay
  );

  let dailyCounter: number = 0.0;

  for (let i of filterExpenseList) {
    dailyCounter += i.amount;
  }

  return dailyCounter;
};

export const computeWeeklyExpenses = (expenseList: ExpenseList[]) => {
  const startWeek = moment().startOf("week");
  const endWeek = moment().endOf("week");

  const filterExpenseList = expenseList.filter(
    (item: ExpenseList) =>
      moment(item.dateOfTransaction) >= startWeek &&
      moment(item.dateOfTransaction) <= endWeek
  );

  console.log(filterExpenseList);

  let weeklyCounter: number = 0.0;

  for (let i of filterExpenseList) {
    weeklyCounter += i.amount;
  }

  return weeklyCounter;
};

export const computeMonthlyExpenses = (expenseList: ExpenseList[]) => {
  const startMonth = moment().startOf("month");
  const endMonth = moment().endOf("month");

  const filterExpenseList = expenseList.filter(
    (item: ExpenseList) =>
      moment(item.dateOfTransaction) >= startMonth &&
      moment(item.dateOfTransaction) <= endMonth
  );

  let monthlyCounter: number = 0.0;

  for (let i of filterExpenseList) {
    monthlyCounter += i.amount;
  }

  return monthlyCounter;
};

export const computeYearlyxpenses = (expenseList: ExpenseList[]) => {
  const startYear = moment().startOf("year");
  const endYear = moment().endOf("year");

  const filterExpenseList = expenseList.filter(
    (item: ExpenseList) =>
      moment(item.dateOfTransaction) >= startYear &&
      moment(item.dateOfTransaction) <= endYear
  );

  let yearlyCounter: number = 0.0;

  for (let i of filterExpenseList) {
    yearlyCounter += i.amount;
  }

  return yearlyCounter;
};
