import { ExpenseType } from "@/utils/types";
import React from "react";
import CalendarItemExpenseList from "./CalendarItemExpenseList";

interface CalanderItemDialogProps {
  isOpen: boolean;
  expenses: ExpenseType[];
  handleCalendarItemClose: () => void;
  refetch: () => void;
}

const CalendarItemDialog = (expenseList: CalanderItemDialogProps) => {
  const { expenses, isOpen, handleCalendarItemClose } = expenseList;
  return (
    <div
      className={`${
        isOpen
          ? "block fixed w-full h-full top-0 left-0 xxxl:p-32 xl:p-20 lg:p-3 xxs:p-3 bg-gray-900 bg-opacity-25"
          : "hidden"
      }`}
    >
      <div
        className={`${
          isOpen
            ? "rounded-md bg-white shadow text-sm p-5 overflow-auto"
            : "hidden"
        }`}
      >
        <div className="flex p-2">
          <div className="flex-grow"></div>
          <button
            className="flex-shrink cursor-pointer "
            onClick={handleCalendarItemClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <CalendarItemExpenseList expenses={expenses} />
      </div>
    </div>
  );
};

export default CalendarItemDialog;
