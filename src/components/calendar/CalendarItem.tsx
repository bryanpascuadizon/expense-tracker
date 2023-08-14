import { ExpenseType } from "@/utils/types";
import moment from "moment";
import React from "react";

interface CalendarItemProps {
  expenseList: ExpenseType[];
  month: string;
  day: number;
  year: number;
  getExpenseListFromCalendarItem: (expense: ExpenseType[], day: number) => void;
}

const CalendarItem = (dayItem: CalendarItemProps) => {
  const { day, expenseList, getExpenseListFromCalendarItem } = dayItem;

  const isToday = moment(new Date()).date() === day ? true : false;
  let total: number = 0;

  for (let expense of expenseList) {
    total += expense.amount;
  }

  return (
    <>
      <div
        key={day}
        className={` ${
          isToday ? " bg-green-100" : day === 0 ? "bg-gray-300" : "bg-gray-50"
        } pt-2 pb-2 pl-2 pr-3 rounded-md shadow min-h-[150px] ${
          day !== 0 ? `cursor-pointer` : ``
        }`}
        onClick={
          day === 0
            ? () => {}
            : () => {
                getExpenseListFromCalendarItem(expenseList, day);
              }
        }
      >
        <div className="grid grid-cols-2 mb-2">
          <p className="text-md">{day === 0 ? "" : day}</p>
          {expenseList.length > 0 ? (
            <p className="text-xs text-right text-green-700 self-center">
              ₱ {total.toFixed(2)}
            </p>
          ) : (
            ""
          )}
        </div>

        {expenseList && expenseList.length > 0 ? (
          <>
            {expenseList.slice(0, 3).map((expense: ExpenseType) => (
              <div className="grid grid-cols-2 text-xs">
                <p className={`text-[${expense.tag.color}]`}>
                  - {expense.name}
                </p>
                <p className="text-right">₱ {expense.amount}</p>
              </div>
            ))}
            {expenseList.length > 3 ? (
              <p className="text-xs mt-3">See More...</p>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CalendarItem;
