"use client";

import Image from "next/image";
import PageLayout from "../components/ui/PageLayout/PageLayout";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function News3() {
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
            Best Broker Solution at iFX EXPO Asia 2024
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
                BBS at iFX EXPO Asia 2024
              </span>
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
              src="/img/n-3.webp"
              alt="Image"
              layout="fill"
              className="object-cover"
            />
          </div>

          <div>
            <h2
              className="text-[#12475F] text-4xl font-bold pt-6"
              data-aos="fade-right"
            >
              Best Broker Solution Shines at iFX EXPO Asia 2024
            </h2>
            <div className="my-4" data-aos="fade-right">
              {" "}
              <span className="bg-[#12475F] text-xs text-white p-2 rounded-2xl ">
                1 OCT 2024
              </span>
            </div>
            <p className="text-[#697176] pt-4" data-aos="fade-right">
              From September 16th to 18th, Bangkok became the epicenter of
              fintech innovation as it hosted iFX EXPO Asia 2024. The event
              brought together industry leaders, technology innovators, and
              service providers from around the globe to showcase groundbreaking
              solutions and explore emerging trends.
            </p>
          </div>
          <div>
            <h2
              className="text-[#12475F] text-xl font-bold pt-2"
              data-aos="fade-right"
            >
              Best Broker Solution Steals the Spotlight
            </h2>
            <p className="text-[#697176]" data-aos="fade-right">
              Best Broker Solution stood out as a key exhibitor, unveiling its
              latest advancements in brokerage technology. With a focus on
              seamless CRM solutions, trading platform integrations, and
              enhanced client management tools, the company demonstrated its
              commitment to empowering brokers with cutting-edge technology.
            </p>
          </div>
        </div>
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 my-5">
          <div>
            <h2
              className="text-[#12475F] text-2xl font-bold mb-4"
              data-aos="fade-right"
            >
              Innovating for the Future
            </h2>
            <p className="text-[#697176] leading-8" data-aos="fade-right">
              Visitors to the Best Broker Solution booth experienced live
              demonstrations of their solutions, including AI-powered analytics,
              workflow automation, and compliance tools tailored for modern
              brokerage operations. These features resonated with attendees
              seeking efficient, scalable, and secure tools to elevate their
              businesses.
              <br />
              The iFX EXPO Asia 2024 proved to be a monumental event, and Best
              Broker Solution’s participation highlighted its role as a leader
              in the fintech ecosystem. As the industry continues to evolve, the
              company remains at the forefront, driving innovation and
              delivering value to brokers worldwide.
            </p>
          </div>
          <div
            className="relative rounded-xl overflow-clip h-96 w-full"
            data-aos="fade-down"
          >
            <Image
              src="/img/n-3.webp"
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

export default News3;
