"use client";

import Image from "next/image";
import PageLayout from "../components/ui/PageLayout/PageLayout";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function News2() {
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
            Best Broker Solution CRM October 2024
          </span>

          <div className="flex items-center gap-4" data-aos="fade-down">
            <span className="text-thirdText">Home</span>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-mainText">Blog</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-main_blue-500">Best Broker Solution</span>
            </div>
          </div>
        </div>
      </PageLayout>
      <div>
        <div>
          <div
            className="relative rounded-xl overflow-clip h-96 w-full"
            data-aos="fade-down"
          >
            <Image
              src="/img/n-2.webp"
              alt="Image"
              layout="fill"
              className="object-cover"
            />
          </div>

          <div>
            <h2
              className="text-[#12475F] text-4xl font-bold pt-6"
              data-aos="fade-left"
            >
              Best Broker Solution CRM October 2024
            </h2>
            <div className="my-4" data-aos="fade-left">
              {" "}
              <span className="bg-[#12475F] text-xs text-white p-2 rounded-2xl ">
                25 OCT 2024
              </span>
            </div>
            <p className="text-[#697176] pt-4" data-aos="fade-left">
              The October 2024 release of BestBrokerSolution CRM 3.16.0 delivers
              cutting-edge features to streamline brokerage operations. With
              advanced client segmentation, seamless integrations with platforms
              like MetaTrader 5, and AI-powered analytics, brokers gain powerful
              tools to manage clients and predict market trends effectively.
            </p>
          </div>
          <div>
            <h2
              className="text-[#12475F] text-xl font-bold pt-2"
              data-aos="fade-left"
            >
              Enhanced Compliance and Global Reach
            </h2>
            <p className="text-[#697176]" data-aos="fade-left">
              This update prioritizes security and regulatory compliance,
              introducing automated KYC/AML processes and GDPR-ready data
              handling. Multi-language and multi-currency support further
              extends its appeal to brokers working with international clients,
              making it a versatile solution for global markets.
            </p>
          </div>
        </div>
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 my-5">
          <div>
            <h2
              className="text-[#12475F] text-2xl font-bold mb-4"
              data-aos="fade-left"
            >
              Efficiency On-the-Go
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
          <div
            className="relative rounded-xl overflow-clip h-96 w-full"
            data-aos="fade-down"
          >
            <Image
              src="/img/n-2.webp"
              alt="Image"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default News2;
