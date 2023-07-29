//REACT IMPORTS
import React, { useEffect, useState } from "react";
import moment from "moment";

//UTILS
import { ADD, EDIT, DELETE } from "@/utils/constants";
import { ExpenseType, TagType } from "@/utils/types";
import { useTagQuery } from "@/utils/hooks/tag";
import { useExpenseMutation, useExpenseQuery } from "@/utils/hooks/expense";

interface ExpenseDialogProps {
  expenseItem?: ExpenseType;
  show: boolean;
  procedure: string;
  setShow: (show: boolean) => void;
}

const ExpenseDialog = ({
  expenseItem,
  show,
  procedure,
  setShow,
}: ExpenseDialogProps) => {
  const [expense, setExpense] = useState<ExpenseType>({
    _id: "",
    name: "",
    amount: 0,
    dateOfTransaction: moment(new Date()).format("YYYY-MM-DD"),
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
  const { mutate } = useExpenseMutation();
  const { refetch } = useExpenseQuery();
  const { data } = useTagQuery();

  useEffect(() => {
    if (procedure === "Edit" || procedure === "Delete") {
      setExpense({
        _id: expenseItem ? expenseItem._id : "",
        name: expenseItem ? expenseItem.name : "",
        amount: expenseItem ? expenseItem.amount : 0,
        dateOfTransaction: expenseItem
          ? moment(expenseItem.dateOfTransaction).format("YYYY-MM-DD")
          : moment(new Date()).format("YYYY-MM-DD"),
        type: expenseItem ? expenseItem.type : "",
        tag: {
          _id: expenseItem ? expenseItem.tag._id : "",
          name: expenseItem ? expenseItem.tag.name : "",
          color: expenseItem ? expenseItem.tag.color : "",
          user_id: expenseItem ? expenseItem.tag.user_id : "",
        },
        user_id: expenseItem ? expenseItem.user_id : "",
      });
    }
  }, [expenseItem]);

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

  const resetFields = () => {
    setExpense({
      _id: "",
      name: "",
      amount: 0,
      dateOfTransaction: moment(new Date()).format("YYYY-MM-DD"),
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

  const handleEditSubmit = async (e: any) => {
    e.preventDefault();

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
        type: EDIT,
        expense: existingExpense,
      },
      {
        onSuccess: () => {
          resetFields();
          setShow(false);
          refetch();
        },
        onError: (error) => {
          console.error("Edit Expense: ", error);
        },
      }
    );
  };

  const handleAddSubmit = async (e: any) => {
    e.preventDefault();

    const tagId: string = `${expense.tag}`;
    let newExpense: ExpenseType = {
      _id: "",
      name: expense.name,
      amount: expense.amount,
      dateOfTransaction: expense.dateOfTransaction,
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
          setShow(false);
          refetch();
        },
        onError: (error) => {
          console.error("Add Expense: ", error);
        },
      }
    );
  };

  const handleDeleteSubmit = async (e: any) => {
    e.preventDefault();

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
        type: DELETE,
        expense: existingExpense,
      },
      {
        onSuccess: () => {
          resetFields();
          setShow(false);
          refetch();
        },
        onError: (error) => {
          console.error("Delete Expense: ", error);
        },
      }
    );
  };

  return show ? (
    <div className="fixed top-0 left-0 bottom-0 bg-gray-400 bg-opacity-50 z-10 w-full h-full overflow-auto">
      {/* Modal Content */}
      <form className="rounded-md bg-gray-100 shadow m-auto mt-20 max-w-md">
        {/* Modal Title */}
        <div className="p-5 border-b border-b-gray-200">
          <p className="text-xl">
            {procedure === "Add"
              ? "Add Expense"
              : procedure === "Edit"
              ? "Edit Expense"
              : "Are you sure you want to delete this expense?"}
          </p>
        </div>
        {/* Modal Body */}
        <div className="p-5">
          {/* Name */}
          <div>
            {procedure !== "Delete" ? (
              <p className={`text-md mb-3`}>Name:</p>
            ) : (
              ""
            )}
            {procedure === "Delete" ? (
              <p className={`text-md mb-3`}>
                Name: <span className={`text-md mb-3`}>{name}</span>
              </p>
            ) : (
              <input
                type="text"
                name="name"
                value={name}
                placeholder="type here..."
                className="mb-3 rounded-md text-sm p-3 w-full border border-gray-200"
                onChange={handleOnChange}
                required
              />
            )}
          </div>
          {/* Amount */}
          <div>
            {procedure !== "Delete" ? (
              <p className={`text-md mb-3`}>Amount:</p>
            ) : (
              ""
            )}
            {procedure === "Delete" ? (
              <p className={`text-md mb-3`}>
                Amount: <span className={`text-md mb-3`}>{amount}</span>
              </p>
            ) : (
              <input
                type="number"
                name="amount"
                value={amount}
                placeholder="type here..."
                className="mb-3 rounded-md text-sm p-3 w-full border border-gray-200"
                onChange={handleOnChange}
                required
              />
            )}
          </div>
          {/* Date Of Transaction */}
          <div>
            {procedure !== "Delete" ? (
              <p className={`text-md mb-3`}>Date of transaction:</p>
            ) : (
              ""
            )}
            {procedure === "Delete" ? (
              <p className={`text-md mb-3`}>
                Date of transaction:{" "}
                <span className={`text-md mb-3`}>
                  {moment(dateOfTransaction).format("MMM DD, YYYY")}
                </span>
              </p>
            ) : (
              <input
                type="date"
                name="dateOfTransaction"
                value={dateOfTransaction}
                placeholder="type here..."
                className="mb-3 rounded-md text-sm p-3 w-full border border-gray-200"
                onChange={handleOnChange}
              />
            )}
          </div>
          {/* Type */}
          <div>
            {procedure !== "Delete" ? (
              <p className={`text-md mb-3`}>Type:</p>
            ) : (
              ""
            )}
            {procedure === "Delete" ? (
              <p className={`text-md mb-3`}>
                Type: <span className={`text-md mb-3`}>{type}</span>
              </p>
            ) : (
              <select
                id="type"
                name="type"
                className="mb-3 text-sm rounded-md p-3 w-full"
                onChange={handleOnChange}
                required
              >
                <option value="">Choose Type</option>
                <option value="Cash" selected={type === "Cash" ? true : false}>
                  Cash
                </option>
                <option
                  value="Credit"
                  selected={type === "Credit" ? true : false}
                >
                  Credit
                </option>
                <option
                  value="Debit"
                  selected={type === "Debit" ? true : false}
                >
                  Debit
                </option>
              </select>
            )}
          </div>
          {/* Tags */}
          <div>
            {procedure !== "Delete" ? (
              <p className={`text-md mb-3`}>Tags:</p>
            ) : (
              ""
            )}
            {procedure === "Delete" ? (
              <p className={`text-md mb-3`}>
                Tags: <span className={`text-md mb-3`}>{tag.name}</span>
              </p>
            ) : (
              <select
                id="tag"
                name="tag"
                className="mb-3 text-sm rounded-md p-3 w-full"
                onChange={handleOnChange}
                required
              >
                <option value="">Choose Tag</option>
                {data &&
                  data.map((tagItem: TagType) => (
                    <option
                      key={tagItem._id}
                      value={tagItem._id}
                      selected={tagItem._id === tag._id ? true : false}
                    >
                      {tagItem.name}
                    </option>
                  ))}
              </select>
            )}
          </div>
        </div>
        {/* Modal Footer */}
        <div className="flex flex-row-reverse p-5 border-t border-t-gray-200">
          <button
            type="submit"
            className="text-sm pt-3 pb-3 pl-5 pr-5 bg-grey-900 rounded-md text-white"
            onClick={
              procedure === "Add"
                ? handleAddSubmit
                : procedure === "Edit"
                ? handleEditSubmit
                : handleDeleteSubmit
            }
          >
            {procedure === "Add"
              ? "Add"
              : procedure === "Edit"
              ? "Edit"
              : "Delete"}{" "}
            Expense
          </button>
          <button
            className="text-sm pt-3 pb-3 pl-5 pr-5 bg-grey-300 rounded-md text-black mr-3"
            onClick={() => setShow(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  ) : (
    ""
  );
};

export default ExpenseDialog;
