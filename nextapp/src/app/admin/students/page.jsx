"use client";
import React from "react";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";

const grades = [
  { label: "Nursery", path: "grade-nursury" },
  { label: "LKG", path: "grade-lkg" },
  { label: "UKG", path: "grade-ukg" },
  { label: "Grade 1", path: "grade-1" },
  { label: "Grade 2", path: "grade-2" },
  { label: "Grade 3", path: "grade-3" },
  { label: "Grade 4", path: "grade-4" },
  { label: "Grade 5", path: "grade-5" },
  { label: "Grade 6", path: "grade-6" },
  { label: "Grade 7", path: "grade-7" },
  { label: "Grade 8", path: "grade-8" },
  { label: "Grade 9", path: "grade-9" },
  { label: "Grade 10", path: "grade-10" },
];

const Page = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">
        Manage Students by Grade
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {grades.map(({ label, path }, index) => (
          <li key={index}>
            <Link
              href={`/admin/students/${path}`}
              className="group block rounded-xl bg-white hover:bg-blue-600 shadow-lg hover:shadow-xl p-5 text-center transition-all duration-200 border border-gray-200 hover:border-blue-600"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-white mb-3 transition-colors duration-200">
                  <FaUserGraduate className="text-blue-600 group-hover:text-blue-600 text-xl" />
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-200">
                  {label}
                </span>
                <span className="text-sm text-gray-500 group-hover:text-blue-100 transition-colors duration-200">
                  View & manage students
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
