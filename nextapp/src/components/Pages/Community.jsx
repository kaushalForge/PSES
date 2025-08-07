"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import teachers from "../../data/teacherList/teacher";

const CommunityPage = () => {
  const grouped = teachers.reduce((acc, teacher) => {
    const dept = (teacher.department || "General").trim() || "General";
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(teacher);
    return acc;
  }, {});

  return (
    <div className="min-h-screen px-6 md:px-20 py-12 bg-white mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Meet Our Educators
      </h1>

      {Object.entries(grouped).map(([department, deptTeachers]) => (
        <div key={department} className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Department of {department}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {deptTeachers.map((teacher, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-52 w-full bg-gray-200 relative cursor-pointe rounded-t-2xl">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-top object-cover"
                  />
                </div>

                <div className="p-6 space-y-2 cursor-pointer">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {teacher.name}
                  </h2>
                  <p className="text-sm text-indigo-600 font-medium">
                    {teacher.role}
                  </p>
                  <p className="text-gray-600 text-sm">{teacher.desc}</p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 inline-block text-indigo-700 hover:text-indigo-900 font-medium transition"
                  >
                    See More →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityPage;
