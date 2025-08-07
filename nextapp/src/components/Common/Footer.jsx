"use client";

import Image from "next/image";
import schoolLogo from "../../images/pses-logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-[#EEF4F8] w-full text-white flex pt-12 justify-between">
        <div className="flex flex-col w-full">
          <div className="container mx-auto px-8">
            <section className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
              <div className="flex items-center justify-start gap-2 w-full">
                <Image
                  src={schoolLogo}
                  alt="School Logo"
                  width={80}
                  height={80}
                />
                <h2 className="text-3xl text-slate-900 font-semibold">
                  Pragati
                </h2>
                <span className="h-12 border-r-2 border-black"></span>
                <h2 className="text-xl text-slate-700 font-medium leading-5">
                  Pragati <br /> <span className="italic">High School</span>
                </h2>
              </div>
              <div className="flex items-center justify-evenly gap-2 text-slate-900 font-bold text-base">
                {["Contact", "About", "Community", "Programs"].map(
                  (item, index) => (
                    <a
                      key={index}
                      href={`/${item.toLowerCase()}`}
                      className={`h-6 ${index !== 3 && "border-r-2 pr-2"}`}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </section>

            <section className="pt-4 mt-4 border-t-2 text-slate-900 border-black flex flex-col md:flex-row items-start justify-between w-full gap-6">
              <div className="flex items-center justify-evenly gap-2 font-bold text-3xl text-blue-600">
                {[
                  <FaFacebook />,
                  <FaSquareInstagram />,
                  <FaTwitter />,
                  <FaLinkedin />,
                  <IoLogoYoutube />,
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${index === 1 && "text-[#E1306C]"} ${
                      index === 4 && "text-[#FF0000]"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="pl-12 flex items-start md:items-center flex-col md:flex-row justify-between gap-2 w-full px-20 text-base">
                <div>
                  <h4 className="font-semibold">Our Facilities</h4>
                  <ul className="tracking-tight leading-6 underline underline-offset-2 pt-4">
                    <li>Library Access</li>
                    <li>Science Laboratories</li>
                    <li>Computer Labs</li>
                    <li>Smart Classrooms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Customer Service</h4>
                  <ul className="tracking-tight leading-6 underline underline-offset-2 pt-4">
                    <li>Email:customer@helpline.com</li>
                    <li>Contact:9812345678</li>
                    <li>FAQs</li>
                    <li>Help Center</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Extra Activities</h4>
                  <ul className="tracking-tight leading-6 underline underline-offset-2 pt-4">
                    <li>Arts & Crafts</li>
                    <li>Dancing</li>
                    <li>FootBall</li>
                    <li>BasketBall</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="text-white text-center mt-4 w-full bg-black">
        &copy; 2025 Pragati High School. All rights reserved
      </section>
    </footer>
  );
};

export default Footer;
