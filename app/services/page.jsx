"use client";

import Image from "next/image";
import PlanCard from "../components/Cards/PlanCard";
import PortoflioCard from "../components/Cards/PortoflioCard";
import PageLayout from "../components/ui/PageLayout/PageLayout";
import FAQ from "../components/AboutComponents/FAQ";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    Aos.init({
      duration: 300, // Global animation duration
      easing: "ease-in-out", // Global easing
    });
  }, []);

  const cardsDtata = [
    {
      id: 1,
      firstTitle: "Personal",
      secondTitle: "Standard",
      desc: "Website for Forex brokers",
      features: [
        { text: "Logo", isHighlight: false },
        { text: "Premium design", isHighlight: false },
        { text: "Market news", isHighlight: false },
        { text: "Mobile version", isHighlight: false },
        {
          text: "Integration with BestBrokerSolutions CRM",
          isHighlight: false,
        },
        { text: "30 Days Lead Time", isHighlight: true },
        { text: "1 month maintenance", isHighlight: false },
        { text: "6 Widgets", isHighlight: false },
        { text: "CMS Wordpress Control panel", isHighlight: false },
      ],
    },
    {
      id: 2,
      firstTitle: "Best Seller",
      secondTitle: "Enterprise",
      desc: "Website for Forex brokers",
      features: [
        { text: "Logo", isHighlight: false },
        { text: "Premium design", isHighlight: false },
        { text: "Market news", isHighlight: false },
        { text: "Mobile version", isHighlight: false },
        {
          text: "Integration with BestBrokerSolutions CRM",
          isHighlight: false,
        },
        { text: "65 Days Lead Time", isHighlight: true },
        { text: "1 month maintenance", isHighlight: false },
        { text: "6 Widgets", isHighlight: false },
        { text: "CMS Control panel", isHighlight: false },
      ],
    },
    {
      id: 3,
      firstTitle: "Personal",
      secondTitle: "landing",
      desc: "Website for Forex brokers",
      features: [
        { text: "Logo", isHighlight: false },
        { text: "Premium design", isHighlight: false },
        { text: "Market news", isHighlight: false },
        { text: "Mobile version", isHighlight: false },
        {
          text: "Integration with BestBrokerSolutions CRM",
          isHighlight: false,
        },
        { text: "12 Days Lead Time", isHighlight: true },
        { text: "1 month maintenance", isHighlight: false },
        { text: "6 Widgets", isHighlight: false },
        { text: "CMS Control panel", isHighlight: false },
      ],
    },
  ];

  const productData = [
    {
      id: 1,
      label: "Enterprise",
      title: "United Brokers",
      img: "/img/products/p-1.png",
    },
    {
      id: 2,
      label: "Standered",
      title: "United Brokers",
      img: "/img/products/p-2.png",
    },
    {
      id: 3,
      label: "Landing",
      title: "United Brokers",
      img: "/img/products/p-1.png",
    },
    {
      id: 4,
      label: "Enterprise",
      title: "United Brokers",
      img: "/img/products/p-3.png",
    },
    {
      id: 5,
      label: "Landing",
      title: "United Brokers",
      img: "/img/products/p-4.png",
    },
    {
      id: 6,
      label: "Standered",
      title: "United Brokers",
      img: "/img/products/p-5.png",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center gap-4 px-6 md:px-12 xl:px-14 py-6 xl:py-8">
      <PageLayout>
        <div className="flex flex-col items-center mt-[9.5%] max-h-fit leading-loose gap-8">
          <span className="text-2xl sm:text-3xl md:text-4xl text-thirdText tracking-wider font-bold text-center">
            Forex Brokers Websites Services
          </span>

          <div
            className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base"
            data-aos="fade-down"
          >
            <span className="text-thirdText">Home</span>
            <div className="flex gap-1 sm:gap-2 items-center">
              <div className="w-[10px] sm:w-[13px] h-[10px] sm:h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-mainText">Services</span>
            </div>
            <div className="flex gap-1 sm:gap-2 items-center">
              <div className="w-[10px] sm:w-[13px] h-[10px] sm:h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-main_blue-500">
                Forex Brokers Websites Services
              </span>
            </div>
          </div>
        </div>
      </PageLayout>

      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-4 sm:gap-8 p-4">
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-4">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h1
              className="text-main_blue-900 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight"
              data-aos="fade-right"
            >
              Website for Forex brokers
            </h1>
            <p
              className="text-neutral-800 text-xs sm:text-sm md:text-base font-normal leading-loose"
              data-aos="fade-right"
            >
              We will develop a website taking into account the unique features
              of the Forex broker. You will get a ready-made business tool with
              a detailed structure, stylish design and full of texts. We will
              also create a website that is displayed correctly and works on all
              devices: computers, phones and tablets. You will get a widget of
              Economic calendar installed, so traders will be able to receive
              up-to-date information about Forex market events trading without
              leaving your website.
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h2
              className="text-main_blue-900 text-sm sm:text-base md:text-lg font-medium capitalize"
              data-aos="fade-right"
            >
              Service Features
            </h2>
            <div className="flex justify-center lg:justify-start items-start gap-2 flex-wrap">
              {[
                { title: "Website Design", icon: "/img/notificationsIcon.svg" },
                { title: "Logo Design", icon: "/img/requests.svg" },
                { title: "Website Management", icon: "/img/webSite.svg" },
                { title: "Analytics Tools", icon: "/img/tools.svg" },
                { title: "Logo Design", icon: "/img/api.svg" },
              ].map((feature, index) => (
                <div
                  data-aos="fade-down"
                  key={index}
                  className="w-[80px] sm:w-[102px] flex flex-col justify-center items-center gap-2 sm:gap-3 text-center"
                >
                  <div className="w-[40px] sm:w-[47.83px] h-[40px] sm:h-12 relative">
                    <Image
                      src={feature.icon}
                      alt="icon"
                      width={600}
                      height={600}
                    />
                  </div>
                  <p className="text-neutral-800 text-[10px] sm:text-xs md:text-sm font-normal leading-relaxed">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-auto" data-aos="fade-down">
          <img
            className="w-full lg:w-[628px] min-h-full rounded-xl"
            src="/img/Stocktrader_2.webp"
            alt="Placeholder"
          />
        </div>
      </div>

      <div className="w-full flex flex-col justify-center py-6 gap-6">
        <div className="flex flex-col justify-start items-start gap-2 lg:gap-4">
          <p
            className="text-main_blue-900 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold capitalize leading-tight"
            data-aos="fade-right"
          >
            Website development options
          </p>
          <span
            className="text-neutral-800 text-xs sm:text-sm md:text-lg font-normal leading-relaxed"
            data-aos="fade-right"
          >
            Choose One Of These Packages
          </span>
        </div>
        <div className="flex items-center flex-wrap gap-4">
          {cardsDtata.map((item) => (
            <PlanCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center py-6 gap-6">
        <div className="flex flex-col justify-start items-start gap-2 lg:gap-4">
          <p
            className="text-main_blue-900 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold capitalize leading-tight"
            data-aos="fade-right"
          >
            Our portfolio
          </p>
          <span
            className="text-neutral-800 text-xs sm:text-sm md:text-lg font-normal leading-relaxed"
            data-aos="fade-right"
          >
            Our best portfolio
          </span>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4">
          {productData.map((item) => (
            <PortoflioCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center py-6 gap-6">
        <div className="flex flex-col justify-start items-start gap-2 lg:gap-4">
          <p
            className="text-main_blue-900 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold capitalize leading-tight"
            data-aos="fade-right"
          >
            FAQ
          </p>
          <span
            className="text-neutral-800 text-xs sm:text-sm md:text-lg font-normal leading-relaxed"
            data-aos="fade-right"
          >
            Frequently Asked Questions
          </span>
        </div>
        <FAQ />
      </div>
    </section>
  );
}
