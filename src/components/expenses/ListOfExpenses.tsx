"use client";

import React, { useEffect, useState } from "react";
import ExpenseDialog from "./ExpenseDialog";
import moment from "moment";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";

const ListOfExpenses = () => {
  const expenseList = useSelector((state: RootState) => state.expenses);
  const [expense, setExpense] = useState({
    id: "",
    name: "",
    amount: 0,
    dateOfTransaction: moment(new Date()).format("YYYY-MM-DD"),
    expenseType: "",
    expenseTag: {
      id: "",
      name: "",
      color: "",
      user_id: "",
    },
  });

  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
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
              setType("Add");
            }}
          >
            Add Expense
          </button>
        </div>

        <table className="expense_table table-auto w-full bg-gray-100 rounded-md">
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
          {expenseList && expenseList.expenses.length > 0 ? (
            <tbody>
              {expenseList.expenses.map(
                (item: {
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
                  };
                }) => (
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
                          setType("Edit");
                          setExpense({
                            id: item._id,
                            name: item.name,
                            amount: item.amount,
                            dateOfTransaction: item.dateOfTransaction,
                            expenseType: item.type,
                            expenseTag: {
                              id: item.tag._id,
                              name: item.tag.name,
                              color: item.tag.color,
                              user_id: item.tag.user_id,
                            },
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
                          setType("Delete");
                          setExpense({
                            id: item._id,
                            name: item.name,
                            amount: item.amount,
                            dateOfTransaction: item.dateOfTransaction,
                            expenseType: item.type,
                            expenseTag: {
                              id: item.tag._id,
                              name: item.tag.name,
                              color: item.tag.color,
                              user_id: item.tag.user_id,
                            },
                          });
                        }}
                      >
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          ) : (
            <></>
          )}
        </table>
        {expenseList.expenses.length === 0 ? (
          <p className="text-sm text-center w-full p-5">No expenses added...</p>
        ) : (
          ""
        )}
      </div>
      <ExpenseDialog
        show={show}
        type={type}
        setShow={() => setShow(!show)}
        expenseItem={type === "Edit" || type === "Delete" ? expense : undefined}
      />
    </>
  );
};

export default ListOfExpenses;
