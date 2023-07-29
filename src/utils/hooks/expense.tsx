//REACT IMPORTS
import { UseMutationOptions, useMutation, useQuery } from "react-query";

//UTILS
import { Expense } from "../types";
import { ADD, EDIT, DELETE } from "../constants";

//LIB
import {
  addUserExpense,
  deleteUserExpense,
  editUserExpense,
  fetchUserExpenses,
} from "@/lib/ExpenseActions";

type ExpenseMutationVariable = {
  type: string;
  expense: Expense;
};

/* For expense mutation */
export const useExpenseMutation = (
  options?: UseMutationOptions<Expense, Error, ExpenseMutationVariable>
) => {
  const mutation = useMutation(
    async ({ type, expense }: ExpenseMutationVariable) => {
      switch (type) {
        case ADD:
          return addUserExpense(expense);
        case EDIT:
          return editUserExpense(expense);
        case DELETE:
          return deleteUserExpense(expense);
      }
    }
  );

  return mutation;
};

/* For fetching user expense list */
export const useExpenseQuery = () => {
  return useQuery<Expense[], Error>({
    queryKey: ["expenses"],
    queryFn: fetchUserExpenses,
  });
};
