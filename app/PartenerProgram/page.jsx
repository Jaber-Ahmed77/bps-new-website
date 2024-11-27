"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import stockPhoto from "../../public/img/Stocktrader_2.webp";
import icon1 from "../../public/img/Frame1.svg";
import icon2 from "../../public/img/Group.svg";
import icon3 from "../../public/img/Frame.svg";
import ApiPhoto from "../../public/img/GroupApi.webp";
import PageLayout from "../components/ui/PageLayout/PageLayout";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function PartenerProgram() {
  const [selectedOption, setSelectedOption] = useState("referrers");

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
            Partner Program
          </span>

          <div className="flex items-center gap-4" data-aos="fade-down">
            <span className="text-thirdText">Home</span>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-mainText">Products</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-main_blue-500">Partner Program</span>
            </div>
          </div>
        </div>
      </PageLayout>
      <div className="px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-3">
          <div>
            <h2
              className="text-[#12475F] text-2xl md:text-3xl font-bold"
              data-aos="fade-right"
            >
              Become A Partner
            </h2>
            <p className="text-[#697176] text-sm mt-3" data-aos="fade-right">
              Reap maximum benefits of cooperation with BestBrokerSolutions
            </p>
            <div className="w-full mt-5" data-aos="fade-down">
              <div className="flex bg-gray-200 rounded-md overflow-hidden md:w-[70%] w-full">
                <button
                  onClick={() => setSelectedOption("referrers")}
                  className={`flex-1 py-2 text-center text-sm md:text-base font-semibold transition-all duration-300 ${
                    selectedOption === "referrers"
                      ? "bg-white shadow-2xl text-[#2CAAE2]"
                      : "text-[#50575A]"
                  }`}
                >
                  For Referrers
                </button>
                <button
                  onClick={() => setSelectedOption("resellers")}
                  className={`flex-1 py-2 text-center text-sm md:text-base font-semibold transition-all duration-300 ${
                    selectedOption === "resellers"
                      ? "bg-white shadow-2xl text-[#2CAAE2]"
                      : "text-[#50575A]"
                  }`}
                >
                  For Resellers
                </button>
              </div>
              <div className="">
                {selectedOption === "referrers" ? (
                  <div className="mt-5">
                    <div
                      className="flex gap-2 items-start mt-2"
                      data-aos="fade-right"
                    >
                      <h2 className="text-[#2CAAE2] pt-1">
                        <FaCheckCircle className="bg-white" />
                      </h2>
                      <p className="text-[#50575A] text-sm md:text-md">
                        Recommend our products to interested parties and
                        provide us with
                        <br className="hidden md:block" /> their contact
                        information.
                      </p>
                    </div>
                    <div
                      className="flex gap-2 items-start mt-2"
                      data-aos="fade-right"
                    >
                      <h2 className="text-[#2CAAE2] pt-1">
                        <FaCheckCircle className="bg-white" />
                      </h2>
                      <p className="text-[#50575A] text-sm md:text-md">
                        As a token of our appreciation, we are pleased to offer
                        you a 10% <br className="hidden md:block" /> commission
                        on every monthly payment made by a referred client
                        <br className="hidden md:block" /> for the next
                        6 months.
                      </p>
                    </div>
                    <div
                      className="flex gap-2 items-start mt-2"
                      data-aos="fade-right"
                    >
                      <h2 className="text-[#2CAAE2] pt-1">
                        <FaCheckCircle className="bg-white" />
                      </h2>
                      <p className="text-[#50575A] text-sm md:text-md">
                        This approach is most beneficial for individuals who
                        have
                        <br className="hidden md:block" /> experience in the B2B
                        Fintech field.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5">
                    <div
                      className="flex gap-2 items-start mt-2"
                      data-aos="fade-right"
                    >
                      <h2 className="text-[#2CAAE2] pt-1">
                        <FaCheckCircle className="bg-white" />
                      </h2>
                      <p className="text-[#50575A] text-sm md:text-md">
                        Become a reseller of our products and enjoy exclusive
                        discounts
                        <br className="hidden md:block" /> that you can use to
                        generate significant profits
                      </p>
                    </div>
                    <div
                      className="flex gap-2 items-start mt-2"
                      data-aos="fade-right"
                    >
                      <h2 className="text-[#2CAAE2] pt-1">
                        <FaCheckCircle className="bg-white" />
                      </h2>
                      <p className="text-[#50575A] text-sm md:text-md">
                        This opportunity is ideal for those who have strong
                        <br className="hidden md:block" /> networks in the
                        Fintech or financial industries
                      </p>
                    </div>
                    <div
                      className="flex gap-2 items-start mt-2"
                      data-aos="fade-right"
                    >
                      <h2 className="text-[#2CAAE2] pt-1">
                        <FaCheckCircle className="bg-white" />
                      </h2>
                      <p className="text-[#50575A] text-sm md:text-md">
                        and are interested in building
                        <br className="hidden md:block" /> a long-term
                        partnership with us.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="p-5">
            <Image
              width={600}
              height={350}
              quality={70}
              data-aos="fade-down"
              className="w-full md:w-[600px] h-[250px] md:h-[350px] object-cover rounded-2xl"
              src={stockPhoto}
              alt="stockPhoto"
            />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-[#12475F] text-2xl md:text-3xl font-bold">
            Partner Features
          </h2>
          <p className="text-[#697176] text-sm md:text-base">
            Our top priority is to share information with each and every
            partner!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-5">
            <div className="pt-5">
              <p
                className="text-[#12475F] text-xl md:text-2xl font-bold"
                data-aos="fade-right"
              >
                We have everything in place
                <br /> to publish data about your company :
              </p>
            </div>
            <div
              className="text-center shadow-xl rounded-xl flex flex-col items-center p-6"
              data-aos="fade-down"
            >
              <Image width={30} src={icon1} alt="icon1" />
              <h2 className="text-[#12475F] pt-2 text-sm md:text-base">
                on our websites
              </h2>
            </div>
            <div
              className="text-center shadow-xl rounded-xl flex flex-col items-center p-6"
              data-aos="fade-down"
            >
              <Image width={30} src={icon2} alt="icon2" />
              <h2 className="text-[#12475F] pt-2 text-sm md:text-base">
                services in digests for clients
              </h2>
            </div>
            <div
              className="text-center shadow-xl rounded-xl flex flex-col items-center p-6"
              data-aos="fade-down"
            >
              <Image width={30} src={icon3} alt="icon3" />
              <h2 className="text-[#12475F] pt-2 text-sm md:text-base">
                on our international booths
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-[60px]">
          <div>
            <h2
              className="text-[#12475F] text-wrap text-2xl md:text-3xl font-bold"
              data-aos="fade-right"
            >
              Technology Integration
            </h2>
            <p
              className="text-[#50575A] text-sm md:text-xl pt-2"
              data-aos="fade-right"
            >
              Fintech service providers are able to quickly integrate technology
              using APIs
            </p>
            <p
              className="text-[#50575A] text-sm md:text-xl pt-3"
              data-aos="fade-right"
            >
              We encourage you to combine your products with ours to create a
              service bundle. <br className="hidden md:block" />
              Therefore, you can offer your customers a comprehensive and
              competitive
              <br className="hidden md:block" /> solution, while we promote your
              services to our clients.
            </p>
            <p
              className="text-[#12475F] text-sm md:text-xl font-semibold pt-4"
              data-aos="fade-right"
            >
              Technology integration is a valuable tool for partners who act
              as both referrers <br className="hidden md:block" /> and
              resellers.
            </p>
          </div>
          <div className="mt-5 md:mt-0" data-aos="fade-down">
            <Image
              className="w-full md:w-[300px] object-cover"
              src={ApiPhoto}
              alt="ApiPhoto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartenerProgram;
