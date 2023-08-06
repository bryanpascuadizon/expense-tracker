import type { Metadata } from "next";
import MainLayout from "@/utils/layouts/MainLayout";
import { INTER } from "@/utils/constants";
import Sidebar from "@/components/dashboard/Sidebar";

export const metadata: Metadata = {
  title: "Expenses",
  description: "List of expenses of the user",
};

export default function ExpensesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // return <MainLayout inter={INTER} children={children} />;
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
