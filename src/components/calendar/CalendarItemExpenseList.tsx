import { ExpenseType } from "@/utils/types";
import moment from "moment";
import React from "react";

type CalendarItemExpenseListProps = {
  expenses: ExpenseType[];
};

const CalendarItemExpenseList = (expenseList: CalendarItemExpenseListProps) => {
  const { expenses } = expenseList;
  return (
    <>
      <table className="w-full">
        <thead>
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
                <p className={`text-[${item.tag?.color}]`}>{item.tag?.name}</p>
              </td>
              <td>
                <button
                  className="w-full"
                  // onClick={() => {
                  //   setShow(true);
                  //   setProcedure("Edit");
                  //   setExpense({
                  //     _id: item._id,
                  //     name: item.name,
                  //     amount: item.amount,
                  //     dateOfTransaction: item.dateOfTransaction,
                  //     type: item.type,
                  //     tag: {
                  //       _id: item.tag._id,
                  //       name: item.tag.name,
                  //       color: item.tag.color,
                  //       user_id: item.tag.user_id,
                  //     },
                  //     user_id: item.user_id,
                  //   });
                  // }}
                >
                  <span className="material-symbols-outlined text-center">
                    edit
                  </span>
                </button>
              </td>
              <td>
                <button
                  className="w-full"
                  // onClick={() => {
                  //   setShow(true);
                  //   setProcedure("Delete");
                  //   setExpense({
                  //     _id: item._id,
                  //     name: item.name,
                  //     amount: item.amount,
                  //     dateOfTransaction: item.dateOfTransaction,
                  //     type: item.type,
                  //     tag: {
                  //       _id: item.tag._id,
                  //       name: item.tag.name,
                  //       color: item.tag.color,
                  //       user_id: item.tag.user_id,
                  //     },
                  //     user_id: item.user_id,
                  //   });
                  // }}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CalendarItemExpenseList;
