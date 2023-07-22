"use client";

import { getUserPeriodicReportList } from "@/lib/ExpenseActions";
import { getUserId } from "@/lib/LoginActions";
import React, { useEffect, useState } from "react";

const PeriodicTabs = () => {
  const [periodicReportList, setPeriodicReportList] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  });

  useEffect(() => {
    const fetchReportList = async () => {
      const userId = getUserId();
      const data: any = await getUserPeriodicReportList(userId);
      setPeriodicReportList({
        daily: data ? data?.dailyCompute : 0.0,
        weekly: data ? data?.weeklyCompute : 0.0,
        monthly: data ? data?.monthlyCompute : 0.0,
        yearly: data ? data?.yearlyCompute : 0.0,
      });
    };

    fetchReportList();
  }, []);

  return (
    <section className="periodic_reports grid xxxl:grid-cols-4 xxl:grid-cols-3 xl:grid-cols-2  xxxs:grid-cols-1 mb-5">
      <div className="periodic_report_item flex">
        <div className="material-symbols-outlined periodic_icon">
          calendar_month
        </div>
        <div className="periodic_data">
          <p className="periodic_amount">₱ {periodicReportList.daily}</p>
          <p className="period text-blue-600">Daily</p>
        </div>
      </div>
      <div className="periodic_report_item flex">
        <div className="material-symbols-outlined periodic_icon">
          calendar_month
        </div>
        <div className="periodic_data">
          <p className="periodic_amount">₱ {periodicReportList.weekly}</p>
          <p className="period text-blue-600">Weekly</p>
        </div>
      </div>
      <div className="periodic_report_item flex">
        <div className="material-symbols-outlined periodic_icon">
          calendar_month
        </div>
        <div className="periodic_data">
          <p className="periodic_amount">₱ {periodicReportList.monthly}</p>
          <p className="period text-blue-600">Monthly</p>
        </div>
      </div>
      <div className="periodic_report_item flex">
        <div className="material-symbols-outlined periodic_icon">
          calendar_month
        </div>
        <div className="periodic_data">
          <p className="periodic_amount">₱ {periodicReportList.yearly}</p>
          <p className="period text-blue-600">Yearly</p>
        </div>
      </div>
    </section>
  );
};

export default PeriodicTabs;
