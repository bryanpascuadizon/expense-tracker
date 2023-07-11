import React from "react";

const LatestTransactions = () => {
  return (
    <>
      <div className="transaction_item xl:col-span-1 lg:col-span-2">
        <div className="flex mb-3">
          <p className="transactions_title flex-grow self-center">Latest Transactions</p>
          <p className="summary_see_more">See More</p>
        </div>

        <div className="transactions_data">
          <div className="transactions_data_item">
            <div className="tdi_icon_panel">
              <p className="material-symbols-outlined">payments</p>
            </div>
            <div className="tdi_left_panel">
              <p className="td_item_title">Aquaflask</p>
              <p className="td_item_tag text-violet-500">Home</p>
            </div>
            <div className="tdi_right_panel">
              <p className="td_item_price">₱ 2,700</p>
              <p className="td_item_date">Feb, 03</p>
            </div>
          </div>
          <div className="transactions_data_item">
            <div className="tdi_icon_panel">
              <p className="material-symbols-outlined">payments</p>
            </div>
            <div className="tdi_left_panel">
              <p className="td_item_title">Pet Food</p>
              <p className="td_item_tag text-green-500">Pets</p>
            </div>
            <div className="tdi_right_panel">
              <p className="td_item_price">₱ 800</p>
              <p className="td_item_date">Feb, 03</p>
            </div>
          </div>
          <div className="transactions_data_item">
            <div className="tdi_icon_panel">
              <p className="material-symbols-outlined">payments</p>
            </div>
            <div className="tdi_left_panel">
              <p className="td_item_title">Fruits, Vegetables</p>
              <p className="td_item_tag text-blue-500">Food</p>
            </div>
            <div className="tdi_right_panel">
              <p className="td_item_price">₱ 1,500</p>
              <p className="td_item_date">Feb, 03</p>
            </div>
          </div>
          <div className="transactions_data_item">
            <div className="tdi_icon_panel">
              <p className="material-symbols-outlined">payments</p>
            </div>
            <div className="tdi_left_panel">
              <p className="td_item_title">Biogesic</p>
              <p className="td_item_tag text-red-500">Health</p>
            </div>
            <div className="tdi_right_panel">
              <p className="td_item_price">₱ 1,500.00</p>
              <p className="td_item_date">Feb, 03</p>
            </div>
          </div>
          <div className="transactions_data_item">
            <div className="tdi_icon_panel">
              <p className="material-symbols-outlined">payments</p>
            </div>
            <div className="tdi_left_panel">
              <p className="td_item_title">Bio Masks</p>
              <p className="td_item_tag text-red-500">Health</p>
            </div>
            <div className="tdi_right_panel">
              <p className="td_item_price">₱ 400.00</p>
              <p className="td_item_date">Feb, 03</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestTransactions;
