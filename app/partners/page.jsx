"use client";

import React from "react";
import PageLayout from "../components/ui/PageLayout/PageLayout";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PartnerCard from "../components/Cards/PartnerCard";

export default function Partners() {
  useEffect(() => {
    Aos.init({
      duration: 300, // Global animation duration
      easing: "ease-in-out", // Global easing
    });
  }, []);

  const partnerData = [
    {
      id: 1,
      img: "/img/partners/1/BitHide.svg",
      name: "BitHide",
    },
    {
      id: 2,
      img: "/img/partners/1/Antarex.png",
      name: "Antarex",
    },
    {
      id: 3,
      img: "/img/partners/1/Abcobmen.svg",
      name: "Abcobmen",
    },
    {
      id: 4,
      img: "/img/partners/1/Anymoney.svg",
      name: "Anymoney",
    },
    {
      id: 5,
      img: "/img/partners/1/Alikassa.svg",
      name: "Alikassa",
    },
    {
      id: 6,
      img: "/img/partners/1/Akurateco.svg",
      name: "Akurateco",
    },
    {
      id: 7,
      img: "/img/partners/1/3Xgate.svg",
      name: "3Xgate",
    },
    {
      id: 8,
      img: "/img/partners/1/Betatransfer.svg",
      name: "Betatransfer",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center gap-4 px-4 sm:px-6 md:px-12 xl:px-14 py-4 xl:py-8">
      <PageLayout>
        <div className="flex flex-col items-center mt-[9.5%] max-h-fit leading-loose gap-6">
          <span className="text-2xl sm:text-4xl text-thirdText tracking-wider font-bold">
            Partners Network
          </span>

          <div
            className="flex flex-col sm:flex-row items-center gap-2"
            data-aos="fade-down"
          >
            <span className="text-thirdText text-sm sm:text-base">Home</span>
            <div className="flex gap-2 items-center">
              <div className="w-[8px] h-[8px] sm:w-[13px] sm:h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-main_blue-500 text-sm sm:text-base">
                Partners Network
              </span>
            </div>
          </div>
        </div>
      </PageLayout>

      <div className="flex flex-col justify-start items-start gap-4">
        <div className="text-main_blue-900 text-3xl sm:text-6xl font-bold capitalize">
          UTIP partner network
        </div>
        <div className="text-neutral-800 text-sm sm:text-base font-light leading-loose">
          Were partnering with reliable experts of the related industries. Meet
          our partners:
        </div>
      </div>

      <div className="py-6 sm:py-8">
        <p
          className="text-main_blue-900 text-xl sm:text-3xl font-bold leading-10"
          data-aos="fade-down"
        >
          Payment systems
        </p>

        <div className="w-full gap-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {partnerData.map((item) => (
            <PartnerCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="py-6 sm:py-8">
        <p
          className="text-main_blue-900 text-xl sm:text-3xl font-bold leading-10"
          data-aos="fade-down"
        >
          Lead generators
        </p>

        <div className="w-full gap-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {partnerData.map((item) => (
            <PartnerCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="py-6 sm:py-8">
        <p
          className="text-main_blue-900 text-xl sm:text-3xl font-bold leading-10"
          data-aos="fade-down"
        >
          Registrators
        </p>

        <div className="w-full gap-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {partnerData.map((item) => (
            <PartnerCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="py-6 sm:py-8">
        <p
          className="text-main_blue-900 text-xl sm:text-3xl font-bold leading-10"
          data-aos="fade-down"
        >
          Liquidity
        </p>

        <div className="w-full gap-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {partnerData.map((item) => (
            <PartnerCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="py-6 sm:py-8">
        <p
          className="text-main_blue-900 text-xl sm:text-3xl font-bold leading-10"
          data-aos="fade-down"
        >
          VoIP-telephony
        </p>

        <div className="w-full gap-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {partnerData.map((item) => (
            <PartnerCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
