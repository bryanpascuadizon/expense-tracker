import React from "react";

const PeriodicTabs = () => {
  return (
    <section className="periodic_reports grid xxxl:grid-cols-4 xxl:grid-cols-3 xl:grid-cols-2  xxxs:grid-cols-1 mb-5">
      <div className="periodic_report_item flex">
        <div className="material-symbols-outlined periodic_icon">
          calendar_month
        </div>
        <div className="periodic_data">
          <p className="periodic_amount">₱ 10,000.00</p>
          <p className="period text-violet-500">Yearly</p>
        </div>
      </div>
      <div className="periodic_report_item flex">
        <div className="material-symbols-outlined periodic_icon">
          calendar_month
        </div>
        <div className="periodic_data">
          <p className="periodic_amount">₱ 10,000.00</p>
          <p className="period text-green-500">Monthly</p>
        </div>
      </div>
      <div className="periodic_report_item flex">
        <div className="material-symbols-outlined periodic_icon">
          calendar_month
        </div>
        <div className="periodic_data">
          <p className="periodic_amount">₱ 10,000.00</p>
          <p className="period text-blue-500">Weekly</p>
        </div>
      </div>
      <div className="periodic_report_item flex">
        <div className="material-symbols-outlined periodic_icon">
          calendar_month
        </div>
        <div className="periodic_data">
          <p className="periodic_amount">₱ 10,000.00</p>
          <p className="period text-red-500">Daily</p>
        </div>
      </div>
    </section>
  );
};

export default PeriodicTabs;
