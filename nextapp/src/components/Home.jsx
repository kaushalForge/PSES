"use client";

import FirstSection from "./HomePageSections/FirstSection";
import SecondSection from "./HomePageSections/SecondSection";
import ThirdSection from "./HomePageSections/ThirdSection";
import FourthSection from "./HomePageSections/FourthSection";
import FifthSection from "./HomePageSections/FifthSection";
import SixthSection from "./HomePageSections/SixthSection";
import SeventhSection from "./HomePageSections/SeventhSection";
import { motion } from "framer-motion";

const Home = () => {
  const lines = ["WELCOME TO,", "PRAGATI"];
  return (
    <>
      <div>
        <FirstSection />
        <div className=" relative w-full h-96 mt-12">
          <img
            src="https://plus.unsplash.com/premium_photo-1684291805843-50a01a6c9c1e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 right-0 px-4 flex items-end justify-center flex-col gap-4">
            {lines.map((line, lineIndex) => (
              <div key={lineIndex} className="flex gap-2">
                {line.split("").map((letter, index) => (
                  <motion.h2
                    key={`${lineIndex}-${index}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.02,
                      delay: (lineIndex * 20 + index) * 0.02,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="outline-text text-2xl md:text-6xl tracking-tighter font-bold"
                  >
                    {letter}
                  </motion.h2>
                ))}
              </div>
            ))}
          </div>
        </div>
        <SecondSection />
        <div className="relative">
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
        </div>
      </div>
    </>
  );
};

export default Home;
