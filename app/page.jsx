"use client";

// import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import MainTitle from "./components/ui/Title/MainTitle";
import OurProducts from "./components/OurProductsSection.jsx/OurProducts";
import NewsSection from "./components/NewsSection/NewsSection";
import ContactForm from "./components/ui/Form/ContactForm";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Suspense } from 'react';

export default function Home() {

  useEffect(() => {
    Aos.init({
      duration: 2000, // Global animation duration
      easing: "ease-in-out", // Global easing
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-10 lg:gap-20">
      <div className="w-full">
        <div className=" absolute top-0 left-0 z-[-1] w-full h-[749px] bg-main_blue-900 bg-hero-bg bg-center md:bg-[100px, 5px] bg-Cover"></div>

        {/* image desktop */}
        {/* <div className="hidden md:block absolute w-[760px] md:w-[1050px] xl:w-[1400px] 2xl:w-[1730px] h-[440px] md:h-[600px]  md:-bottom-20 xl:bottom-10 -left-[50%] md:-left-[13%] 2xl:-left-20 z-[-1]">
          <Image
            src="/img/lines-desktop.svg"
            alt="quote"
            fill
            quality={70}
            className="object-cover"
          />
        </div> */}

        {/* <div className="hidden md:block absolute top-0 left-0 w-screen h-[851px] z-[-1]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
            src="/video/bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-[#12475F91] bg-opacity-[57%]"></div>
        </div> */}

          {/* image mob */}
          <div className="block md:hidden absolute top-0 left-0 w-screen h-[940px] z-[-1]">
          {/* <Image
            src="/img/lines-desktop.svg"
            alt="quote"
            width={900}
            height={600}
            quality={70}
            className="scale-[1.7]"
          /> */}

          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
            src="/video/bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay (optional for darkening) */}
          <div className="absolute inset-0 bg-[#12475F91] bg-opacity-[57%]"></div>
        </div>

        <HeroSection />
      </div>

      <MainTitle title="Our Products">
        <OurProducts />
      </MainTitle>

      <MainTitle title="Company news">
        <NewsSection />
      </MainTitle>

      <MainTitle title="Contact Us" desc="Get A Cousultation">
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
      </MainTitle>

    </div>
  );
}
