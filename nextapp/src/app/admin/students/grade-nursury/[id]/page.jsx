"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaBirthdayCake,
  FaPhone,
  FaHome,
  FaUserTie,
  FaArrowLeft,
  FaBus,
} from "react-icons/fa";

const demoStudentInitial = {
  _id: "demo123",
  name: "Demo Student",
  dob: "2019-05-15",
  parentName: "Demo Parent",
  parentPhone: "9812345678",
  studentPhone: "9809876543",
  address: "Kathmandu, Nepal",
  takesBus: true,
};

const Page = () => {
  const router = useRouter();
  const [student, setStudent] = useState(demoStudentInitial);

  const handleChange = (field: keyof typeof demoStudentInitial, value: any) => {
    setStudent((prev) => ({
      ...prev,
      [field]: field === "takesBus" ? value === "true" : value,
    }));
  };

  const handleSave = () => {
    alert("Student info saved:\n" + JSON.stringify(student, null, 2));
    // Add your API call or other save logic here
  };

  return (
    <div className="min-h-screen bg-[#101828] text-gray-300 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-[#1E293B] rounded-lg shadow-lg p-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6"
          aria-label="Go back"
        >
          <FaArrowLeft /> Back
        </button>

        <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-blue-400">
          <FaUserTie />
          Edit Student Info
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="space-y-6 text-sm sm:text-base"
        >
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-semibold">
              <FaUser className="text-blue-400" /> Name:
            </label>
            <input
              type="text"
              value={student.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full bg-[#334155] border border-[#475569] rounded px-3 py-2 text-gray-200 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* DOB */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-semibold">
              <FaBirthdayCake className="text-blue-400" /> DOB:
            </label>
            <input
              type="date"
              value={student.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              className="w-full bg-[#334155] border border-[#475569] rounded px-3 py-2 text-gray-200 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Parent Name */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-semibold">
              <FaUserTie className="text-blue-400" /> Parent Name:
            </label>
            <input
              type="text"
              value={student.parentName}
              onChange={(e) => handleChange("parentName", e.target.value)}
              className="w-full bg-[#334155] border border-[#475569] rounded px-3 py-2 text-gray-200 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Parent Phone */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-semibold">
              <FaPhone className="text-blue-400" /> Parent Phone:
            </label>
            <input
              type="tel"
              value={student.parentPhone}
              onChange={(e) => handleChange("parentPhone", e.target.value)}
              className="w-full bg-[#334155] border border-[#475569] rounded px-3 py-2 text-gray-200 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              pattern="[0-9]+"
            />
          </div>

          {/* Student Phone */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-semibold">
              <FaPhone className="text-blue-400" /> Student Phone:
            </label>
            <input
              type="tel"
              value={student.studentPhone}
              onChange={(e) => handleChange("studentPhone", e.target.value)}
              className="w-full bg-[#334155] border border-[#475569] rounded px-3 py-2 text-gray-200 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              pattern="[0-9]+"
            />
          </div>

          {/* Address */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-semibold">
              <FaHome className="text-blue-400" /> Address:
            </label>
            <input
              type="text"
              value={student.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full bg-[#334155] border border-[#475569] rounded px-3 py-2 text-gray-200 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Takes Bus */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-semibold">
              <FaBus className="text-blue-400" /> Takes Bus:
            </label>
            <select
              value={student.takesBus.toString()}
              onChange={(e) => handleChange("takesBus", e.target.value)}
              className="w-full bg-[#334155] border border-[#475569] rounded px-3 py-2 text-gray-200
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
