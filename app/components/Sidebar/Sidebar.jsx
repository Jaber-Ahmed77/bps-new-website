"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Sidebar({ isOpen, setClose }) {
  const [productsModalIsOpen, setProductsModalIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div
      className={`h-dvh w-screen text-thirdText rounded-l-3xl transition duration-500 overflow-clip fixed top-0 left-0 z-50 flex items-center justify-between 
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <div className="h-screen w-[80%] z-[999] left-0 top-0 bg-main_blue-900">
        <nav className="flex flex-col gap-8 justify-center items-start w-full mx-auto py-12 px-4">
          <Link onClick={() => setClose(false)} href="/">
            <Image src="/logo.svg" alt="logo" width={150} height={150} />
          </Link>

          <ul className="flex flex-col justify-center p-4 text-sm 2xl:text-base text-nowrap text-mainText gap-6">
            <li>
              <Link
                onClick={() => setClose(false)}
                className={`${
                  pathname === "/"
                    ? "text-main_blue-500 font-bold transition duration-300"
                    : "hover:text-main_blue-500"
                }`}
                href="/"
              >
                Home
              </Link>
            </li>

            {/* <li
              onClick={() => setProductsModalIsOpen(!productsModalIsOpen)}
              className="relative cursor-pointer transition duration-300"
            >
          <span className={pathname.includes("products") && "text-main_blue-500"}>Products</span>

            {
              productsModalIsOpen && (  <div className="absolute top-8 rounded-sm w-fit h-fit p-4 bg-thirdText">
                <ul className="text-sm text-nowrap">
                  <li>
                    <Link onClick={() => setClose(false)}}
                      className={`${
                        pathname === "/products/crm"
                          ? "text-main_blue-500 font-bold transition duration-300"
                          : ""
                      }`}
                      href="/products/crm"
                    >
                      CRM
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setClose(false)}}
                      className={`${
                        pathname === "/products/platform"
                          ? "text-main_blue-500 font-bold transition duration-300"
                          : ""
                      }`}
                      href="/products/platform"
                    >
                      Trading Platform
                    </Link>
                  </li>
                </ul>
              </div>)
            }
            </li> */}

            <li>
              <Link
                onClick={() => setClose(false)}
                className={`${
                  pathname === "/about"
                    ? "text-main_blue-500 font-bold transition duration-300"
                    : "hover:text-main_blue-500"
                }`}
                href="/about"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setClose(false)}
                className={`${
                  pathname === "#products"
                    ? "text-main_blue-500 font-bold transition duration-300"
                    : "hover:text-main_blue-500"
                }`}
                href="/#products"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setClose(false)}
                className={`${
                  pathname === "/services"
                    ? "text-main_blue-500 font-bold transition duration-300"
                    : "hover:text-main_blue-500"
                }`}
                href="/services"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setClose(false)}
                className={`${
                  pathname === "/partners"
                    ? "text-main_blue-500 font-bold transition duration-300"
                    : "hover:text-main_blue-500"
                }`}
                href="/partners"
              >
                Partners Network
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setClose(false)}
                className={`${
                  pathname === "/contact"
                    ? "text-main_blue-500 font-bold transition duration-300"
                    : "hover:text-main_blue-500"
                }`}
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <Link
            onClick={() => setClose(false)}
            href="https://t.me/BBStechnology"
            target="_blank"
            className="flex group hover:bg-opacity-85 transition-all duration-300 gap-2.5 justify-center items-center self-stretch px-6 py-3 my-auto font-semibold capitalize bg-sky-500 rounded-lg "
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8379ac805b1ed449e87b78e1c431e2ad2a00db7232b9cdf4f1fe2b1d5613c64?placeholderIfAbsent=true&apiKey=6ac53960286f43c5ac938ed203544b70"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.2] transition-all duration-300 group-hover:filter group-hover:brightness-75 group-hover:invert group-hover:saturate-0"
            />
            <span className="text-sm text-nowrap group-hover:text-cyan-900">
              Contact us on telegram
            </span>
          </Link>
        </nav>
      </div>

      <div className="w-[20%] h-full" onClick={() => setClose(false)}></div>
    </div>
  );
}
