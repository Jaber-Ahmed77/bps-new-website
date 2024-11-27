"use client";

import React from "react";
import Card from "../components/TradersRoomComponents/Card";
import Image from "next/image";
import ItemCard from "../components/TradersRoomComponents/ItemCard";
import ServiceCard from "../components/TradersRoomComponents/ServiceCard";
import PageLayout from "../components/ui/PageLayout/PageLayout";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function TradersRoom() {
  useEffect(() => {
    Aos.init({
      duration: 300, // Global animation duration
      easing: "ease-in-out", // Global easing
    });
  }, []);

  const cardsData = [
    {
      id: 1,
      title: "Automatic accounts opening",
      description:
        "The trader immediately gets access to the trading account after registration.",
    },
    {
      id: 2,
      title: "All account information in one place",
      description:
        "Due to the integration of the trading terminal, traders can not only replenish their accounts but also trade using only the Trader’s Room.",
    },
    {
      id: 3,
      title: "App eco-system",
      description:
        "All applications work as a single unit. Information from the Trader's Room is displayed in the Broker’s profile without any delay.",
    },
    {
      id: 4,
      title: "All functions in the pocket",
      description:
        "Portfolio management using a smartphone has never been so convenient: the trader can perform the usual actions while traveling, sitting in a cafe or walking down the street!",
    },
  ];

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

  const servicesData = [
    {
      title: "Web Trader",
      image: "/img/assets.svg",
      desc: "Due to the integration of the trading terminal, traders can not only replenish their accounts but also trade using only the Trader’s Room.",
    },
    {
      title: "Analytics",
      image: "/img/chart.svg",
      desc: "Traders can keep tracking the latest changes in the Forex market by using Market Cheese widgets.",
    },
  ];
  return (
    <section className="w-full flex flex-col justify-center gap-4 px-6 md:px-12 xl:px-14 py-6 xl:py-8">
      <PageLayout>
        <div className="flex flex-col items-center mt-[9.5%] max-h-fit leading-loose gap-8">
          <span className="text-4xl text-thirdText tracking-wider font-bold">
            Trader&apos;s Room
          </span>

          <div className="flex items-center gap-4" data-aos="fade-down">
            <span className="text-thirdText">Home</span>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-mainText">Products</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-main_blue-500">Traders Room</span>
            </div>
          </div>
        </div>
      </PageLayout>
      <div className="min-h-screen py-24">
        <div className="gap-5 flex md:flex-row flex-col">
          <div className="flex-1">
            <h3
              className="text-main_blue-900 text-3xl lg:text-5xl font-bold "
              data-aos="fade-right"
            >
              Trader’s Room
            </h3>
            <p className="mt-4 text-neutral-800" data-aos="fade-right">
              Modern solution for advanced traders
            </p>
            <div className="flex flex-wrap flex-row md:flex-col gap-4 mt-8">
              {cardsData.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          </div>
          <div className="flex-1 flex gap-5 relative">
            {/* First parent with increased height */}
            <div className="flex flex-1 gap-5 flex-col h-5/6 mt-16">
              <div className="w-full md:w-80 h-full rounded-xl overflow-clip">
                <Image
                  data-aos="fade-down"
                  className="!h-full"
                  src="/img/chart.webp"
                  alt="features"
                  width={300}
                  height={300}
                  quality={70}
                  layout="responsive"
                />
              </div>
              <div className="w-80 hidden md:block h-full rounded-xl overflow-clip">
                <Image
                  data-aos="fade-down"
                  src="/img/chart.webp"
                  alt="features"
                  width={300}
                  className="!h-full"
                  height={300}
                  quality={70}
                  layout="responsive"
                />
              </div>
            </div>

            {/* Second parent with default height */}
            <div className="flex-1 gap-6 hidden md:flex flex-col h-5/6">
              <div className="w-80 h-full rounded-xl overflow-clip">
                <Image
                  data-aos="fade-down"
                  src="/img/chart.webp"
                  alt="features"
                  width={300}
                  className="!h-full"
                  height={300}
                  quality={70}
                  layout="responsive"
                />
              </div>
              <div className="w-80 h-full rounded-xl overflow-clip">
                <Image
                  data-aos="fade-down"
                  src="/img/chart.webp"
                  alt="features"
                  width={300}
                  className="!h-full"
                  height={300}
                  quality={70}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8" data-aos="fade-down">
          <Link
            href={"/contact"}
            className="py-2 w-40 text-center bg-main_blue-500 border border-main_blue-500 transition-colors rounded-xl hover:bg-white text-white hover:text-main_blue-500 "
          >
            {" "}
            Make A Request
          </Link>
          <Link
            href={"/contact"}
            className="py-2 w-40 text-center bg-white rounded-xl hover:bg-main_blue-500 border border-main_blue-500 transition-colors text-main_blue-500 hover:text-white "
          >
            {" "}
            Demo Version
          </Link>
        </div>
        <div className="mt-24">
          <h3
            className="text-main_blue-900 text-3xl lg:text-5xl font-bold"
            data-aos="fade-right"
          >
            How It Works ?
          </h3>
          <div className="flex flex-wrap lg:flex-nowrap lg:justify-between mt-10 gap-3">
            {howSecData.map((item, i) => (
              <div
                key={i}
                className="p-5 flex flex-col rounded-xl shadow-none lg:shadow-lg lg:flex-1 w-full"
              >
                <ItemCard
                  number={i < 9 ? `0${i + 1}` : `${i + 1}`}
                  description={item.description}
                  isColumn
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24">
          <div className="flex flex-col lg:flex-row mt-10 gap-4">
            <div className="flex-1">
              <h3
                className="text-main_blue-900 text-3xl lg:text-5xl font-bold mb-2"
                data-aos="fade-right"
              >
                Services Integration
              </h3>
              <p data-aos="fade-right">
                New features for trading through the integration of the trading
                terminal, Affiliate&apos;s Room and analytics widgets
              </p>
              <div className="flex mt-10 flex-col gap-4">
                {servicesData.map((item, i) => (
                  <ServiceCard key={i} data={item} />
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col border gap-4 rounded-xl">
              <div className="h-full rounded-xl overflow-clip">
                <Image
                  data-aos="fade-down"
                  src="/img/chart.webp"
                  alt="features"
                  width={300}
                  className="!h-full"
                  height={300}
                  quality={70}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
