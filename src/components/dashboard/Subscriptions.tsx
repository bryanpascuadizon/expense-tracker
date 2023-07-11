import React from "react";

const Subscriptions = () => {
  return (
    <>
      <div className="subscriptions_item xl:col-span-1 lg:col-span-2">
        <div className="subscriptions_title">Subscriptions</div>
        <div className="subscriptions_data">
          <div className="subscriptions_data_item">
            <div className="sdi_left_panel">
              <p className="sd_item_title">Aquaflask</p>
              <p className="sd_item_date">Feb, 03, 2023</p>
            </div>
            <div className="sdi_right_panel">
              <p className="sd_item_price">₱ 800.00</p>
            </div>
          </div>
          <div className="subscriptions_data_item">
            <div className="sdi_left_panel">
              <p className="sd_item_title">Aquaflask</p>
              <p className="sd_item_date">Feb, 03, 2023</p>
            </div>
            <div className="sdi_right_panel">
              <p className="sd_item_price">₱ 800.00</p>
            </div>
          </div>
          <div className="subscriptions_data_item">
            <div className="sdi_left_panel">
              <p className="sd_item_title">Aquaflask</p>
              <p className="sd_item_date">Feb, 03, 2023</p>
            </div>
            <div className="sdi_right_panel">
              <p className="sd_item_price">₱ 800.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
