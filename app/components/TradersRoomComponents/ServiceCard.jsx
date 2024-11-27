import Image from "next/image";
import React from "react";

export default function ServiceCard({ data }) {
  return (
    <div
      data-aos="fade-down"
      className="w-full h-fit p-6 bg-white rounded-xl shadow justify-start items-start gap-3 inline-flex"
    >
      <div className="w-[52px] p-2 rounded-xl border-2 border-[#12475f] flex-col justify-center items-center gap-2 inline-flex">
        <Image
          src={data.image}
          alt="Icon"
          width={40}
          height={40}
          quality={70}
          className="object-cover"
        />
      </div>
      <div className="grow shrink basis-0 pt-[8px] flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch text-[#12475f] text-xl font-medium leading-normal">
          {data.title}
        </div>
        <div className="self-stretch text-justify text-[#697176] text-base font-normal leading-[28.80px]">
          {data.desc}
        </div>
      </div>
    </div>
  );
}
