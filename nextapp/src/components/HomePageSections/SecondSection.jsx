"use client";
import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GiCursedStar } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import img1 from "../../images/student1.jpg";
import img2 from "../../images/student2.jpg";

const SecondSection = () => {
  useEffect(() => {
    gsap.to(".quote1", {
      opacity: 1,
      y: 100,
      duration: 2,
      ease: "elaseIn",
      scrollTrigger: {
        trigger: ".sectiontwo",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "play reverse play reverse",
        scrub: 0.6,
      },
    });
  }, []);

  return (
    <>
      <section className="sectiontwo relative w-full h-auto container mx-auto mb-[750px]">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-4 md:py-8 gap-2">
          <div className="h-full w-full relative">
            <div>
              <Image
                src={img1}
                alt="Student"
                className="hidden md:flex absolute mt-24 w-[550px] left-72 object-cover h-[550px] object-top rounded-tr-4xl"
              />
              <Image
                src={img2}
                alt="Student"
                className="absolute h-[400px] w-[400px] left-0 top-52 object-cover object-top rounded-br-4xl"
              />
              <div className="quote1 opacity-0 absolute -top-16 left-0 md:left-12 text-3xl md:text-4xl text-white bg-[#12293C] px-12 py-6 tracking-tight leading-12 flex items-end justify-end text-right">
                Unleash Your <br /> Potential Education <br />
                With Us!
              </div>
            </div>
            <div className="right-0 absolute top-[700px] md:top-[650px] lg:top-[500px] md:-right-32 lg:-right-0 w-80 h-full flex items-center md:items-start justify-center flex-col text-xl text-slate-800">
              <div className="flex items-center justify-center w-full gap-2 mb-4">
                <GiCursedStar className="spin" />
                <GiCursedStar className="spin" />
                <GiCursedStar className="spin" />
              </div>
              <p>
                Dedicated to excellence in education, character-building, and
                lifelong learning for every student.
              </p>
              <button className="text-white text-lg font-semibold bg-slate-800 px-4 py-2 mt-4 cursor-pointer flex items-center justify-center gap-2">
                <p>Learn More</p> <FaExternalLinkAlt />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
