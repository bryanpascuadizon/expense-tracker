import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { getUserId } from "@/lib/Auth";
import { getUserTagList } from "@/lib/TagActions";
import axios from "axios";
import { populateExpenses } from "@/utils/reducers/expenseReducer";
import { getUserExpenseList } from "@/lib/ExpenseActions";

interface ExpenseDialogProps {
  expenseItem?: {
    id: string;
    name: string;
    amount: number;
    dateOfTransaction: string;
    expenseType: string;
    expenseTag: {
      id: string;
      name: string;
      color: string;
      user_id: string;
    };
  };
  show: boolean;
  type: string;
  setShow: (show: boolean) => void;
}

const ExpenseDialog = ({
  expenseItem,
  show,
  type,
  setShow,
}: ExpenseDialogProps) => {
  const [expense, setExpense] = useState({
    id: "",
    name: "",
    amount: 0,
    dateOfTransaction: moment(new Date()).format("YYYY-MM-DD"),
    expenseType: "",
    expenseTag: {
      id: "",
      name: "",
      color: "",
      user_id: "",
    },
  });
  const [tagList, setTagList] = useState([]);
  const { id, name, amount, dateOfTransaction, expenseType, expenseTag } =
    expense;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTagList = async () => {
      const userId = getUserId();
      const data = await getUserTagList(userId);
      setTagList(data);
    };

    fetchTagList();
  }, []);

  useEffect(() => {
    if (type === "Edit" || type === "Delete") {
      setExpense({
        id: expenseItem ? expenseItem.id : "",
        name: expenseItem ? expenseItem.name : "",
        amount: expenseItem ? expenseItem.amount : 0,
        dateOfTransaction: expenseItem
          ? moment(expenseItem.dateOfTransaction).format("YYYY-MM-DD")
          : moment(new Date()).format("YYYY-MM-DD"),
        expenseType: expenseItem ? expenseItem.expenseType : "",
        expenseTag: {
          id: expenseItem ? expenseItem.expenseTag.id : "",
          name: expenseItem ? expenseItem.expenseTag.name : "",
          color: expenseItem ? expenseItem.expenseTag.color : "",
          user_id: expenseItem ? expenseItem.expenseTag.user_id : "",
        },
      });
    }
  }, [expenseItem]);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "expenseTag") {
      setExpense({
        ...expense,
        expenseTag: {
          ...expenseTag,
          id: value,
        },
      });
    }
    setExpense({
      ...expense,
      [name]: value,
    });
  };

  const handleEditSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const userId = getUserId();
      const expenseItem = {
        ...expense,
        expenseTag:
          expense.expenseTag.id !== undefined
            ? expense.expenseTag.id
            : expense.expenseTag,
      };
      const expenseRequest = await axios.patch(`/api/expenses/${userId}`, {
        expenseItem,
      });
      if (expenseRequest.status === 200) {
        const expenseList = await getUserExpenseList(userId);
        dispatch(populateExpenses(expenseList));
        setExpense({
          id: "",
          name: "",
          amount: 0,
          dateOfTransaction: moment(new Date()).format("YYYY-MM-DD"),
          expenseType: "",
          expenseTag: {
            id: "",
            name: "",
            color: "",
            user_id: "",
          },
        });
        setShow(false);
      }
    } catch (error) {
      console.error("Failed to update expense: ", error);
    }
  };

  const handleAddSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const userId = getUserId();
      const expenseRequest = await axios.post(`/api/expenses/${userId}`, {
        expense,
      });

      if (expenseRequest.status === 200) {
        const expenseList = await getUserExpenseList(userId);
        console.log("EXPENSE LIST: ", expenseList);
        dispatch(populateExpenses(expenseList));
        setExpense({
          id: "",
          name: "",
          amount: 0,
          dateOfTransaction: moment(new Date()).format("YYYY-MM-DD"),
          expenseType: "",
          expenseTag: {
            id: "",
            name: "",
            color: "",
            user_id: "",
          },
        });
        setShow(false);
      }
    } catch (error) {
      console.log("Failed to post expense: ", error);
    }
  };

  const handleDeleteSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const userId = getUserId();
      const expenseRequest = await axios.delete(`/api/expenses/${expense.id}`);
      if (expenseRequest.status === 200) {
        const expenseList = await getUserExpenseList(userId);
        dispatch(populateExpenses(expenseList));
        setShow(false);
      }
    } catch (error) {
      console.error("Failed to delete expense: ", error);
    }
  };

  return show ? (
    <div className="fixed top-0 left-0 bottom-0 bg-gray-400 bg-opacity-50 z-10 w-full h-full overflow-auto">
      {/* Modal Content */}
      <form className="rounded-md bg-gray-100 shadow m-auto mt-20 max-w-md">
        {/* Modal Title */}
        <div className="p-5 border-b border-b-gray-200">
          <p className="text-xl">
            {type === "Add"
              ? "Add Expense"
              : type === "Edit"
              ? "Edit Expense"
              : "Are you sure you want to delete this expense?"}
          </p>
        </div>
        {/* Modal Body */}
        <div className="p-5">
          {/* Name */}
          <div>
            {type !== "Delete" ? <p className={`text-md mb-3`}>Name:</p> : ""}
            {type === "Delete" ? (
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
            {type !== "Delete" ? <p className={`text-md mb-3`}>Amount:</p> : ""}
            {type === "Delete" ? (
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
            {type !== "Delete" ? (
              <p className={`text-md mb-3`}>Date of transaction:</p>
            ) : (
              ""
            )}
            {type === "Delete" ? (
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
            {type !== "Delete" ? <p className={`text-md mb-3`}>Type:</p> : ""}
            {type === "Delete" ? (
              <p className={`text-md mb-3`}>
                Type: <span className={`text-md mb-3`}>{expenseType}</span>
              </p>
            ) : (
              <select
                id="expenseType"
                name="expenseType"
                className="mb-3 text-sm rounded-md p-3 w-full"
                onChange={handleOnChange}
                required
              >
                <option value="">Choose Type</option>
                <option
                  value="Cash"
                  selected={expenseType === "Cash" ? true : false}
                >
                  Cash
                </option>
                <option
                  value="Credit"
                  selected={expenseType === "Credit" ? true : false}
                >
                  Credit
                </option>
                <option
                  value="Debit"
                  selected={expenseType === "Debit" ? true : false}
                >
                  Debit
                </option>
              </select>
            )}
          </div>
          {/* Tags */}
          <div>
            {type !== "Delete" ? <p className={`text-md mb-3`}>Tags:</p> : ""}
            {type === "Delete" ? (
              <p className={`text-md mb-3`}>
                Tags: <span className={`text-md mb-3`}>{expenseTag.name}</span>
              </p>
            ) : (
              <select
                id="expenseTag"
                name="expenseTag"
                className="mb-3 text-sm rounded-md p-3 w-full"
                onChange={handleOnChange}
                required
              >
                <option value="">Choose Tag</option>
                {tagList.map(
                  (tag: { _id: string; name: string; color: string }) => (
                    <option
                      key={tag._id}
                      value={tag._id}
                      selected={tag._id === expenseTag.id ? true : false}
                    >
                      {tag.name}
                    </option>
                  )
                )}
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
              type === "Add"
                ? handleAddSubmit
                : type === "Edit"
                ? handleEditSubmit
                : handleDeleteSubmit
            }
          >
            {type === "Add" ? "Add" : type === "Edit" ? "Edit" : "Delete"}{" "}
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
