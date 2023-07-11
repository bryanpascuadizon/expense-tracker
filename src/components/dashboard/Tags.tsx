import React from "react";

const Tags = () => {
  return (
    <>
      <div className="subscriptions_item xl:col-span-1 lg:col-span-2">
        <div className="subscriptions_title">Expenses by Tags</div>
        <div className="subscriptions_data">
          <div className="subscriptions_data_item">
            <div className="sdi_left_panel">
              <p className="sd_item_title">Aquaflask</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-[90%]"></div>
              </div>
            </div>
          </div>

          <div className="subscriptions_data_item">
            <div className="sdi_left_panel">
              <p className="sd_item_title">Aquaflask</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-[70%]"></div>
              </div>
            </div>
          </div>

          <div className="subscriptions_data_item">
            <div className="sdi_left_panel">
              <p className="sd_item_title">Aquaflask</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-yellow-600 h-2.5 rounded-full dark:bg-yellow-500 w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
