"use client";

import LatestExpenses from "@/components/dashboard/LatestExpenses";
import PeriodicTabs from "@/components/dashboard/PeriodicTabs";
import { getUserExpenseList } from "@/lib/ExpenseActions";
import { getUserId } from "@/lib/LoginActions";
import { ExpenseList } from "@/utils/types";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [expenseList, setExpenseList] = useState<any>();

  useEffect(() => {
    const fetchReportList = async () => {
      const userId = getUserId();
      const data: any = await getUserExpenseList(userId);

      setExpenseList(data);
    };
    fetchReportList();
  }, []);
  return (
    <>
      <div className="module_title">Summary</div>
      <div className="module_content">
        <PeriodicTabs data={expenseList} />
        <section className="transactions grid xxl:grid-cols-3 xl:grid-cols-2 xxxs:grid-cols-1">
          <LatestExpenses data={expenseList} />
          {/* <Subscriptions /> */}
          {/* <Tags /> */}
        </section>
      </div>
    </>
  );
};

export default Dashboard;
