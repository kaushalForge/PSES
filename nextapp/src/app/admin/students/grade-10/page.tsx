"use client";
import React, { useState } from "react";
import { nurseryStudents } from "../../data/grades/nursury";
import { useRouter } from "next/navigation";
import {
  FaBus,
  FaTrash,
  FaEdit,
  FaUser,
  FaBirthdayCake,
  FaPhone,
  FaHome,
  FaUserTie,
} from "react-icons/fa";

const page = () => {
  const [students, setStudents] = useState(nurseryStudents);
  const router = useRouter();

  const handleBusChange = (id: string, value: string) => {
    setStudents((prev) =>
      prev.map((student) =>
        student._id === id
          ? { ...student, takesBus: value === "true" }
          : student
      )
    );
  };

  const handleDelete = (id: string) => {
    setStudents((prev) => prev.filter((student) => student._id !== id));
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/students/grade-nursury/${id}`);
  };

  return (
    <div className="p-6 min-h-screen bg-[#101828] text-gray-200 flex justify-center">
      <div className="w-full max-w-[1200px]">
        <h1 className="flex items-center gap-3 text-xl font-bold text-blue-300 mb-4 drop-shadow-lg">
          <FaUserTie className="text-blue-400" />
          Grade Ten Students Management
        </h1>

        <div className="overflow-x-auto bg-[#101828] rounded-lg shadow-lg border border-blue-500/40 backdrop-blur-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="text-white shadow-md bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900">
              <tr>
                <th
                  title="Index"
                  className="px-3 py-2 whitespace-nowrap text-center align-middle border-b border-blue-500/40"
                  style={{ width: "3%" }}
                >
                  # ID
                </th>
                <th
                  title="Student Name"
                  className="px-3 py-2 whitespace-nowrap align-middle border-b border-blue-500/40"
                  style={{ width: "15%" }}
                >
                  <span className="inline-flex items-center gap-1">
                    <FaUser />
                    Name
                  </span>
                </th>
                <th
                  title="Date of Birth"
                  className="px-3 py-2 whitespace-nowrap align-middle border-b border-blue-500/40"
                  style={{ width: "10%" }}
                >
                  <span className="inline-flex items-center gap-1">
                    <FaBirthdayCake />
                    DOB
                  </span>
                </th>
                <th
                  title="Parent Name"
                  className="px-3 py-2 whitespace-nowrap align-middle border-b border-blue-500/40"
                  style={{ width: "15%" }}
                >
                  <span className="inline-flex items-center gap-1">
                    <FaUserTie />
                    Parent
                  </span>
                </th>
                <th
                  title="Parent Phone Number"
                  className="px-3 py-2 whitespace-nowrap align-middle border-b border-blue-500/40"
                  style={{ width: "12%" }}
                >
                  <span className="inline-flex items-center gap-1">
                    <FaPhone />
                    P.Phone
                  </span>
                </th>
                <th
                  title="Student Phone Number"
                  className="px-3 py-2 whitespace-nowrap align-middle border-b border-blue-500/40"
                  style={{ width: "12%" }}
                >
                  <span className="inline-flex items-center gap-1">
                    <FaPhone />
                    S.Phone
                  </span>
                </th>
                <th
                  title="Address"
                  className="px-3 py-2 whitespace-nowrap align-middle border-b border-blue-500/40"
                  style={{ width: "18%" }}
                >
                  <span className="inline-flex items-center gap-1">
                    <FaHome />
                    Address
                  </span>
                </th>
                <th
                  title="Takes School Bus?"
                  className="px-3 py-2 whitespace-nowrap text-center align-middle border-b border-blue-500/40"
                  style={{ width: "8%" }}
                >
                  <span className="inline-flex items-center gap-1 justify-center">
                    <FaBus className="text-blue-300" />
                    Bus
                  </span>
                </th>
                <th
                  title="Actions"
                  className="px-3 py-2 whitespace-nowrap text-center align-middle border-b border-blue-500/40"
                  style={{ width: "5%" }}
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, idx) => (
                <tr
                  key={student._id}
                  className="border-b border-blue-500/20 hover:bg-blue-900/30 transition duration-200"
                >
                  <td className="px-3 py-2 font-semibold text-blue-300 text-center align-middle">
                    {idx + 1}
                  </td>
                  <td className="px-3 py-2 align-middle">{student.name}</td>
                  <td className="px-3 py-2 align-middle">{student.dob}</td>
                  <td className="px-3 py-2 align-middle">
                    {student.parentName}
                  </td>
                  <td className="px-3 py-2 align-middle">
                    {student.parentPhone}
                  </td>
                  <td className="px-3 py-2 align-middle">
                    {student.studentPhone}
                  </td>
                  <td className="px-3 py-2 align-middle">{student.address}</td>
                  <td className="px-3 py-2 text-center align-middle">
                    <select
                      value={student.takesBus.toString()}
                      onChange={(e) =>
                        handleBusChange(student._id, e.target.value)
                      }
                      className="rounded bg-blue-900/50 border border-blue-400/50 text-blue-200 focus:border-blue-300 focus:ring focus:ring-blue-500/30 text-xs"
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </td>
                  <td className="px-3 py-2 flex justify-center gap-2 align-middle">
                    <button
                      onClick={() => handleEdit(student._id)}
                      className="p-1.5 bg-blue-500 hover:bg-blue-400 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transition duration-200 text-xs"
                      title="Edit Student"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(student._id)}
                      className="p-1.5 bg-red-500 hover:bg-red-400 text-white rounded-full shadow-lg hover:shadow-red-500/50 transition duration-200 text-xs"
                      title="Delete Student"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td
                    colSpan={9}
                    className="text-center py-6 text-gray-400 text-xs"
                  >
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
