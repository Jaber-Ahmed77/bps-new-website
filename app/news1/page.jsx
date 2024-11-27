"use client";

import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import PageLayout from "../components/ui/PageLayout/PageLayout";
function News1() {
  useEffect(() => {
    Aos.init({
      duration: 300, // Global animation duration
      easing: "ease-in-out", // Global easing
    });
  }, []);

  return (
    <section className="w-full flex flex-col justify-center gap-4 px-6 md:px-12 xl:px-14 py-6 xl:py-8">
      <PageLayout>
        <div className="flex flex-col items-center mt-[9.5%] max-h-fit leading-loose gap-8">
          <span className="text-4xl text-thirdText tracking-wider font-bold">
            Market Cheese October 2024
          </span>

          <div className="flex items-center gap-4" data-aos="fade-down">
            <span className="text-thirdText">Home</span>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-mainText">Blog</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-main_blue-500">
                Market Cheese October 2024
              </span>
            </div>
          </div>
        </div>
      </PageLayout>
      <div>
        <div>
          <div data-aos="fade-down">
            <Image
              className="w-full"
              src={"/img/Component 3.webp"}
              alt="Image"
              width={600}
              height={600}
            />
          </div>
          <div>
            <h2
              className="text-[#12475F] text-4xl font-bold pt-6"
              data-aos="fade-left"
            >
              Become A Partner
            </h2>
            <div className="my-4">
              {" "}
              <span
                className="bg-[#12475F] text-xs text-white p-2 rounded-2xl"
                data-aos="fade-left"
              >
                10 OCT 2024
              </span>
            </div>
            <p className="text-[#697176] pt-4" data-aos="fade-left">
              The MarketCheese team is here with some of the most important
              announcements. The latest service release features a new
              macroeconomic indicator. As part of our forecasting capabilities,
              we have also introduced the functionality to set up the expected
              profit and determine the relevance of analytical estimates.
            </p>
          </div>
          <div>
            <h2
              className="text-[#12475F] text-xl font-bold pt-2"
              data-aos="fade-left"
            >
              Relevance period and profit potential
            </h2>
            <p className="text-[#697176]" data-aos="fade-left">
              In this version, users are able to schedule the relevance period
              and potential profits while creating a forecast. The period
              specifies the end date until which the forecast remains valid.
              Potential profit shows the expected earnings in pips from the
              author’s perspective.
            </p>
            <h2 className="text-[#697176] mt-4" data-aos="fade-left">
              {" "}
              Both indicators are displayed within the Forecasts section on the
              website, on the preview page, and in the widget.
            </h2>
          </div>
        </div>
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 ">
          <div data-aos="fade-down">
            <Image
              className="w-full"
              src={"/img/Lead Center 2.webp"}
              alt="Image"
              width={600}
              height={600}
            />
          </div>
          <div data-aos="fade-down">
            <Image
              className="w-full"
              src={"/img/Broker Account - IB Accounts 1.webp"}
              alt="Image"
              width={600}
              height={600}
            />
          </div>
          <div className="p-4">
            <h2
              className="text-[#12475F] text-2xl font-bold mb-4"
              data-aos="fade-left"
            >
              Macroeconomic indicator
            </h2>
            <p className="text-[#697176] leading-8" data-aos="fade-left">
              The currency section has been updated to include a macroeconomic
              indicator. This gauge reveals which country’s economy is more{" "}
              attractive to investors at the moment.  The indicator is
              calculated using seven key economic metrics for each country. 
              Publish your market forecasts, read our news and research,
              integrate our widgets into your websites.
            </p>
          </div>
          <div className="p-4" data-aos="fade-down">
            {" "}
            <Image
              src={"/img/Component 3.webp"}
              alt="Image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default News1;
