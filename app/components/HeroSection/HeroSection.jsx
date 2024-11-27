"use client";

import Image from "next/image";
import Btn from "../ui/btns/Btn";
import { useEffect, useRef } from "react";
import anime from "animejs";

export default function HeroSection() {
  const textRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    if (textRef.current && spanRef.current) {
      const firstSpan = textRef.current; // Entire "Forex" word
      const secondSpan = spanRef.current.querySelectorAll("span"); // Individual letters of "Platform"

      // Animate the entire "Forex" word
      anime({
        targets: firstSpan,
        opacity: [0, 1],
        translateX: ["10px", "0px"], // Move the whole word from right to left
        duration: 500,
        easing: "easeOutQuad",
        delay: 0,
      });

      // Animate each letter of "Platform" (second span)
      anime({
        targets: secondSpan,
        opacity: [0, 1],
        translateX: ["10px", "0px"], // Move each letter from right to left
        duration: 500,
        delay: (el, i) => i * 100, // Delay for sequential letter animation
        easing: "easeOutQuad",
      });
    }
  }, []);

  return (
    <section className="relative flex flex-col items-center md:flex-row p-6 md:p-12 xl:p-14 min-h-[851px]">
      <div className="flex-1 flex flex-col justify-between max-h-[750px] md:max-h-full lg:h-[540px]">
        <div className="space-y-4 md:space-y-6 md:max-w-[400px] mt-11 md:mt-0">
          <h1 className="text-4xl md:text-nowrap md:text-6xl xl:text-[96px] tracking-wide text-main_blue-500 font-bold">
            <span ref={textRef} style={{ display: "inline-block", opacity: 0 }}>
              Forex
            </span>{" "}
            <span ref={spanRef}>
              {"Platform".split("").map((char, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    opacity: 0,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>
          <p
            data-aos="fade-down"
            data-aos-duration="600"
            className="text-[10px] xl:text-xl max-w-[400px] tracking-wide text-mainText font-light"
          >
            A full set of software for Forex brokers to become a broker on the
            Forex market
          </p>

          <div className="max-w-sm flex gap-4 items-center h-[40px]">
            <Btn
              text="Details"
              bg="bg-main_blue-500"
              color="text-mainText"
              rounded="rounded-lg"
              url="/contact"
            />

            <Btn
              text="Demo version"
              bg="bg-transparent border border-main_blue-500"
              rounded="rounded-lg"
              color="text-main_blue-500"
              url="/contact"
            />
          </div>
        </div>

        <div className="h-[58.2px] flex flex-col md:flex-row justify-center md:justify-start mb-4 md:items-center gap-6">
          {/* Section 1 */}
          <div className="w-[302.3px] h-[58.2px] flex justify-center items-center text-center md:text-left">
            <div className="flex justify-center items-center gap-5">
              <div className="h-full">
                <Image
                  src="/img/award.svg"
                  alt="quote"
                  width={90}
                  height={90}
                  quality={70}
                />
              </div>
              <p className="text-white text-base font-semibold">
                Best CRM in the industry. Money Expo Mumbai 2024
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-[303.3px] h-[58.2px] flex justify-center items-center text-center md:text-left">
            <div className="flex justify-center items-center gap-5">
              <div className="h-full">
                <Image
                  src="/img/award.svg"
                  alt="quote"
                  width={90}
                  height={90}
                  quality={70}
                />
              </div>
              <p className="text-white text-base font-semibold">
                The best trading platform. Wiki Expo Singapore 2023
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* desktop image */}
      <div className="hidden md:block absolute top-1/2 right-0 -mr-6 md:-mr-16 lg:-mr-[94px] 2xl:-mr-28 -translate-y-1/2">
        <div
          className="absolute -top-[27%] left-[-170px] z-[-1] "
          style={{
            animation: "spin 8s linear infinite",
          }}
        >
          <Image
            src="/img/bg-light.svg"
            alt="bg light"
            width={900}
            height={300}
            quality={70}
            className="xl:scale-[1.1] 2xl:scale-[1.4]"
          />
        </div>

        <Image
          src="/img/big-macbook.png"
          alt="hero image"
          width={500}
          height={300}
          quality={70}
          className="xl:scale-[1.2] 2xl:scale-[1.4]"
        />
      </div>

      {/* phone image */}
      <div className=" md:hidden pr-[6%] absolute top-[58%] md:right-0 -mr-6 md:-mr-16 lg:-mr-24 2xl:-mr-28 -translate-y-1/2">
        <div className="absolute -top-[50%] overflow-x-clip w-[calc(100vw-10px)] -left-[10%] z-[-1]">
          <Image
            src="/img/bg-light.svg"
            alt="bg light"
            width={400}
            height={300}
            quality={70}
            style={{
              animation: "spin 8s linear infinite",
            }}
          />
        </div>

        <Image
          src="/img/big-macbook-mob.png"
          alt="hero image"
          width={320}
          height={300}
          quality={70}
          className="xl:scale-[1.2] 2xl:scale-[1.4]"
        />
      </div>
    </section>
  );
}
