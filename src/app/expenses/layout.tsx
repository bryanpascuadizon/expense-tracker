import type { Metadata } from "next";
import MainLayout from "@/utils/layouts/MainLayout";
import { INTER } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Expenses",
  description: "List of expenses of the user",
};

export default function ExpensesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout inter={INTER} children={children} />;
}
