import { ExpenseList } from "@/utils/types";
import moment from "moment";
import React from "react";

const LatestExpenses = (expenseList: ExpenseList) => {
  console.log(expenseList);
  return (
    <>
      <div className="transaction_item xl:col-span-1 lg:col-span-2">
        <div className="flex mb-3">
          <p className="transactions_title flex-grow self-center">
            Latest Expenses
          </p>
          {/* <p className="summary_see_more">See More</p> */}
        </div>

        <div className="transactions_data">
          {expenseList.data && expenseList.data.length > 0 ? (
            expenseList.data.slice(0, 5).map((item) => (
              <div className="transactions_data_item">
                <div className="tdi_icon_panel">
                  <p className="material-symbols-outlined">payments</p>
                </div>
                <div className="tdi_left_panel">
                  <p className="td_item_title">{item.name}</p>
                  <p className={`td_item_tag text-[${item.tag.color}] inline`}>
                    {item.tag.name}
                  </p>
                  <span className="text-xs"> - {item.type}</span>
                </div>
                <div className="tdi_right_panel">
                  <p className="td_item_price">₱ {item.amount.toFixed(2)}</p>
                  <p className="td_item_date">
                    {moment(item.dateOfTransaction).format("MMM DD, YYYY")}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm">No Expenses...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default LatestExpenses;
