import axios from "axios";

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
