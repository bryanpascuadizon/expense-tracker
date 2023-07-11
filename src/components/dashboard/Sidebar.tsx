import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_group">
        <Link className="sidebar_item" href="/dashboard">
          <p className="material-symbols-outlined sidebar_icon">
            space_dashboard
          </p>
          <p className="sidebar_text">Summary</p>
        </Link>
        <Link className="sidebar_item" href="/expenses">
          <p className="material-symbols-outlined sidebar_icon">wallet</p>
          <p className="sidebar_text">Expenses</p>
        </Link>
        {/* <Link className="sidebar_item" href="/budget_plans">
          <p className="material-symbols-outlined sidebar_icon">menu_book</p>
          <p className="sidebar_text">Budget Plans</p>
        </Link> */}
        <Link className="sidebar_item" href="/manage_tags">
          <p className="material-symbols-outlined sidebar_icon">sell</p>
          <p className="sidebar_text">Manage Tags</p>
        </Link>
        <Link className="sidebar_item" href="/manage_tags">
          <p className="material-symbols-outlined sidebar_icon">sell</p>
          <p className="sidebar_text">Manage Subscriptions</p>
        </Link>
        {/* <Link className="sidebar_item" href="/reports">
          <p className="material-symbols-outlined sidebar_icon">lab_profile</p>
          <p className="sidebar_text">Generate Reports</p>
        </Link> */}
        <Link className="sidebar_item" href="/">
          <p className="material-symbols-outlined sidebar_icon">logout</p>
          <p className="sidebar_text">Logout</p>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
