import React from "react";

const ListOfTransactions = () => {
  return (
    <>
      <div className="expense_item">
        <p className="font-bold mb-3 text-lg">List of Transactions</p>
        <table className="expense_table table-auto w-full bg-gray-100 rounded-md">
          <thead className="expense_thead">
            <tr>
              <th className="text-sm p-5">Title</th>
              <th className="text-sm p-5">Amount</th>
              <th className="text-sm p-5">Date of Transaction</th>
              <th className="text-sm p-5">Type</th>
              <th className="text-sm p-5">Tag</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-sm text-center p-5">Aquaflask</td>
              <td className="text-sm text-center p-5">₱ 200</td>
              <td className="text-sm text-center p-5">Feb 03, 2023</td>
              <td className="text-sm text-center p-5">Cash</td>
              <td className="text-sm text-center p-5 text-violet-500">Home</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListOfTransactions;
