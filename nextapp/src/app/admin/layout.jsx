"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import "../styles/globals.css";
import Dashboard from "@/components/Admin/Common/Dashboard";
import AdminNavbar from "@/components/Admin/Common/AdminNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed((c) => !c);
  };

  return (
    <>
      <html lang="en">
        <head>
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');`}
          </style>
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} font-sans`}
        >
          <div className="flex min-h-screen w-full">
            {/* Sidebar (fixed, not scrollable internally) */}
            <div
              className={`flex-shrink-0 transition-[width] duration-300 ease-in-out ${
                collapsed ? "w-16" : "w-64"
              } bg-[#0a0f20] min-h-screen`}
            >
              <Dashboard collapsed={collapsed} />
            </div>

            {/* Main area: navbar + scrollable content */}
            <div className="flex flex-col flex-1">
              {/* Navbar */}
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <AdminNavbar
                  collapsed={collapsed}
                  toggleCollapsed={toggleCollapsed}
                />
              </div>

              {/* Scrollable page content */}
              <main className="flex-1 overflow-auto bg-[#f8fafc]">
                {children}
              </main>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
