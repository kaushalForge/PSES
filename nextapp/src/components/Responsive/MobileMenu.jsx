"use client";
import { IoClose } from "react-icons/io5";

const MobileMenu = ({ menuOpen, toggleMenu }) => {
  return (
    <>
      <div className="flex md:hidden">
        <div
          className={`bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] fixed top-0 left-0 w-1/2 min-h-screen z-50 transition-all duration-200 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex text-slate-900 items-center justify-between p-4 mb-8">
            <h2 className="text-lg font-semibold select-none">Menu</h2>
            <button>
              <IoClose
                onClick={toggleMenu}
                className="h-4 w-4 outline-1 rounded-full cursor-pointer"
              />
            </button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            {["About", "Programs", "Community", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className="mx-4 text-sm font-semibold"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
