import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/utils/layouts/MainLayout";
import Sidebar from "@/components/dashboard/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Created by Bryan Dizon",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
}
