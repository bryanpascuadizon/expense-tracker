import type { Metadata } from "next";
import MainLayout from "@/utils/layouts/MainLayout";
import { INTER } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Summary of Expenes",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="main_container grid xxxl:grid-cols-5 xxl:grid-cols-5 xl:grid-cols-4 xxxs:grid-cols-1 h-full">
    //   <div className="main_sidebar xl:block xxs:hidden">
    //     <Sidebar />
    //   </div>
    //   <div className="main_content xxxl:col-span-4 xxl:col-span-4 xs:col-span-3">
    //     {children}
    //   </div>
    // </div>
    <MainLayout inter={INTER} children={children} />
  );
}
