import Sidebar from "@/components/dashboard/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Created by Bryan Dizon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto"
        />
        {/* Google Material Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </head>
      <body className={inter.className}>
        <div className="main_container grid xxxl:grid-cols-5 xxl:grid-cols-5 xl:grid-cols-4 xxxs:grid-cols-1 h-full">
          <div className="main_sidebar xl:block xxs:hidden">
            <Sidebar />
          </div>
          <div className="main_content xxxl:col-span-4 xxl:col-span-4 xs:col-span-3">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
