"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const logoutRequest = axios.post("/api/logout");

      if ((await logoutRequest).status === 200) {
        localStorage.removeItem("user-id");
        router.push("/login");
      }
    } catch (error) {
      router.push("/login");
    }
  };
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
        {/* <Link className="sidebar_item" href="/manage_tags">
          <p className="material-symbols-outlined sidebar_icon">
            subscriptions
          </p>
          <p className="sidebar_text">Manage Subscriptions</p>
        </Link> */}
        {/* <Link className="sidebar_item" href="/reports">
          <p className="material-symbols-outlined sidebar_icon">lab_profile</p>
          <p className="sidebar_text">Generate Reports</p>
        </Link> */}
        <div className="sidebar_item cursor-pointer" onClick={handleLogout}>
          <p className="material-symbols-outlined sidebar_icon">logout</p>
          <p className="sidebar_text">Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
