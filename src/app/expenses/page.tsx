"use client";

//REACT IMPORTS
import React from "react";

import ListOfExpenses from "@/components/expenses/ListOfExpenses";

//UTILS
import { Expense } from "@/utils/types";
import { useExpenseQuery } from "@/utils/hooks/expense";

const Expenses = () => {
  const { data } = useExpenseQuery();
  return (
    <>
      <div className="module_title">Expenses</div>
      <div className="module_content">
        <section className="">
          <div className="">
            <ListOfExpenses expenses={data as Expense[]} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Expenses;
