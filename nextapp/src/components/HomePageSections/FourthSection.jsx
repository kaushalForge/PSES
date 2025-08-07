"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);

import teacher1 from "../../images/teacher1.jpg";
import teacher2 from "../../images/teacher2.jpg";
import teacher3 from "../../images/teacher3.jpg";

const FourthSection = () => {
  useEffect(() => {
    gsap.to(".section4", {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(10px)",
      duration: 2,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".section4",
        start: "top 50%",
        end: "top 0%",
        scrub: 0.4,
      },
    });
  }, []);

  return (
    <>
      <section className="section4 flex items-center justify-center relative bg-[rgba(10,20,32,0.6)] backdrop-blur-md rounded-t-4xl h-auto p-12">
        <div className="container mx-auto flex flex-col items-center justify-center gap-2 md:gap-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
            <section className="box h-72 md:h-100 w-52 md:w-96 flex items-center justify-center">
              <div className="animate_border h-3/4 w-3/4 overflow-hidden p-8">
                <Image
                  src={teacher1}
                  alt="Image"
                  width={500}
                  height={500}
                  className="rounded-full h-full w-full object-cover object-top"
                />
                <p className="text-center text-black font-semibold text-lg">
                  Name 1
                </p>
              </div>
            </section>
            <section className="box h-72 md:h-100 w-52 md:w-96 flex items-center justify-center">
              <div className="animate_border h-full w-full overflow-hidden p-8">
                <Image
                  src={teacher2}
                  alt="Image"
                  width={500}
                  height={500}
                  className="rounded-full h-full w-full object-cover object-top"
                />
                <p className="text-center text-black font-semibold text-lg">
                  Name 2
                </p>
              </div>
            </section>
            <section className="box h-72 md:h-100 w-52 md:w-96 flex items-center justify-center">
              <div className="animate_border h-3/4 w-3/4 overflow-hidden p-8">
                <Image
                  src={teacher3}
                  alt="Image"
                  width={500}
                  height={500}
                  className="rounded-full h-full w-full object-cover object-top"
                />
                <p className="text-center text-black font-semibold text-lg">
                  Name 3
                </p>
              </div>
            </section>
          </div>
          <p className="text-white text-lg px-12 text-center">
            At Pragati, we don’t just learn we grow, we explore,
            <br /> & we believe in what we can become. <br />
            <span className="hover:bg-black hover:text-white px-4 rounded-lg cursor-pointer transition-colors duration-200 text-xl text-black font-semibold">
              Your journey starts here!
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default FourthSection;
