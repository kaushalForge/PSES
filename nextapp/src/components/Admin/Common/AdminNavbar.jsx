"use client";

import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

interface DashboardProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const AdminNavbar: React.FC<DashboardProps> = ({
  collapsed,
  toggleCollapsed,
}) => {
  return (
    <>
      <nav className="bg-[#101828] border-b border-[#323B4B] text-zinc-400 w-full">
        <div className="flex items-center justify-between w-full px-4 py-4">
          <div className="flex items-center justify-center gap-4">
            <button onClick={toggleCollapsed}>
              <HiOutlineMenuAlt1 className="h-10 w-10 border border-[#323B4B] rounded-lg p-2" />
            </button>
            <div className="flex items-center border border-[#323B4B] rounded-lg px-3 py-2 w-full max-w-md bg-[#171F2F] shadow-lg focus-within:ring-1 focus-within:ring-[#4b97a4]">
              <FiSearch className="text-zinc-300 mr-2 text-xl" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none text-zinc-300 placeholder-zinc-300 placeholder:text-sm"
              />
            </div>
          </div>
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1646541121625-e6675f5e88b1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover object-top"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
