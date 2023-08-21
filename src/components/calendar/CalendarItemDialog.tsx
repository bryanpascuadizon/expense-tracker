import { ExpenseType } from "@/utils/types";
import React, { useEffect, useState } from "react";
import CalendarItemExpenseList from "./CalendarItemExpenseList";
import CalendarExpense from "./CalendarExpense";

interface CalanderItemDialogProps {
  isOpen: boolean;
  expenses: ExpenseType[];
  calendarCurrentDate: string;
  handleCalendarItemClose: () => void;
  refetch: () => void;
}

const CalendarItemDialog = (expenseList: CalanderItemDialogProps) => {
  const {
    expenses,
    isOpen,
    handleCalendarItemClose,
    calendarCurrentDate,
    refetch,
  } = expenseList;

  const [expenseItem, setExpenseItem] = useState<ExpenseType>(Object);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  return (
    <div
      className={`${
        isOpen
          ? "block fixed w-full h-full top-0 left-0 xxxl:p-32 xl:p-20 lg:p-3 xxs:p-3 bg-gray-900 bg-opacity-25 overflow-auto"
          : "hidden"
      }`}
    >
      <div
        className={`${
          isOpen
            ? "rounded-md bg-white shadow text-sm p-5 overflow-auto relative"
            : "hidden"
        }`}
      >
        <button
          className="absolute cursor-pointer right-[20px]"
          onClick={() => {
            handleCalendarItemClose();
            setExpenseItem(Object);
            setIsEdit(false);
            setIsDelete(false);
          }}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <CalendarExpense
          refetch={refetch}
          calendarCurrentDate={calendarCurrentDate}
          expenseItem={expenseItem}
          isEdit={isEdit}
          isDelete={isDelete}
          setIsEdit={setIsEdit}
          setIsDelete={setIsDelete}
          setExpenseItem={setExpenseItem}
        />
        <CalendarItemExpenseList
          expenses={expenses}
          calendarCurrentDate={calendarCurrentDate}
          setExpenseItem={setExpenseItem}
          setIsEdit={setIsEdit}
          setIsDelete={setIsDelete}
        />
      </div>
    </div>
  );
};

export default CalendarItemDialog;
