"use client";

//REACT IMPORTS
import React from "react";

import ListOfExpenses from "@/components/expenses/ListOfExpenses";

//UTILS
import { ExpenseType } from "@/utils/types";
import { useExpenseQuery } from "@/utils/hooks/expense";
import Calendar from "@/components/calendar/Calendar";

const Expenses = () => {
  const { data } = useExpenseQuery();

  return (
    <>
      <div className="module_title">Expenses</div>
      <div className="module_content">
        <section className="">
          <div>
            <Calendar />
          </div>
          {/* <div className="">
            <ListOfExpenses expenses={data as ExpenseType[]} />
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Expenses;
