import React from "react";

const AddExpense = () => {
  return (
    <>
      <p className="font-bold mb-3 text-xl">Add an Expense</p>
      <div className="expense_item bg-gray-100 p-5 rounded-md">
        <p className="text-sm mb-3">Title</p>
        <input
          type="text"
          placeholder="type here..."
          className="mb-3 rounded-md text-xs p-3 w-full"
        />
        <p className="text-sm mb-3">Amount</p>
        <input
          type="number"
          placeholder="type here..."
          className="mb-3 rounded-md text-xs p-3 w-full"
        />
        <p className="text-sm mb-3">Date of Transaction</p>
        <input
          type="date"
          placeholder="type here..."
          className="mb-3 rounded-md text-xs p-3 w-full"
        />

        <p className="text-sm mb-3">Type</p>
        <select id="countries" className="mb-3 text-xs rounded-md p-3 w-full">
          <option selected>Choose a type</option>
          <option value="Cash">Cash</option>
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>

        <p className="text-sm mb-3">Tag</p>
        <select id="countries" className="mb-3 text-xs rounded-md p-3 w-full">
          <option selected>Choose a tag</option>
          <option value="Home">Home</option>
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="Health">Health</option>
        </select>
      </div>
    </>
  );
};

export default AddExpense;
