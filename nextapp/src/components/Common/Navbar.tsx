"use client";
import { useState } from "react";
import MobileMenu from "../Responsive/MobileMenu";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed w-full top-0 h-12 md:h-16 backdrop-blur-md border-b-[1px] border-[#e0e0e0] z-50">
        <div className="flex items-center justify-between container mx-auto p-2 md:p-6">
          <a href="/" className="font-light text-slate-800 text-xl">
            <span className="font-bold">Pragati</span>High
          </a>

          {/* Large Device Menu */}
          <div>
            <IoMenu
              onClick={toggleMenu}
              className="flex md:hidden h-6 w-6 outline-1 p-1 rounded-full cursor-pointer"
            />
            <div className="hidden md:flex">
              {["About", "Programs", "Community", "Contact"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`/${item.toLowerCase()}`}
                    className="mx-4 text-lg font-semibold text-slate-800 hover:underline decoration-2 underline-offset-8 transition-all duration-200"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        {/* Small Device Menu */}
        <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
