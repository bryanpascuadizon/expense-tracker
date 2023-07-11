import LatestTransactions from "@/components/dashboard/LatestTransactions";
import PeriodicTabs from "@/components/dashboard/PeriodicTabs";
import Subscriptions from "@/components/dashboard/Subscriptions";
import Tags from "@/components/dashboard/Tags";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="module_title">Summary</div>
      <div className="module_content">
        <PeriodicTabs />
        <section className="transactions grid xxxl:grid-cols-3 xxl:grid-cols-2 xl:grid-cols-2 xxxs:grid-cols-1">
          <LatestTransactions />
          <Subscriptions />
          <Tags />
        </section>
      </div>
    </>
  );
};

export default Dashboard;
