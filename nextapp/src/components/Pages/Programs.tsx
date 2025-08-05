"use client";
import { motion } from "framer-motion";
import Card from "../Common/CardLayout";

const FirstSection = () => {
  const data = [
    {
      name: "STEM Program",
      img: "https://framerusercontent.com/images/i1hP4L2pxQKtDQKGeC5hdDnHAQ.png?scale-down-to=1024",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      name: "School Program",
      img: "https://framerusercontent.com/images/YEh8Y9oZblsOicdw8o3YgFjCq6g.png?scale-down-to=1024",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      name: "Arts Program",
      img: "https://framerusercontent.com/images/MkE5FcmSNectuYXkAyWs19AtbWE.png?scale-down-to=1024",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      name: "Athletics Program",
      img: "https://framerusercontent.com/images/SsejM5U79Vq6IdOyLdqbF9kDD0A.png?scale-down-to=1024",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
  return (
    <>
      <section className="pt-20 container mx-auto">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-lg text-slate-800 font-medium px-12"
        >
          Programs at Edmun
        </motion.h2>
        <Card data={data} />
        <div className="my-12 px-12">
          <div className="flex flex-col items-center justify-center gap-3 text-slate-900">
            <h2 className="text-lg font-medium">Grading</h2>
            <h4 className="text-3xl font-semibold">Our Grading System</h4>
          </div>
          <div className="w-full flex items-center justify-center mt-8 gap-8">
            <ul className="flex items-center justify-between w-full flex-col gap-4">
              <li className="bg-[#15283D] w-full text-center py-4 text-white font-semibold text-lg">
                Grade
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">A</li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">B</li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">C</li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">D</li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">E</li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">F</li>
            </ul>
            <ul className="flex items-center justify-between w-full flex-col gap-4">
              <li className="bg-[#15283D] w-full text-center py-4 text-white font-semibold text-lg">
                Percentage
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">
                90 - 100%
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">80 - 89%</li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">60 - 79%</li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">40 - 59%</li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">20 - 39%</li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">0 - 19%</li>
            </ul>

            <div className="flex items-center justify-center"></div>
          </div>
          <div className="w-full flex items-center justify-center mt-8 gap-8">
            <ul className="flex items-center justify-between w-full flex-col gap-4">
              <li className="bg-[#15283D] w-full text-center py-4 text-white font-semibold text-lg">
                Description
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">
                Excellent
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">
                Satisfactory
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">Good</li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">Enough</li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">
                Needs Improvement
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">Failing</li>
            </ul>
            <ul className="flex items-center justify-between w-full flex-col gap-4">
              <li className="bg-[#15283D] w-full text-center py-4 text-white font-semibold text-lg">
                GPA Equivalent
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">
                3.50 - 4.00
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">
                3.00 - 3.50
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">
                2.50 - 3.00
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">
                2.00 - 2.50
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">
                1.00 - 2.00
              </li>
              <li className="bg-[#EEF4F8] w-full text-center py-4">
                0.00 - 1.00
              </li>
            </ul>

            <div className="flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
