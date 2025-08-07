"use client";

import React, { useState, useMemo } from "react";
import { FaChalkboardTeacher, FaCalendarCheck, FaStar } from "react-icons/fa";
import { sampleTeachers, Teacher } from "../data/teacher";
import {
  IoClose,
  IoMail,
  IoCall,
  IoHome,
  IoPeople,
  IoRibbon,
  IoCalendar,
  IoBriefcase,
} from "react-icons/io5";
const SummaryCard: React.FC<{
  label: string;
  value: number | string;
  delta?: number;
  icon?: React.ReactNode;
}> = ({ label, value, delta, icon }) => {
  return (
    <div
      className="relative rounded-xl p-4 flex flex-col items-center gap-2 bg-gray-900 overflow-hidden
      border border-transparent
      before:absolute before:inset-0 before:rounded-xl before:border before:border-blue-400 before:opacity-40 before:blur-md before:pointer-events-none
      after:absolute after:inset-0 after:rounded-xl after:bg-green-500 after:opacity-30 after:blur-xl"
    >
      {/* Content above pseudo-elements */}
      <div className="relative z-10 text-green-400">
        <div className="text-2xl">{icon}</div>
        <div className="text-sm text-green-300">{label}</div>
        <div className="text-xl font-semibold">{value}</div>
      </div>
    </div>
  );
};

interface Teacher {
  id: string;
  name: string;
  img?: string;
  email: string;
  attendanceRate: number;
  performanceScore: number;
  hireDate: string; // ISO string
  subjects: string[];
  classes: string[];
  phone: string;
  address: string;
  emergencyContact: { name: string; relation: string; phone: string };
  credentials: string[];
  bio?: string;
  schedule: { day: string; from: string; to: string }[];
  leaveBalance: { sick: number; casual: number; earned: number };
}

// const sampleTeachers: Teacher[] = [
//   {
//     id: "1",
//     name: "John Doe",
//     email: "john@example.com",
//     attendanceRate: 95,
//     performanceScore: 4.5,
//     hireDate: "2021-03-01",
//     subjects: ["Math", "Physics"],
//     classes: ["10A", "11B"],
//     phone: "123456789",
//     address: "123 Street, City",
//     emergencyContact: {
//       name: "Jane Doe",
//       relation: "Wife",
//       phone: "987654321",
//     },
//     credentials: ["MSc Physics", "BEd"],
//     bio: "Experienced math and physics teacher.",
//     schedule: [
//       { day: "Monday", from: "8am", to: "10am" },
//       { day: "Wednesday", from: "10am", to: "12pm" },
//     ],
//     leaveBalance: { sick: 5, casual: 3, earned: 2 },
//   },
// ];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const Badge: React.FC<{ children: React.ReactNode; bg?: string }> = ({
  children,
  bg = "bg-blue-600",
}) => (
  <span className={`inline-block px-2 py-0.5 rounded text-xs text-white ${bg}`}>
    {children}
  </span>
);

const stars = (score: number) => {
  const full = Math.floor(score);
  const out = [];
  for (let i = 0; i < 5; i++) {
    out.push(
      <span
        key={i}
        className={`inline-block text-yellow-400 ${i < full ? "★" : "☆"}`}
      />
    );
  }
  return <span>{out}</span>;
};

type SortKey = "name" | "attendanceRate" | "performanceScore";
type SortDir = "asc" | "desc";

const compare = (a: any, b: any, dir: SortDir) => {
  if (a === b) return 0;
  if (a == null) return dir === "asc" ? -1 : 1;
  if (b == null) return dir === "asc" ? 1 : -1;
  if (typeof a === "string" && typeof b === "string")
    return dir === "asc" ? a.localeCompare(b) : b.localeCompare(a);
  if (typeof a === "number" && typeof b === "number")
    return dir === "asc" ? a - b : b - a;
  return 0;
};

const page = () => {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [page, setpage] = useState(1);
  const [selected, setSelected] = useState<Teacher | null>(null);

  const perpage = 6;

  const filtered = useMemo(() => {
    let arr = sampleTeachers;
    if (search.trim()) {
      const s = search.toLowerCase();
      arr = arr.filter(
        (t) =>
          t.name.toLowerCase().includes(s) ||
          t.email.toLowerCase().includes(s) ||
          t.subjects.some((sub) => sub.toLowerCase().includes(s)) ||
          t.classes.some((cls) => cls.toLowerCase().includes(s))
      );
    }
    return arr.sort((a, b) => compare(a[sortKey], b[sortKey], sortDir));
  }, [search, sortKey, sortDir]);

  const pages = Math.ceil(filtered.length / perpage);
  const paginated = filtered.slice((page - 1) * perpage, page * perpage);

  const avgAttendance = useMemo(() => {
    if (!sampleTeachers.length) return 0;
    return (
      sampleTeachers.reduce((sum, t) => sum + t.attendanceRate, 0) /
      sampleTeachers.length
    );
  }, []);

  const avgPerformance = useMemo(() => {
    if (!sampleTeachers.length) return 0;
    return (
      sampleTeachers.reduce((sum, t) => sum + t.performanceScore, 0) /
      sampleTeachers.length
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-semibold">Teachers</h1>
        <input
          type="text"
          placeholder="Search name, subject, class..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setpage(1);
          }}
          className="p-2 rounded bg-gray-800 text-white w-full md:w-64"
        />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <SummaryCard
          label="Total Teachers"
          value={sampleTeachers.length}
          delta={0}
          icon={<FaChalkboardTeacher />}
        />
        <SummaryCard
          label="Avg Attendance"
          value={`${avgAttendance.toFixed(1)}%`}
          delta={0}
          icon={<FaCalendarCheck />}
        />
        <SummaryCard
          label="Avg Performance"
          value={avgPerformance.toFixed(1)}
          delta={0}
          icon={<FaStar />}
        />
      </div>

      {/* Teacher Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginated.map((t) => (
          <div
            key={t.id}
            className="bg-gray-800 p-4 rounded cursor-pointer hover:bg-gray-700"
            onClick={() => setSelected(t)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelected(t);
            }}
          >
            <div className="text-xl font-semibold truncate">{t.name}</div>
            <div className="text-sm text-gray-400 truncate">{t.email}</div>
            <div className="mt-2 flex flex-wrap gap-1">
              <Badge>{t.subjects.join(", ")}</Badge>
              <Badge bg="bg-purple-700">{t.classes.join(", ")}</Badge>
            </div>
            <div className="mt-3 text-sm flex justify-between">
              <div>
                Attendance:{" "}
                <span className="font-medium">{t.attendanceRate}%</span>
              </div>
              <div>
                Performance:{" "}
                <span className="font-medium">
                  {t.performanceScore.toFixed(1)}
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Hired: {formatDate(t.hireDate)}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-gray-400 text-sm">
          Showing {(page - 1) * perpage + 1} -{" "}
          {Math.min(page * perpage, filtered.length)} of {filtered.length}
        </div>
        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setpage((p) => Math.max(1, p - 1))}
            className="px-3 py-1 rounded bg-gray-700 disabled:opacity-50"
          >
            Prev
          </button>
          <button
            disabled={page === pages || pages === 0}
            onClick={() => setpage((p) => Math.min(p + 1, pages))}
            className="px-3 py-1 rounded bg-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Detail Panel */}
      <div
        className={`mt-8 bg-gray-800 p-6 flex flex-col ${
          selected ? "items-start" : "items-center"
        } justify-center rounded min-h-[200px]`}
      >
        {selected ? (
          <div
            className="relative bg-gray-800 p-6 rounded-xl shadow-lg border border-sky-300/50 animate-fadeIn before:absolute before:inset-0 before:rounded-xl before:shadow-[0_0_8px_1px_rgba(72,187,120,0.6)]
      flex flex-col gap-2 w-full mx-auto"
          >
            <div className="flex items-center gap-2">
              {selected.img && (
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-24 h-24 rounded-full object-cover object-top border-2 border-black shadow-lg
            animate-pulse-slow"
                />
              )}

              {/* Name and Close Button */}
              <div className="flex flex-col flex-1 relative">
                <h2 className="text-3xl font-bold text-[#f1541bf1] drop-shadow-lg">
                  {selected.name}
                </h2>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-0 right-0 p-1 rounded-md text-green-300 hover:text-red-500
            transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  aria-label="Close details"
                >
                  <IoClose size={28} />
                </button>
              </div>
            </div>

            <p className="text-green-200 font-semibold italic">
              {selected.bio || "No bio available."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-300 text-sm">
              <div className="flex items-center gap-2">
                <IoMail className="text-green-400" />
                <span>{selected.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <IoCall className="text-green-400" />
                <span>{selected.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <IoHome className="text-green-400" />
                <span>{selected.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <IoPeople className="text-green-400" />
                <span>
                  Emergency Contact: {selected.emergencyContact.name} (
                  {selected.emergencyContact.relation}) -{" "}
                  {selected.emergencyContact.phone}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <IoRibbon className="text-green-400" />
                <span>
                  Credentials:{" "}
                  {selected.credentials.length > 0
                    ? selected.credentials.join(", ")
                    : "N/A"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <IoCalendar className="text-green-400" />
                <span>
                  Schedule:{" "}
                  {selected.schedule.map((s) => (
                    <span key={s.day} className="mr-1">
                      {s.day}: {s.from} - {s.to}
                    </span>
                  ))}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <IoBriefcase className="text-green-400" />
                <span>
                  Leave Balances: Sick: {selected.leaveBalance.sick}, Casual:{" "}
                  {selected.leaveBalance.casual}, Earned:{" "}
                  {selected.leaveBalance.earned}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-green-400 text-center italic px-4 select-none drop-shadow-md">
            A good teacher inspires hope, ignites the imagination, and instills
            a love of learning.
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
