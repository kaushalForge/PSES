"use client";
import { motion } from "framer-motion";

const CardLayout = ({ data }) => {
  return (
    <div className="overflow-hidden w-full px-4 sm:px-6 md:px-12 mt-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-start">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                scale: 1.2,
                rotate: -4,
                opacity: 0,
                filter: "blur(8px)",
              }}
              animate={{ scale: 1, rotate: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="bg-[#EEF4F8] rounded-lg overflow-hidden transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-60 sm:h-72 md:h-80 object-cover object-center transition-transform duration-300"
              />
              <div className="px-4 md:px-6 py-4">
                <h3 className="text-xl sm:text-2xl text-slate-900 font-semibold">
                  {item.name}
                </h3>
                <div className="w-full my-3 h-[2px] bg-[#D8DFE5]"></div>
                <p className="text-sm text-[#607791] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
