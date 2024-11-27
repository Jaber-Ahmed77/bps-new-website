import React from "react";

export default function Card({ data }) {
  return (
    <div
      data-aos="fade-down"
      className="p-8 rounded-lg flex flex-col gap-2"
      style={{
        boxShadow: "0px 13px 40px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h5 className="text-main_blue-900 font-medium">{data.title}</h5>
      <p className="text-neutral-800 text-sm word-spacing-widest">
        {data.description}
      </p>
    </div>
  );
}
