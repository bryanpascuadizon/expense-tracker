import React from "react";

const Subscriptions = () => {
  return (
    <>
      <div className="subscriptions_item xl:col-span-1 lg:col-span-2">
        <div className="flex mb-3">
          <p className="subscriptions_title flex-grow self-center">
            Subscriptions
          </p>
          <p className="summary_see_more">See More</p>
        </div>
        <div className="subscriptions_data">
          <div className="subscriptions_data_item">
            <div className="sdi_icon_panel">
              <p className="material-symbols-outlined">subscriptions</p>
            </div>
            <div className="sdi_left_panel">
              <p className="sd_item_title">Spotify</p>
              <p className="sd_item_tag">Monthly</p>
            </div>
            <div className="sdi_right_panel">
              <p className="sd_item_price">₱ 800.00</p>
              <p className="sd_item_date">Next Billing: Feb, 03</p>
            </div>
          </div>
          <div className="subscriptions_data_item">
            <div className="sdi_icon_panel">
              <p className="material-symbols-outlined">subscriptions</p>
            </div>
            <div className="sdi_left_panel">
              <p className="sd_item_title">Netflix</p>
              <p className="sd_item_tag">Daily</p>
            </div>
            <div className="sdi_right_panel">
              <p className="sd_item_price">₱ 800.00</p>
              <p className="sd_item_date">Next Billing: Feb, 03</p>
            </div>
          </div>
          <div className="subscriptions_data_item">
            <div className="sdi_icon_panel">
              <p className="material-symbols-outlined">subscriptions</p>
            </div>
            <div className="sdi_left_panel">
              <p className="sd_item_title">Disney+</p>
              <p className="sd_item_tag">Yearly</p>
            </div>
            <div className="sdi_right_panel">
              <p className="sd_item_price">₱ 800.00</p>
              <p className="sd_item_date">Next Billing: Feb, 03</p>
            </div>
          </div>
          <div className="subscriptions_data_item">
            <div className="sdi_icon_panel">
              <p className="material-symbols-outlined">subscriptions</p>
            </div>
            <div className="sdi_left_panel">
              <p className="sd_item_title">Youtube</p>
              <p className="sd_item_tag">Monthly</p>
            </div>
            <div className="sdi_right_panel">
              <p className="sd_item_price">₱ 200.00</p>
              <p className="sd_item_date">Next Billing: Feb, 03</p>
            </div>
          </div>
          <div className="subscriptions_data_item">
            <div className="sdi_icon_panel">
              <p className="material-symbols-outlined">subscriptions</p>
            </div>
            <div className="sdi_left_panel">
              <p className="sd_item_title">Amazon Prime</p>
              <p className="sd_item_tag">Weekly</p>
            </div>
            <div className="sdi_right_panel">
              <p className="sd_item_price">₱ 200.00</p>
              <p className="sd_item_date">Next Billing: Feb, 03</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
