import React from "react";

const Tags = () => {
  return (
    <>
      <div className="subscriptions_item xl:col-span-1 lg:col-span-2">
        <div className="flex mb-3">
          <p className="subscriptions_title flex-grow self-center">
            Expenses by Tag
          </p>
          <p className="summary_see_more">See More</p>
        </div>
        <div className="subscriptions_data">
          <div className="subscriptions_data_item">
            <div className="sdi_left_panel">
              <p className="sd_item_title mb-2">Home</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-[90%]"></div>
              </div>
            </div>
          </div>

          <div className="subscriptions_data_item">
            <div className="sdi_left_panel">
              <p className="sd_item_title mb-2">Pets</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-[70%]"></div>
              </div>
            </div>
          </div>

          <div className="subscriptions_data_item">
            <div className="sdi_left_panel">
              <p className="sd_item_title mb-2">Food</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-yellow-600 h-2.5 rounded-full dark:bg-blue-500 w-[45%]"></div>
              </div>
            </div>
          </div>

          <div className="subscriptions_data_item">
            <div className="sdi_left_panel">
              <p className="sd_item_title mb-2">Health</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500 w-[20%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
