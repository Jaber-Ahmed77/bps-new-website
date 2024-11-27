import React from "react";

export default function SectionOne() {
  return (
    <div className="w-full flex flex-col items-center text-center text-mainText gap-8">
      <span className="text-lg font-semibold md:text-xl lg:text-2xl">
        Our Plans
      </span>
      <p className="text-sm font-thin">
        At FX Hub, we offer flexible and comprehensive plans designed to <br />{" "}
        meet the diverse needs of traders and administrators. Whether you’re{" "}
        <br /> just starting out or managing a large trading operation, we have
        a <br /> plan that fits your requirements.
      </p>
    </div>
  );
}
