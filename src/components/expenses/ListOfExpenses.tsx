"use client";

//REACT IMPORTS
import React, { useState } from "react";
import moment from "moment";

//COMPOINENTS
import ExpenseDialog from "./ExpenseDialog";

//UTILS
import { ExpenseType } from "@/utils/types";

interface ListOfExpensesProps {
  expenses: ExpenseType[];
}

const ListOfExpenses = (expenseList: ListOfExpensesProps) => {
  const { expenses } = expenseList;
  const [expense, setExpense] = useState({
    _id: "",
    name: "",
    amount: 0,
    dateOfTransaction: moment(new Date()).format("YYYY-MM-DD"),
    type: "",
    tag: {
      _id: "",
      name: "",
      color: "",
      user_id: "",
    },
    user_id: "",
  });

  const [show, setShow] = useState(false);
  const [procedure, setProcedure] = useState("");
  return (
    <>
      <div className="expense_item">
        <div className="flex mb-5">
          <p className="font-bold text-lg flex-grow self-center">
            List of Expenses
          </p>

          <button
            className="rounded-md bg-gray-900 text-white text-sm pt-3 pb-3 pl-6 pr-6"
            onClick={() => {
              setShow(true);
              setProcedure("Add");
            }}
          >
            Add Expense
          </button>
        </div>

        <table className="expense_table w-full bg-gray-100 rounded-md shadow">
          <thead className="expense_thead">
            <tr>
              <th className="text-sm p-5">Name</th>
              <th className="text-sm p-5">Amount</th>
              <th className="text-sm p-5">Date of Transaction</th>
              <th className="text-sm p-5">Type</th>
              <th className="text-sm p-5">Tag</th>
              <th className="text-sm p-5">Edit</th>
              <th className="text-sm p-5">Delete</th>
            </tr>
          </thead>
          {expenses && expenses.length > 0 ? (
            <tbody>
              {expenses.map((item: ExpenseType) => (
                <tr className="" key={item._id}>
                  <td className="text-sm text-center p-5">{item.name}</td>
                  <td className="text-sm text-center p-5">₱ {item.amount}</td>
                  <td className="text-sm text-center p-5">
                    {moment(item.dateOfTransaction).format("MMM DD, YYYY")}
                  </td>
                  <td className="text-sm text-center p-5">{item.type}</td>
                  <td className="text-sm text-center p-5">
                    <p className={`text-[${item.tag?.color}]`}>
                      {item.tag?.name}
                    </p>
                  </td>
                  <td>
                    <button
                      className="w-full"
                      onClick={() => {
                        setShow(true);
                        setProcedure("Edit");
                        setExpense({
                          _id: item._id,
                          name: item.name,
                          amount: item.amount,
                          dateOfTransaction: item.dateOfTransaction,
                          type: item.type,
                          tag: {
                            _id: item.tag._id,
                            name: item.tag.name,
                            color: item.tag.color,
                            user_id: item.tag.user_id,
                          },
                          user_id: item.user_id,
                        });
                      }}
                    >
                      <span className="material-symbols-outlined text-center">
                        edit
                      </span>
                    </button>
                  </td>
                  <td>
                    <button
                      className="w-full"
                      onClick={() => {
                        setShow(true);
                        setProcedure("Delete");
                        setExpense({
                          _id: item._id,
                          name: item.name,
                          amount: item.amount,
                          dateOfTransaction: item.dateOfTransaction,
                          type: item.type,
                          tag: {
                            _id: item.tag._id,
                            name: item.tag.name,
                            color: item.tag.color,
                            user_id: item.tag.user_id,
                          },
                          user_id: item.user_id,
                        });
                      }}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <></>
          )}
        </table>
        {expenses && expenses.length === 0 ? (
          <p className="text-sm text-center w-full p-5">No expenses added...</p>
        ) : (
          ""
        )}
      </div>
      <ExpenseDialog
        show={show}
        procedure={procedure}
        setShow={() => setShow(!show)}
        expenseItem={
          procedure === "Edit" || procedure === "Delete" ? expense : undefined
        }
      />
    </>
  );
};

export default ListOfExpenses;
