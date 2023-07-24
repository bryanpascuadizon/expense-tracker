import { configureStore } from "@reduxjs/toolkit";
import tagReducer from "./reducers/tagReducer";
import expenseReducer from "./reducers/expenseReducer";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    tags: tagReducer,
    expenses: expenseReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
