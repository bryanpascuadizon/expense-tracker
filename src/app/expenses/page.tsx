import AddExpense from "@/components/expenses/AddExpense";
import ListOfTransactions from "@/components/expenses/ListOfTransactions";
import React from "react";

const Expenses = () => {
  return (
    <>
      <div className="module_title">Expenses</div>
      <div className="module_content">
        <section className="expense grid xxl:grid-cols-3 xxs:grid-cols-1 gap-5">
          <div className="expense_section xxl:col-span-1 xxs:col-span-2">
            <AddExpense />
          </div>
          <div className="expense_section col-span-2">
            <ListOfTransactions />
          </div>
        </section>
      </div>
    </>
  );
};

export default Expenses;
