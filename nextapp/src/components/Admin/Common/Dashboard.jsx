"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoSignOut } from "react-icons/go";
import {
  MdSpaceDashboard,
  MdOutlineCalendarToday,
  MdDashboard,
} from "react-icons/md";
import { FaChalkboardTeacher, FaBook, FaUserCircle } from "react-icons/fa";
import { GiGraduateCap, GiClassicalKnowledge } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";

interface Dashboard1Props {
  collapsed: boolean;
}

const navItems = [
  {
    label: "Dashboard",
    icon: <MdSpaceDashboard className="text-[#93c5fd]" />,
    href: "/admin",
  },
  {
    label: "Teachers",
    icon: <FaChalkboardTeacher className="text-[#8b5cf6]" />,
    href: "/admin/teachers",
  },
  {
    label: "Students",
    icon: <GiGraduateCap className="text-[#f59e0b]" />,
    href: "/admin/students",
  },
  {
    label: "Attendance",
    icon: <MdOutlineCalendarToday className="text-[#10b981]" />,
    href: "/admin/attendance",
  },
  {
    label: "Library",
    icon: <FaBook className="text-[#6366f1]" />,
    href: "/admin/library",
  },
  {
    label: "Classes",
    icon: <GiClassicalKnowledge className="text-[#22c55e]" />,
    href: "/admin/classes",
  },
  {
    label: "Profile",
    icon: <FaUserCircle className="text-[#f43f5e]" />,
    href: "/admin/profile",
  },
  {
    label: "Settings",
    icon: <FiSettings className="text-[#94a3b8]" />,
    href: "/admin/settings",
  },
];

const Dashboard1: React.FC<Dashboard1Props> = ({ collapsed }) => {
  const pathname = usePathname();

  return (
    <section
      className={`min-h-screen z-50 bg-[#101828] border-r border-[#323B4B] text-zinc-200 fixed flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div
        className={`flex items-center ${
          collapsed ? "justify-center" : "justify-between"
        } px-3 py-4`}
      >
        <div className="flex items-center space-x-2">
          <MdDashboard className="text-[#93c5fd] text-2xl flex-shrink-0" />
          {!collapsed && (
            <h3 className="text-lg font-semibold tracking-tight">Dashboard</h3>
          )}
        </div>
      </div>

      <div className="px-3">
        <button>
          {!collapsed && <span className="ml-2 text-zinc-300">Menu</span>}
        </button>

        {navItems.map(({ label, icon, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className={`mt-2 group flex items-center w-full py-2 px-3 text-zinc-200 rounded-md transition-colors relative ${
                isActive ? "bg-[#1e293b]" : "hover:bg-[#1e293b]"
              }`}
              style={{
                justifyContent: collapsed ? "center" : "flex-start",
                gap: collapsed ? 0 : 12,
              }}
            >
              <span className="text-xl flex-shrink-0">{icon}</span>
              <span
                className="truncate transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: collapsed ? 0 : 1,
                  whiteSpace: "nowrap",
                  width: collapsed ? 0 : "auto",
                  overflow: "hidden",
                  pointerEvents: collapsed ? "none" : "auto",
                }}
              >
                {label}
              </span>
              {collapsed && (
                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#1e293b] px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  {label}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto px-3 pb-6">
        <Link
          href="/"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          aria-label="Checkout"
        >
          <GoSignOut className="text-xl" />
          {!collapsed && (
            <motion.span
              initial={{ scale: 0.4, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="whitespace-nowrap"
            >
              Go Back
            </motion.span>
          )}
        </Link>
      </div>
    </section>
  );
};

export default Dashboard1;
