"use client";
import React from "react";
import { pageData as rawPageData } from "./adminPanel";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

// --- Types ---
interface AttendanceSeries {
  labels: string[];
  data: number[];
}

interface Filters {
  buttons: string[];
  range: string;
  activeIndex?: number;
}

interface PageData {
  totalStudents?: number;
  totalTeachers?: number;
  totalStaff?: number;
  attendanceRate?: number;
  monthlyAttendance?: AttendanceSeries;
  dailyAttendance?: AttendanceSeries;
  filters?: Filters;
  studentsChange?: number;
  teachersChange?: number;
  staffChange?: number;
}

// --- Helpers for demo data ---
const formatMonth = (date: Date) => {
  return date.toLocaleString("default", { month: "short" });
};

const lastNMonths = (n: number): string[] => {
  const months: string[] = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push(formatMonth(d));
  }
  return months;
};

const lastNDays = (n: number): string[] => {
  const days: string[] = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    days.push(d.toLocaleDateString("default", { weekday: "short" }));
  }
  return days;
};

const randomAttendance = (length: number, base = 75): number[] => {
  return Array.from({ length }, () =>
    Math.min(100, Math.max(50, Math.round(base + (Math.random() - 0.5) * 20)))
  );
};

// --- Utils ---
const formatPercent = (n: number) => {
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(1)}%`;
};

const growthBadge = (change: number) => {
  const positive = change > 0;
  const bg = positive
    ? "bg-green-500/20 ring-1 ring-green-400 shadow-[0_0_15px_3px_rgba(16,185,129,0.6)]"
    : "bg-red-500/20 ring-1 ring-red-400 shadow-[0_0_15px_3px_rgba(239,68,68,0.6)]";
  const icon = positive ? (
    <FaArrowUp className="inline-block h-3 w-3" />
  ) : (
    <FaArrowDown className="inline-block h-3 w-3" />
  );
  return (
    <div
      className={
        `inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${bg} text-white ` +
        "backdrop-blur-sm"
      }
    >
      {icon}
      <span>{formatPercent(change)}</span>
    </div>
  );
};

const StatCard: React.FC<{
  title: string;
  value: number;
  change?: number;
  icon: React.ReactNode;
}> = ({ title, value, change = 0, icon }) => {
  const isPositive = change >= 0;
  return (
    <div className="relative bg-[#1e293b] p-5 rounded-xl overflow-hidden">
      {/* Glow background */}
      {change !== 0 && (
        <div
          className={`absolute inset-0 rounded-xl pointer-events-none ${
            isPositive
              ? "before:content-[''] before:absolute before:inset-0 before:blur-xl before:bg-[rgba(16,185,129,0.2)]"
              : "before:content-[''] before:absolute before:inset-0 before:blur-xl before:bg-[rgba(239,68,68,0.2)]"
          }`}
        />
      )}
      <div className="flex justify-between items-start relative">
        <div>
          <p className="text-gray-400 mb-1 flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </p>
          <div className="text-3xl font-bold">{value.toLocaleString()}</div>
        </div>
        <div>{change !== 0 && growthBadge(change)}</div>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  const {
    totalStudents = 0,
    totalTeachers = 0,
    totalStaff = 0,
    attendanceRate = 0,
    monthlyAttendance,
    dailyAttendance,
    filters = { buttons: [], range: "", activeIndex: 0 },
    studentsChange = 0,
    teachersChange = 0,
    staffChange = 0,
  } = (rawPageData as PageData) || {};

  // fallback/demo data if missing or empty
  const effectiveMonthly =
    monthlyAttendance &&
    Array.isArray(monthlyAttendance.labels) &&
    monthlyAttendance.labels.length > 0
      ? monthlyAttendance
      : {
          labels: lastNMonths(6),
          data: randomAttendance(6, 85),
        };

  const effectiveDaily =
    dailyAttendance &&
    Array.isArray(dailyAttendance.labels) &&
    dailyAttendance.labels.length > 0
      ? dailyAttendance
      : {
          labels: lastNDays(7),
          data: randomAttendance(7, 90),
        };

  const monthlyAttendanceData = React.useMemo(
    () => ({
      labels: effectiveMonthly.labels,
      datasets: [
        {
          label: "Monthly Attendance %",
          data: effectiveMonthly.data,
          backgroundColor: "#3b82f6",
          borderRadius: 4,
        },
      ],
    }),
    [effectiveMonthly]
  );

  const dailyAttendanceData = React.useMemo(
    () => ({
      labels: effectiveDaily.labels,
      datasets: [
        {
          label: "Daily Attendance %",
          data: effectiveDaily.data,
          borderColor: "#10b981",
          backgroundColor: "#10b98133",
          tension: 0.4,
          fill: true,
          pointBackgroundColor: "#10b981",
        },
      ],
    }),
    [effectiveDaily]
  );

  // Gauge logic
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  const normalizedRate = Math.min(Math.max(attendanceRate, 0), 100);
  const dashOffset = ((100 - normalizedRate) / 100) * circumference;

  return (
    <div className="p-6 bg-[#0f172a] min-h-screen text-white font-sans">
      {/* Header Filter Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex gap-4 flex-wrap">
          {filters.buttons.map((btn, idx) => {
            const isActive =
              typeof filters.activeIndex === "number"
                ? idx === filters.activeIndex
                : idx === 0;
            return (
              <button
                key={idx}
                aria-label={`Filter: ${btn}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-[#1e293b] text-gray-300 hover:bg-[#273554]"
                }`}
              >
                {btn}
              </button>
            );
          })}
        </div>
        <div className="text-gray-400 text-sm">{filters.range}</div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard
          title="Total Students"
          value={totalStudents}
          change={studentsChange}
          icon={<FaUserGraduate className="text-xl text-[#93c5fd]" />}
        />
        <StatCard
          title="Total Teachers"
          value={totalTeachers}
          change={teachersChange}
          icon={<FaChalkboardTeacher className="text-xl text-[#8b5cf6]" />}
        />
        <StatCard
          title="Total Staff"
          value={totalStaff}
          change={staffChange}
          icon={<FaUsers className="text-xl text-[#fcd34d]" />}
        />
      </div>

      {/* Attendance Rate Overview */}
      <div className="bg-[#1e293b] p-5 rounded-xl mb-6 relative overflow-hidden">
        <p className="text-gray-400 mb-2">Overall Attendance Rate</p>
        <div className="relative w-full max-w-sm mx-auto h-32">
          <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
            {normalizedRate}%
          </div>
          <svg
            className="w-full h-full"
            viewBox="0 0 36 36"
            aria-label="Attendance rate gauge"
          >
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="#1f2f50"
              strokeWidth="4"
            />
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="#10b981"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              transform="rotate(-90 18 18)"
            />
          </svg>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1e293b] p-5 rounded-xl">
          <h3 className="mb-4 text-xl font-semibold">Monthly Attendance</h3>
          <Bar
            data={monthlyAttendanceData}
            options={
              {
                responsive: true,
                plugins: {
                  legend: { position: "top" },
                  tooltip: { enabled: true },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      callback: (val: any) => `${val}%`,
                    },
                  },
                },
              } as ChartOptions
            }
          />
        </div>
        <div className="bg-[#1e293b] p-5 rounded-xl">
          <h3 className="mb-4 text-xl font-semibold">
            Daily Attendance (This Week)
          </h3>
          <Line
            data={dailyAttendanceData}
            options={
              {
                responsive: true,
                plugins: {
                  legend: { position: "top" },
                  tooltip: {
                    enabled: true,
                    callbacks: {
                      label: (context: any) => {
                        const v = context.parsed?.y;
                        return typeof v === "number" ? `${v}%` : v;
                      },
                    },
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      callback: (val: any) => `${val}%`,
                    },
                  },
                },
              } as ChartOptions
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
