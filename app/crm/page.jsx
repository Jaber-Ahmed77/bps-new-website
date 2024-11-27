"use client";

import React from "react";
import ItemCard from "../components/TradersRoomComponents/ItemCard";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import PageLayout from "../components/ui/PageLayout/PageLayout";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CRM() {
  useEffect(() => {
    Aos.init({
      duration: 300, // Global animation duration
      easing: "ease-in-out", // Global easing
    });
  }, []);

  const howSecData = [
    {
      description: "Open trading accounts for clients directly from the CRM",
    },
    {
      description:
        "Accept and process customers’ requests for money deposit and withdrawal",
    },
    {
      description: "Review clients’ trading results",
    },
    {
      description:
        "Carry out reviews of the company’s reports, managers, accounts",
    },
    {
      description:
        "Each registration in the Trader’s Room is tracked down in CRM",
    },
  ];

  const leadData = [
    {
      icon: "/img/BBSLogo.svg",
      title: "Convenient service",
      description:
        "By using custom API methods for lead generators, the integration process takes only 3 days. Data on leads comes in real-time via the Postback functionality.",
    },
    {
      icon: "/img/BBSLogo.svg",
      title: "No leaks",
      description:
        "It's up to you to decide what data the lead generator can collect, simply withhold the information it doesn't need to know.",
    },
    {
      icon: "/img/BBSLogo.svg",
      title: "Expand your business",
      description:
        "Our clients work with over 20 lead generators and receive traffic from up to 150 channels.",
    },
    {
      icon: "/img/BBSLogo.svg",
      title: "Unique leads",
      description:
        "The BestBrokerSolutions CRM monitors the traffic received by your company, so no duplicates can be found.",
    },
  ];

const featuresData = [
    {
      icon: "/img/reporting.svg",
      title: "Reporting",
    },
    {
      icon: "/img/client.svg",
      title: "Clients Data Sheets",
    },
    {
      icon: "/img/documents.svg",
      title: "Documents",
    },
    {
      icon: "/img/Actions.svg",
      title: "Actions",
    },
    {
      icon: "/img/money.svg",
      title: "Money DepositAnd Withdrawal",
    },
  ];

  const safeBaseData = [
    "IP Whitelist makes it possible to limit the ability to log into CRM only to certain computers",
    "CRM settings allow you to hide any of the customers’ data from managers, such as phone, email, address and other contacts, or restrict their editing",
    `The manager can still contact a customer by clicking the "Call" button`,
  ];

  return (
    <section className="w-full flex flex-col justify-center gap-4 px-6 md:px-12 xl:px-14 py-6 xl:py-8">
      <PageLayout>
        <div className="flex flex-col items-center mt-[9.5%] max-h-fit leading-loose gap-8">
          <span className="text-4xl text-thirdText tracking-wider font-bold">
            CRM
          </span>

          <div className="flex items-center gap-4" data-aos="fade-down">
            <span className="text-thirdText">Home</span>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-mainText">Products</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-main_blue-500">CRM</span>
            </div>
          </div>
        </div>
      </PageLayout>

      <div className="py-24">
        <div>
          <h3
            className="text-main_blue-900 text-3xl lg:text-5xl font-bold mb-5 "
            data-aos="fade-right"
          >
            Simple Steps For New Accounts
          </h3>
          <div className="flex gap-10 md:flex-row flex-col-reverse">
            <div className="flex-1">
              <div
                className="p-5 flex flex-col divide-y divide-neutral-300 rounded-xl"
                style={{
                  boxShadow: "0px 13px 40px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                {howSecData.map((item, i) => (
                  <ItemCard
                    key={i}
                    number={i < 9 ? `0${i + 1}` : `${1 + i}`}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="flex md:justify-end justify-center w-full">
                <Image
                  data-aos="fade-down"
                  src="/img/MacbookPro.jpg"
                  alt="crm"
                  width={600}
                  height={600}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h3
            className="text-main_blue-900 text-3xl lg:text-5xl font-bold mb-5 "
            data-aos="fade-right"
          >
            Our CRM Features
          </h3>
          <p className="mt-4 text-neutral-800" data-aos="fade-right">
            One App Equals 1000 Opportunities
          </p>
          <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 grid-cols-2 mt-5 gap-3">
            {featuresData.map((item, index) => (
              <div
                className="h-[138px] flex-col justify-start items-center gap-3 inline-flex"
                key={index}
                data-aos="fade-down"
              >
                <div className="w-12 h-12 px-[0.09px] justify-center items-center inline-flex">
                  <div className="w-[47.83px] h-12 relative">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={600}
                      height={600}
                    />
                  </div>
                </div>
                <div className="self-stretch text-center text-[#697176] text-base font-normal leading-relaxed">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <h3
            className="text-main_blue-900 text-3xl lg:text-5xl font-bold mb-5 "
            data-aos="fade-right"
          >
            Advanced Lead Generation
          </h3>
          <p className="mt-4 text-neutral-800" data-aos="fade-right">
            Attract more clients with CRM&apos;s lead generation features
          </p>
          <div className="flex flex-wrap lg:flex-nowrap lg:justify-between gap-6 justify-center mt-5">
            {leadData.map((item, index) => (
              <div
                key={index}
                data-aos="fade-down"
                className="w-[302px] h-[331px] p-6 bg-white rounded-xl shadow flex-col justify-start items-center gap-6 inline-flex"
              >
                <div className="h-[48.90px] p-2.5 rounded-xl  flex-col justify-center items-center gap-2.5 flex">
                  <Image src={item.icon} height={40} width={48} alt="icon"/>
                </div>
                <div className=" h-[210px] flex-col items-center gap-3 flex">
                  <div className=" text-center text-[#12475f] text-xl font-medium leading-normal">
                    {item.title}
                  </div>
                  <div className=" text-center text-[#697176] text-sm font-normal">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex gap-16 flex-col md:flex-row">
          <div className="flex-1" data-aos="fade-right">
            <h3 className="text-main_blue-900 text-3xl lg:text-5xl font-bold mb-5 lg:w-4/6 ">
              Safe Customer Base
            </h3>
            <p className="mt-4 text-neutral-800">
              Be Safe with ready integrated safety systems in our CRM
            </p>
            <div className="mt-4 pl-2">
              {safeBaseData.map((item, i) => (
                <p
                  className="flex gap-2 text-neutral-800 mb-4 leading-6"
                  key={i}
                  data-aos="fade-down"
                >
                  <span className="text-main_blue-500 pt-1">
                    <FaCircleCheck />
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-5 justify-between">
            <div
              data-aos="fade-left"
              style={{
                boxShadow: "0px 13px 40px 0px rgba(0, 0, 0, 0.1)",
              }}
              className="w-4/5 rounded-lg p-6 self-end"
            >
              <Image
                className="h-14 md:h-20"
                src="/img/partner1.svg"
                alt="logo"
                width={600}
                height={600}
              />
            </div>
            <div
              data-aos="fade-right"
              style={{
                boxShadow: "0px 13px 40px 0px rgba(0, 0, 0, 0.1)",
              }}
              className="w-4/5 rounded-lg p-6 "
            >
              <Image
                className="h-14 md:h-20"
                src="/img/partner2.svg"
                alt="logo"
                width={600}
                height={600}
              />
            </div>
            <div
              data-aos="fade-left"
              style={{
                boxShadow: "0px 13px 40px 0px rgba(0, 0, 0, 0.1)",
              }}
              className="w-4/5 rounded-lg p-6 self-end"
            >
              <Image
                className="h-14 md:h-20"
                src="/img/partner3.svg"
                alt="logo"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="w-full flex flex-col justify-center gap-4 px-6 md:px-12 xl:px-14 py-6 xl:py-8">
    //   <PageLayout>
    //     <div className="flex flex-col items-center mt-[9.5%] max-h-fit leading-loose gap-8">
    //       <span className="text-4xl text-thirdText tracking-wider font-bold">
    //         CRM
    //       </span>

    //       <div className="flex items-center gap-4" data-aos="fade-down">
    //         <span className="text-thirdText">Home</span>
    //         <div className="flex gap-2 items-center">
    //           <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
    //           <span className="text-mainText">Products</span>
    //         </div>
    //         <div className="flex gap-2 items-center">
    //           <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
    //           <span className="text-main_blue-500">
    //             CRM
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </PageLayout>

    //   <div className="py-24">
    //     <div>
    //       <h3 className="text-main_blue-900 text-3xl lg:text-5xl font-bold mb-5 " data-aos="fade-right">
    //         Simple Steps For New Accounts
    //       </h3>
    //       <div className="flex gap-10 md:flex-row flex-col-reverse">
    //         <div className="flex-1">
    //           <div
    //             className="p-5 flex flex-col divide-y divide-neutral-300 rounded-xl"
    //             style={{
    //               boxShadow: "0px 13px 40px 0px rgba(0, 0, 0, 0.1)",
    //             }}
    //           >
    //             {howSecData.map((item, i) => (
    //               <ItemCard
    //                 key={i}
    //                 number={i < 9 ? `0${i + 1}` : `${1 + i}`}
    //                 description={item.description}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //         <div className="flex-1 flex justify-center items-center">
    //           <div className="flex md:justify-end justify-center w-full">
    //             <Image
    //               src="/img/laptop.webp"
    //               alt="crm"
    //               width={600}
    //               height={600}
    //               quality={100}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-20">
    //       <h3 className="text-main_blue-900 text-3xl lg:text-5xl font-bold mb-5 ">
    //         Our CRM Features
    //       </h3>
    //       <p className="mt-4 text-neutral-800">
    //         One App Equals 1000 Opportunities
    //       </p>
    //       <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 grid-cols-2 mt-5 gap-3">
    //         {featuresData.map((item, index) => (
    //           <div className="h-[138px] flex-col justify-start items-center gap-3 inline-flex">
    //             <div className="w-12 h-12 px-[0.09px] justify-center items-center inline-flex">
    //               <div className="w-[47.83px] h-12 relative">
    //                 <Image
    //                   src={item.icon}
    //                   alt="icon"
    //                   width={600}
    //                   height={600}
    //                 />
    //               </div>
    //             </div>
    //             <div className="self-stretch text-center text-[#697176] text-base font-normal leading-relaxed">
    //               {item.title}
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="mt-20">
    //       <h3 className="text-main_blue-900 text-3xl lg:text-5xl font-bold mb-5 ">
    //         Advanced Lead Generation
    //       </h3>
    //       <p className="mt-4 text-neutral-800">
    //         Attract more clients with CRM's lead generation features
    //       </p>
    //       <div className="flex flex-wrap lg:flex-nowrap lg:justify-between gap-6 justify-center mt-5">
    //         {leadData.map((item, index) => (
    //           <div className="w-[302px] h-[331px] p-6 bg-white rounded-xl shadow flex-col justify-start items-center gap-6 inline-flex">
    //             <div className="h-[48.90px] p-2.5 rounded-xl border border-[#12475f] flex-col justify-center items-center gap-2.5 flex">
    //               <Image src={item.icon} height={40} width={40} />
    //             </div>
    //             <div className=" h-[210px] flex-col items-center gap-3 flex">
    //               <div className=" text-center text-[#12475f] text-2xl font-medium leading-normal">
    //                 {item.title}
    //               </div>
    //               <div className=" text-center text-[#697176] text-base font-normal">
    //                 {item.description}
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="mt-20 flex gap-16 flex-col md:flex-row">
    //       <div className="flex-1">
    //         <h3 className="text-main_blue-900 text-3xl lg:text-5xl font-bold mb-5 lg:w-4/6 ">
    //           Safe Customer Base
    //         </h3>
    //         <p className="mt-4 text-neutral-800">
    //           Be Safe with ready integrated safety systems in our CRM
    //         </p>
    //         <div className="mt-4 pl-2">
    //           {safeBaseData.map((item, i) => (
    //             <p className="flex gap-2 text-neutral-800 mb-4 leading-6">
    //               <span className="text-main_blue-500 pt-1">
    //                 <FaCircleCheck />
    //               </span>
    //               {item}
    //             </p>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="flex-1 flex flex-col gap-5 justify-between">
    //         <div
    //           style={{
    //             boxShadow: "0px 13px 40px 0px rgba(0, 0, 0, 0.1)",
    //           }}
    //           className="w-4/5 rounded-lg p-6 self-end"
    //         >
    //           <Image
    //             className="h-14 md:h-20"
    //             src="/img/partner1.svg"
    //             alt="logo"
    //             width={600}
    //             height={600}
    //           />
    //         </div>
    //         <div
    //           style={{
    //             boxShadow: "0px 13px 40px 0px rgba(0, 0, 0, 0.1)",
    //           }}
    //           className="w-4/5 rounded-lg p-6 "
    //         >
    //           <Image
    //             className="h-14 md:h-20"
    //             src="/img/partner2.svg"
    //             alt="logo"
    //             width={600}
    //             height={600}
    //           />
    //         </div>
    //         <div
    //           style={{
    //             boxShadow: "0px 13px 40px 0px rgba(0, 0, 0, 0.1)",
    //           }}
    //           className="w-4/5 rounded-lg p-6 self-end"
    //         >
    //           <Image
    //             className="h-14 md:h-20"
    //             src="/img/partner3.svg"
    //             alt="logo"
    //             width={600}
    //             height={600}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
