import React, { useEffect, useState } from "react";
import CalendarExpenseField from "./CalendarExpenseField";
import { ExpenseType, TagType } from "@/utils/types";
import moment from "moment";
import { useTagQuery } from "@/utils/hooks/tag";
import { useExpenseMutation } from "@/utils/hooks/expense";
import { ADD, DELETE, EDIT, TYPEOPTIONS } from "@/utils/constants";

type CalendarExpenseProps = {
  refetch: () => void;
  calendarCurrentDate: string;
  expenseItem: ExpenseType;
  isEdit: boolean;
  isDelete: boolean;
  setIsEdit: (isEdit: boolean) => void;
  setIsDelete: (isDelete: boolean) => void;
  setExpenseItem: (expenseItem: ExpenseType) => void;
};

const CalendarExpense = (props: CalendarExpenseProps) => {
  const {
    refetch,
    calendarCurrentDate,
    expenseItem,
    isEdit,
    isDelete,
    setIsEdit,
    setIsDelete,
    setExpenseItem,
  } = props;
  const [expense, setExpense] = useState<ExpenseType>({
    _id: "",
    name: "",
    amount: 0,
    dateOfTransaction: moment(`${calendarCurrentDate}`).format("YYYY-MM-DD"),
    type: "",
    tag: {
      _id: "",
      name: "",
      color: "",
      user_id: "",
    },
    user_id: "",
  });
  const { name, amount, dateOfTransaction, type, tag } = expense;
  const { data: TAGOPTIONS } = useTagQuery();
  const { mutate } = useExpenseMutation();

  const resetFields = () => {
    setExpense({
      _id: "",
      name: "",
      amount: 0,
      dateOfTransaction: moment(calendarCurrentDate).format("YYYY-MM-DD"),
      type: "",
      tag: {
        _id: "",
        name: "",
        color: "",
        user_id: "",
      },
      user_id: "",
    });
    setExpenseItem({
      _id: "",
      name: "",
      amount: 0,
      dateOfTransaction: moment(calendarCurrentDate).format("YYYY-MM-DD"),
      type: "",
      tag: {
        _id: "",
        name: "",
        color: "",
        user_id: "",
      },
      user_id: "",
    });
  };
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "tag") {
      setExpense({
        ...expense,
        tag: {
          ...tag,
          _id: value,
        },
      });
    } else {
      setExpense({
        ...expense,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isEdit || isDelete) {
      handleEditDeleteExpense();
    } else {
      const tagId: string = `${expense.tag._id}`;
      let newExpense: ExpenseType = {
        _id: "",
        name: expense.name,
        amount: expense.amount,
        dateOfTransaction: moment(`${calendarCurrentDate}`).format(
          "YYYY-MM-DD"
        ),
        type: expense.type,
        tag: expense.tag,
        user_id: "",
      };

      await mutate(
        {
          type: ADD,
          expense: newExpense,
        },
        {
          onSuccess: () => {
            resetFields();
            refetch();
          },
          onError: (error) => {
            console.error("Add Expense: ", error);
          },
        }
      );
    }
  };

  const handleEditDeleteExpense = async () => {
    let existingExpense: ExpenseType = {
      _id: expense._id,
      name: expense.name,
      amount: expense.amount,
      dateOfTransaction: expense.dateOfTransaction,
      type: expense.type,
      tag: {
        _id: expense.tag._id !== undefined ? expense.tag._id : "",
        name: expense.tag.name != undefined ? expense.tag.name : "",
        color: expense.tag.color != undefined ? expense.tag.color : "",
        user_id: expense.tag.user_id != undefined ? expense.tag.user_id : "",
      },
      user_id: "",
    };
    await mutate(
      {
        type: isEdit ? EDIT : isDelete ? DELETE : "",
        expense: existingExpense,
      },
      {
        onSuccess: () => {
          setIsDelete(false);
          setIsEdit(false);
          resetFields();
          refetch();
        },
        onError: (error) => {
          console.error("Edit/Delete Expense: ", error);
        },
      }
    );
  };

  useEffect(() => {
    if (expenseItem !== null) {
      setExpense(expenseItem);
    }
  }, [isEdit, isDelete, expenseItem]);

  useEffect(() => {
    resetFields();
  }, []);

  useEffect(() => {
    resetFields();
  }, [calendarCurrentDate]);

  return (
    <>
      <div className="w-full text-xl pt-3 pl-3 pr-3">Add Expense</div>
      <form onSubmit={handleSubmit}>
        <div className="p-1 w-full">
          <div className="grid grid-cols-3">
            <CalendarExpenseField
              id={name}
              name="name"
              value={name}
              type="text"
              placeholder="Name"
              fieldType="text"
              onChange={handleOnChange}
              disabled={isDelete}
            />
            <CalendarExpenseField
              id={amount}
              name="amount"
              value={amount}
              type="number"
              placeholder="Amount"
              fieldType="text"
              onChange={handleOnChange}
              disabled={isDelete}
            />
            <CalendarExpenseField
              id={dateOfTransaction}
              name="dateOfTransaction"
              value={moment(`${calendarCurrentDate}`).format("YYYY-MM-DD")}
              type="date"
              placeholder="Date of Transaction"
              fieldType="text"
              onChange={handleOnChange}
              disabled={true}
            />
          </div>
          <div className="grid grid-cols-3">
            <select
              id="type"
              name="type"
              className="rounded-md flex-grow text-sm p-3 m-3 border border-gray-200"
              onChange={handleOnChange}
              required
              disabled={isDelete}
            >
              {TYPEOPTIONS.map((item: { value: string }) => (
                <option
                  value={item.value}
                  selected={type === item.value ? true : false}
                >
                  {item.value === "" ? "Choose Type" : item.value}
                </option>
              ))}
            </select>
            <select
              id="tag"
              name="tag"
              className="rounded-md flex-grow text-sm p-3 m-3 border border-gray-200"
              onChange={handleOnChange}
              required
              disabled={isDelete}
            >
              <option value="">Choose Tag</option>
              {TAGOPTIONS &&
                TAGOPTIONS.map((tagItem: TagType) => (
                  <option
                    key={tagItem._id}
                    value={tagItem._id}
                    selected={tagItem._id === tag._id ? true : false}
                  >
                    {tagItem.name}
                  </option>
                ))}
            </select>
            <div className="flex ">
              <button
                className={`rounded-md text-sm  p-3 m-3 bg-grey-900  text-white ${
                  isEdit || isDelete ? "basis-1/2" : "w-full"
                }`}
                type="submit"
              >
                {isEdit ? "Edit" : isDelete ? "Delete" : "Add"}
              </button>
              {isEdit || isDelete ? (
                <button
                  className="rounded-md basis-1/2 text-sm  p-3 m-3 bg-grey-300  text-black"
                  type="submit"
                  onClick={() => {
                    setIsDelete(false);
                    setIsEdit(false);
                    resetFields();
                  }}
                >
                  Cancel
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CalendarExpense;
