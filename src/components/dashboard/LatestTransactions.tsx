import React from "react";

const LatestTransactions = () => {
  return (
    <>
      <div className="transaction_item xl:col-span-1 lg:col-span-2">
        <div className="transactions_title">Latest Transactions</div>
        <div className="transactions_data">
          <div className="transactions_data_item">
            <div className="tdi_left_panel">
              <p className="td_item_title">Aquaflask</p>
              <p className="td_item_date">Feb, 03, 2023</p>
            </div>
            <div className="tdi_right_panel">
              <p className="td_item_price">₱ 800.00</p>
            </div>
          </div>
          <div className="transactions_data_item">
            <div className="tdi_left_panel">
              <p className="td_item_title">Aquaflask</p>
              <p className="td_item_date">Feb, 03, 2023</p>
            </div>
            <div className="tdi_right_panel">
              <p className="td_item_price">₱ 800.00</p>
            </div>
          </div>
          <div className="transactions_data_item">
            <div className="tdi_left_panel">
              <p className="td_item_title">Aquaflask</p>
              <p className="td_item_date">Feb, 03, 2023</p>
            </div>
            <div className="tdi_right_panel">
              <p className="td_item_price">₱ 800.00</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default LatestTransactions;
