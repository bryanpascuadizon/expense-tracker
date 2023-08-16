import { ExpenseType } from "@/utils/types";
import moment from "moment";
import React from "react";

type CalendarItemExpenseListProps = {
  expenses: ExpenseType[];
  calendarCurrentDate: string;
};

const CalendarItemExpenseList = (expenseList: CalendarItemExpenseListProps) => {
  const { expenses, calendarCurrentDate } = expenseList;

  return (
    <>
      <div className="w-full text-xl p-3">
        List of Expenses •{" "}
        {moment(`${calendarCurrentDate}`).format("MMMM D, YYYY")}
      </div>
      <table className="w-full">
        <thead>
          <tr className="hidden xl:table-row text-left">
            <th className="text-lg p-3">Name</th>
            <th className="text-lg p-3">Amount</th>
            <th className="text-lg p-3">Date of Transaction</th>
            <th className="text-lg p-3">Type</th>
            <th className="text-lg p-3">Tag</th>
            <th className="text-lg p-3 text-center">Edit</th>
            <th className="text-lg p-3 text-center">Delete</th>
          </tr>
          <tr className="table-row xl:hidden text-left">
            <th className="text-lg p-3">Expense</th>
            <th className="text-lg p-3 text-center">Edit</th>
            <th className="text-lg p-3 text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item: ExpenseType) => (
            <>
              <tr className="hidden xl:table-row text-left" key={item._id}>
                <td className="text-sm p-3">{item.name}</td>
                <td className="text-sm p-3">₱ {item.amount.toFixed(2)}</td>
                <td className="text-sm p-3">
                  {moment(`${item.dateOfTransaction}`).format("MMMM DD, YYYY")}
                </td>
                <td className="text-sm p-3">{item.type}</td>
                <td className="text-sm p-3">
                  <p className={`text-[${item.tag?.color}]`}>
                    {item.tag?.name}
                  </p>
                </td>
                <td className="text-center">
                  <button
                    className="p-3"
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
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </td>
                <td className="text-center">
                  <button
                    className="p-3"
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
              {/* <tr className="table-row xl:hidden text-left" key={item._id}>
                <td className="text-sm p-3">
                  <p>{item.name}</p>
                  <p>
                    ₱ {item.amount.toFixed(2)} • {item.type} •
                    <span className={`text-[${item.tag?.color}]`}>
                      {" "}
                      {item.tag?.name}
                    </span>
                  </p>
                </td>
                <td className="text-center">
                  <button
                    className="p-3"
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
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </td>
                <td className="text-center">
                  <button
                    className="p-3"
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
              </tr> */}
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CalendarItemExpenseList;
