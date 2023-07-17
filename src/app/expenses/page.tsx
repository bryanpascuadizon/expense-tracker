"use client";
import ListOfExpenses from "@/components/expenses/ListOfExpenses";
import { getUserExpenseList } from "@/lib/ExpenseActions";
import { getUserId } from "@/lib/LoginActions";
import { populateExpenses } from "@/utils/reducers/expenseReducer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Expenses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTagList = async () => {
      const userId: string | null | undefined = getUserId();
      const expenseList = await getUserExpenseList(userId);
      dispatch(populateExpenses(expenseList));
    };

    fetchTagList();
  }, []);
  return (
    <>
      <div className="module_title">Expenses</div>
      <div className="module_content">
        <section className="">
          <div className="">
            <ListOfExpenses />
          </div>
        </section>
      </div>
    </>
  );
};

export default Expenses;
