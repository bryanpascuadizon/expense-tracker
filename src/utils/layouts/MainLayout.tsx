import { NextFont } from "next/dist/compiled/@next/font";
import React from "react";
import Providers from "../provider";
import Sidebar from "@/components/dashboard/Sidebar";

interface MainLayoutProps {
  inter: NextFont;
  children: React.ReactNode;
}

const MainLayout = ({ inter, children }: MainLayoutProps) => {
  return (
    <div className="main_container grid xxxl:grid-cols-5 xxl:grid-cols-5 xl:grid-cols-4 xxxs:grid-cols-1 h-full">
      <div className="main_sidebar xl:block xxs:hidden">
        <Sidebar />
      </div>
      <div className="main_content xxxl:col-span-4 xxl:col-span-4 xs:col-span-3">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
