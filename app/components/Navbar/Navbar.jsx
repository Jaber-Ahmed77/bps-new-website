"use client";
import { useState } from "react";
import Btn from "../ui/btns/Btn";
import Sidebar from "../Sidebar/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import LangDropdown from "../ui/LangDropdown/LangDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsModalIsOpen, setProductsModalIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <header className="max-w-[99%] md:max-w-[90%] w-full mx-auto min-h-[43px] z-50">
        <nav className="w-full h-full flex justify-between items-center px-4 md:px-10 py-4 xl:px-12">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={130} height={130} />
            </Link>

            <ul className="items-center p-4 text-sm 2xl:text-base text-nowrap text-mainText gap-6 hidden md:flex">
              <li>
                <Link
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
                    <Link
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
                    <Link
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
          </div>

          <div className="flex items-center gap-2">
            <LangDropdown />

            <Btn
              bg={"bg-main_blue-500 py-2 hidden md:block"}
              color={"text-mainText"}
              text={"Get A Consultation"}
              rounded={"rounded-lg"}
              url="/contact"
            />
          </div>

          <Btn
            bg={"md:hidden"}
            color={"text-mainText"}
            icon={<GiHamburgerMenu size={30} />}
            onClick={() => setIsOpen(!isOpen)}
          />
        </nav>
      </header>
      <Sidebar isOpen={isOpen} setClose={setIsOpen} />
    </>
  );
}
