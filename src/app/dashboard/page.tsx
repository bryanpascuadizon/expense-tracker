"use client";

//REACT IMPORTS
import React from "react";

//COMPONENTS
import LatestExpenses from "@/components/dashboard/LatestExpenses";
import PeriodicTabs from "@/components/dashboard/PeriodicTabs";

//LIB
import { useExpenseQuery } from "@/utils/hooks/expense";

//UTILS
import { ExpenseType } from "@/utils/types";

const Dashboard = () => {
  const { data } = useExpenseQuery();
  return (
    <>
      <div className="module_title">Summary</div>
      <div className="module_content">
        <PeriodicTabs expenses={data as ExpenseType[]} />
        <section className="transactions grid xxl:grid-cols-3 xl:grid-cols-2 xxxs:grid-cols-1">
          <LatestExpenses expenses={data as ExpenseType[]} />
          {/* <Subscriptions /> */}
          {/* <Tags /> */}
        </section>
      </div>
    </>
  );
};

export default Dashboard;
