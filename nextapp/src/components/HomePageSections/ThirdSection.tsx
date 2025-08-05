"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import inspiration_quote from "@/images/inspiration_quote.avif";
import student3 from "@/images/student3.avif";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);

const ThirdSection = () => {
  const part1 = {
    note: "A focused young student sits at a desk, reading a book with curiosity symbolizing active learning and classroom engagement at our school.",
    link: "",
  };
  const part2 = {
    note: "Be inspired by the remarkable journeys of our alumni who have gone on to achieve excellence beyond the classroom.",
    link: "",
  };

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    gsap.to(".sectionthree", {
      ease: "elaseIn",
      scrollTrigger: {
        trigger: ".pinelement",
        start: "top 14%",
        end: "top -100%",
        scrub: 0.6,
        pin: true,
      },
    });
  }, []);

  return (
    <>
      <section className="hidden md:flex sectionthree container mx-auto w-full md:px-8 items-center flex-col justify-center mt-2 md:mt-4">
        <div className="pinelement flex items-center justify-center gap-6">
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center w-full md:h-80 justify-center gap-2 mb-12 flex-wrap relative">
              <div className="text-center w-full bg-no-repeat bg-center md:w-full relative">
                <a href={part1.link} className="outline-none w-auto">
                  <div
                    onMouseEnter={() => setShow1(true)}
                    onMouseLeave={() => setShow1(false)}
                    className="flex items-center w-full justify-center h-auto flex-col border-2 relative"
                  >
                    <div>
                      <Image
                        src={student3 || "Student"}
                        alt="iPhone details"
                        className="w-full h-full md:w-[800px] md:h-[300px] object-cover object-bottom"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                    {show1 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex absolute left-80 top-32 justify-center w-full z-50">
                          {[
                            "C",
                            "u",
                            "r",
                            "i",
                            "o",
                            "u",
                            "s",
                            " ",
                            "M",
                            "i",
                            "n",
                            "d",
                            " ",
                            "G",
                            "r",
                            "o",
                            "w",
                            "s",
                            " ",
                            "H",
                            "e",
                            "r",
                            "e",
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 30, x: 200 }}
                              animate={{ opacity: 1, y: -10, x: 0 }}
                              transition={{
                                duration: 0.2,
                                type: "spring",
                                stiffness: 100,
                                delay: index * 0.01,
                              }}
                              className="text-4xl text-[#f4f4f4] bg-[#116D6E] px-1 mx-[1px]"
                            >
                              {item}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="flex-col md:flex items-center w-full md:h-80 justify-center gap-2 mb-12 flex-wrap relative">
              <div className="text-center w-full md:w-full relative">
                <a href={part2.link} className="outline-none w-auto">
                  <div
                    onMouseEnter={() => setShow2(true)}
                    onMouseLeave={() => setShow2(false)}
                    className="flex items-center w-full justify-center h-auto border-2 flex-col relative"
                  >
                    <Image
                      src={inspiration_quote || "Student"}
                      alt="iPhone details"
                      className="w-full h-full md:w-[800px] md:h-[300px] object-cover object-top"
                      loading="lazy"
                      unoptimized
                    />
                    {show2 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex absolute -left-80 items-center top-32 justify-center w-full z-50">
                          {[
                            "F",
                            "r",
                            "o",
                            "m",
                            " ",
                            "L",
                            "e",
                            "a",
                            "r",
                            "n",
                            "e",
                            "r",
                            "s",
                            " ",
                            "T",
                            "o",
                            " ",
                            "L",
                            "e",
                            "a",
                            "d",
                            "e",
                            "r",
                            "s",
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 30, x: 200 }}
                              animate={{ opacity: 1, y: -10, x: 0 }}
                              transition={{
                                duration: 0.2,
                                type: "spring",
                                stiffness: 100,
                                delay: index * 0.01,
                              }}
                              className="text-4xl text-[#f4f4f4] bg-[#116D6E] px-1 mx-[1px]"
                            >
                              {item}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdSection;
