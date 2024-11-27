"use client";

import React from "react";
import AboutSlider from "../components/Aboutslider/AboutSlider";
import PageLayout from "../components/ui/PageLayout/PageLayout";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
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
            About
          </span>

          <div className="flex items-center gap-4" data-aos="fade-down">
            <span className="text-thirdText">Home</span>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-main_blue-500">About</span>
            </div>
          </div>
        </div>
      </PageLayout>
      <div className="text-center sm:text-left mb-6">
        <span className="text-2xl text-[#12475F] capitalize font-bold">
          About us
        </span>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="max-w-md space-y-4 mt-3">
          <p className="font-normal text-[#697176]">
            BestBrokerSolutions Technologies Ltd was founded in 2006 when we
            <br />
            got an idea to create a unique Forex trading platform that would
            perform the existing analogues and be as easy-to-use as possible for
            both brokers and traders.
          </p>
        </div>
        <div
          className="shadow-lg rounded-lg h-fit py-4 px-5"
          data-aos="fade-down"
        >
          <h2 className="text-[#12475F] text-[22px] md:text-xl font-medium">
            More than 100 clients and 120 employees
          </h2>
          <p className="font-normal text-[#697176]">
            Nowadays 120 highly qualified specialists work in the <br />
            BestBrokerSolutions team. Now more than 100 brokerage companies on
            <br /> 5 continents of our planet actively cooperate with us.
          </p>
        </div>
        <div className="shadow-lg rounded-lg py-4 px-5" data-aos="fade-down">
          <h2 className="text-[#12475F] text-[22px] md:text-xl font-medium">
            Major Forex exhibitions participation
          </h2>
          <p className="font-normal text-[#697176]">
            The company launched an active international marketing strategy in
            <br />
            2015. The main focus was placed on Europe and Asia. Brokerages in
            <br />
            Bulgaria, Poland, India and Indonesia started to open under the
            <br />
            BestBrokerSolutions platform. BestBrokerSolutions marked itself on
            the <br />
            world&apos;s largest exhibitions iFX EXPO Asia 2016 in Hong Kong and iFX
            <br />
            EXPO International 2016 in Cyprus.
          </p>
        </div>
        <div className="shadow-lg rounded-lg py-4 px-5" data-aos="fade-down">
          <h2 className="text-[#12475F] text-[22px] md:text-xl font-medium ">
            The first Best Broker Solutions platform version
          </h2>
          <p className="font-normal text-[#697176]">
            Initially five people worked on the platform. Eventually, in 2008 we
            <br />
            released the first functioning version of the
            <span className="text-[#2CAAE2]">Best Broker Solutions</span>
            <br />
            <span className="text-[#2CAAE2]">platform</span>. Forex brokerages
            and companies, working under the White <br />
            Label, were chosen as the target audience.
          </p>
        </div>
        <div className="shadow-lg rounded-lg py-4 px-5" data-aos="fade-down">
          <h2 className="text-[#12475F] text-[22px] md:text-xl font-medium">
            Forex Company creation services
          </h2>
          <p className="font-normal text-[#697176]">
            Later, BestBrokerSolutions started providing consulting services on
            <br />
            creating new Forex companies and offering website-developing <br />
            services to Forex brokers.
          </p>
        </div>
        <div className="shadow-lg rounded-lg py-4 px-5" data-aos="fade-down">
          <h2 className="text-[#12475F] text-[22px] md:text-xl font-medium">
            Extra modules and services
          </h2>
          <p className="font-normal text-[#697176]">
            The next step in the development of BestBrokerSolutions was an
            <br />
            expansion of the platform’s infrastructure. New services and extra
            <br />
            modules for brokers started to appear.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <span
          className="text-2xl text-[#12475F] capitalize font-bold"
          data-aos="fade-down"
        >
          History by years
        </span>
        <div className="my-6">
          <AboutSlider />
        </div>
      </div>
    </section>
  );
}

export default About;
