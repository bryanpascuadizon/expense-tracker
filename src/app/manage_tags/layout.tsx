import "../globals.css";
import type { Metadata } from "next";
import MainLayout from "@/utils/layouts/MainLayout";
import { INTER } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Manage Tags",
  description: "List of expense tags created by the user",
};

export default function TagsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout inter={INTER} children={children} />;
}
