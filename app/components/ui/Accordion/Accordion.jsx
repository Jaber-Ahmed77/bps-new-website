"use client";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="p-2 text-[12px] md:text-md xl:text-xl text-main_blue-900 md:p-2 xl:p-4 h-fit w-[98%] rounded-xl shadow-lg"
      data-aos="fade-down"
    >
      <button
        className="flex justify-between items-center w-full py-2 md:p-2 transition duration-500 ease-in-out"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`flex justify-center items-center gap-2 ${
            open && "text-white"
          }`}
        >
          <span className={`text-lg ${open && "lg:font-semibold text-white"}`}>
            {title}
          </span>
        </div>
        <span className={`p-1 rounded-lg transition-colors duration-300`}>
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>

      <div
        className={`flex text-base flex-col overflow-clip transition-all duration-300 ease-in-out ${
          open ? "h-auto opacity-100 py-6" : " h-0 opacity-0 p-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
