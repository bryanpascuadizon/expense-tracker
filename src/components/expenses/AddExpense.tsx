"use client";

import axios from "axios";
import moment from "moment";
import React, { useState } from "react";

const AddExpense = () => {
  const [expense, setExpense] = useState({
    title: "",
    amount: 0,
    dateOfTransaction: moment(new Date()).format("YYYY-MM-DD"),
    type: "",
    tag: "",
  });

  const { title, amount, dateOfTransaction, type, tag } = expense;
  console.log(dateOfTransaction)

  const addExpense = async () => {
    const newExpense = expense;
    console.log("NEW EPENSE: ", newExpense);

    // const postExpense = await axios.post("/api/expenses", {
    //   body: newExpense
    // });
  };

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;

    console.log("NAME", name);
    console.log("VALUE: ", value);

    setExpense({
      ...expense,
      [name]: value,
    });
  };
  return (
    <>
      <p className="font-bold mb-3 text-lg">Add Expense</p>
      <div className="expense_item bg-gray-100 p-5 rounded-md">
        <p className="text-sm mb-3">Title</p>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="type here..."
          className="mb-3 rounded-md text-xs p-3 w-full"
          onChange={handleOnChange}
        />
        <p className="text-sm mb-3">Amount</p>
        <input
          type="number"
          name="amount"
          value={amount}
          placeholder="type here..."
          className="mb-3 rounded-md text-xs p-3 w-full"
          onChange={handleOnChange}
        />
        <p className="text-sm mb-3">Date of Transaction</p>
        <input
          type="date"
          name="dateOfTransaction"
          value={dateOfTransaction}
          placeholder="type here..."
          className="mb-3 rounded-md text-xs p-3 w-full"
          onChange={handleOnChange}
        />

        <p className="text-sm mb-3">Type</p>
        <select
          id="countries"
          className="mb-3 text-xs rounded-md p-3 w-full"
          onChange={handleOnChange}
        >
          <option selected>Choose a type</option>
          <option value="Cash">Cash</option>
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>

        <p className="text-sm mb-3">Tag</p>
        <select
          id="countries"
          className="mb-3 text-xs rounded-md p-3 w-full"
          onChange={handleOnChange}
        >
          <option selected>Choose a tag</option>
          <option value="Home">Home</option>
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="Health">Health</option>
        </select>
        <div className="flex flex-row-reverse">
          <button
            className="text-sm p-3 bg-grey-900 rounded-md text-white"
            onClick={addExpense}
          >
            Add Expense
          </button>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
