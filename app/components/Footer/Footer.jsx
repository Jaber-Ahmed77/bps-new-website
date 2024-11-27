import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { id: 1, icon: <GrFacebookOption size={23} />, link: "#" },
    { id: 2, icon: <IoLogoTwitter size={23} />, link: "#" },
    { id: 3, icon: <FiInstagram size={23} />, link: "#" },
    { id: 4, icon: <RiLinkedinFill size={23} />, link: "#" },
  ];

  return (
    <div className="bg-main_blue-900  text-sm font-thin text-mainText ">
      <div className="flex flex-wrap justify-between gap-8  py-6 px-6">
        <div className="flex flex-col items-start gap-6">
          <div className="w-full flex justify-start pb-4 ">
            <Image src="/Logo.svg" alt="logo" width={164} height={59} />
          </div>

          <div className="w-full flex flex-col items-start gap-4">
            <span className="flex gap-2 items-center text-[#CCCCCC] text-[15px]">
              Phone: +000 00 000000
            </span>
            <span className="flex gap-2 items-center text-[#CCCCCC] text-[15px]">
              Email: sales@best-brokersolutions.com
            </span>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((item) => (
              <Link key={item.id} href={item.link} className="p-1">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:w-1/5 w-1/2">
          <span className="text-[#fffff] font-semibold text-lg">Company</span>
          <div className="flex flex-col mt-5">
            <Link href="/about" className=" text-[#CCCCCC] text-[16px]">
              About company
            </Link>
            <Link href="/PartenerProgram" className="mt-3 text-[#CCCCCC] text-[16px]">
              Partners Program{" "}
            </Link>
            <Link href="/partners" className="mt-3 text-[#CCCCCC] text-[16px]">
              Partners of the company{" "}
            </Link>
            <Link href="news3" className=" mt-3 text-[#CCCCCC] text-[16px]">
              MarketCheese analytics{" "}
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/5 w-1/2">
          <span className="text-[#fffff] font-semibold text-lg">Products</span>
          <div className="flex flex-col mt-5">
            <Link href="tradersRoom" className="mb-1 text-[#CCCCCC] text-[16px]">
              Trading
            </Link>
            <Link href="crm" className=" mt-3 text-[#CCCCCC] text-[16px]">
              CRM
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/5 w-1/2">
          <span className="text-[#fffff] font-semibold text-lg">Services</span>
          <div className="flex flex-col mt-5">
            <Link href="services" className="mb-1  text-[#CCCCCC] text-[16px]">
              Website development
            </Link>
            {/* <Link href="#" className="mb-1">
              Contact Us
            </Link> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="w-full  text-center mt-8 text-[18px] bg-[#185E7C] py-3 ">
        © 2006-2024 BestBrokerSolution Technologies Ltd.
      </div>
    </div>
  );
}
