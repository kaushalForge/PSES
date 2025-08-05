"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import playingFootball from "@/images/playing-football.jpg";
import dancing from "@/images/dancing.jpg";
import study from "@/images/groupstudy.jpg";
import computerclass from "@/images/computerclass.jpg";

const SixthSection = () => {
  return (
    <section className="min-h-screen relative bg-white w-full px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900">
            Gallery
          </h2>
          <p className="mt-4 text-3xl md:text-4xl font-medium text-slate-800">
            Students life at Pragati<span className="font-light"> High</span>
          </p>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            From academic achievements to extracurricular activities, these
            snapshots of vibrant and dynamic life at Bright High School offer a
            glimpse into the experiences and moments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { src: study, label: "Group Study" },
            { src: playingFootball, label: "Playing Soccer" },
            { src: dancing, label: "Dancing" },
            { src: computerclass, label: "Computer Lab" },
          ].map(({ src, label }, index) => (
            <div>
              <div
                key={index}
                className="overflow-hidden w-[500px] md:w-[400px] lg:w-[480px] h-72 border-2"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={src}
                    alt={label}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </motion.div>
              </div>
              <p className="text-base text-center cursor-pointer md:text-lg font-semibold bg-black bg-opacity-70 text-white px-3 py-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
