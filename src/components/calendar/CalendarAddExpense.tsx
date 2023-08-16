import React, { useEffect, useState } from "react";
import CalendarAddExpenseField from "./CalendarAddExpenseField";
import { ExpenseType, TagType } from "@/utils/types";
import moment from "moment";
import { useTagQuery } from "@/utils/hooks/tag";
import { useExpenseMutation } from "@/utils/hooks/expense";
import { ADD, TYPEOPTIONS } from "@/utils/constants";

type CalendarAddExpenseProps = {
  refetch: () => void;
  calendarCurrentDate: string;
};

const CalendarAddExpense = (props: CalendarAddExpenseProps) => {
  const { refetch, calendarCurrentDate } = props;
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
    }
    setExpense({
      ...expense,
      [name]: value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const tagId: string = `${expense.tag}`;
    let newExpense: ExpenseType = {
      _id: "",
      name: expense.name,
      amount: expense.amount,
      dateOfTransaction: moment(`${calendarCurrentDate}`).format("YYYY-MM-DD"),
      type: expense.type,
      tag: {
        _id: tagId,
        name: "",
        color: "",
        user_id: "",
      },
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
  };

  useEffect(() => {
    resetFields();
  }, [calendarCurrentDate]);
  return (
    <>
      <div className="w-full text-xl pt-3 pl-3 pr-3">Add Expense</div>
      <form onSubmit={handleSubmit}>
        <div className="p-1 w-full">
          <div className="flex flex-wrap">
            <CalendarAddExpenseField
              id={name}
              name="name"
              value={name}
              type="text"
              placeholder="Name"
              fieldType="text"
              onChange={handleOnChange}
              disabled={false}
            />
            <CalendarAddExpenseField
              id={amount}
              name="amount"
              value={amount}
              type="number"
              placeholder="Amount"
              fieldType="text"
              onChange={handleOnChange}
              disabled={false}
            />
            <CalendarAddExpenseField
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
          <div className="flex flex-wrap">
            <select
              id="type"
              name="type"
              className="rounded-md flex-grow text-sm p-3 m-3 border border-gray-200"
              onChange={handleOnChange}
              required
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
            {/* <CalendarAddExpenseField
              id={type}
              name="tag"
              type=""
              value=""
              fieldType="select"
              placeholder=""
              selectOptions={TAGOPTIONS}
              onChange={handleOnChange}
              disabled={false}
            /> */}
            <select
              id="tag"
              name="tag"
              className="rounded-md flex-grow text-sm p-3 m-3 border border-gray-200"
              onChange={handleOnChange}
              required
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
            <button
              className="rounded-md flex-grow text-sm  p-3 m-3 bg-grey-900  text-white"
              type="submit"
            >
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CalendarAddExpense;
