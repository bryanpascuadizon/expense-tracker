import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    populateExpenses: (state, action) => {
      const { payload } = action;
      state.expenses = [...payload];
    },
  },
});

export const { populateExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
