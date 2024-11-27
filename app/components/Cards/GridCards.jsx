import React from "react";
import SmallCard from "./PartnerCard";

export default function GridCards({ data, renderedElement, title, service }) {
  
  return (
    <div className={`w-full flex flex-col gap-2 xl:gap-4`}>
      <h1 className="text-[10px] text-nowrap md:text-xl xl:text-3xl tracking-wide text-mainText font-bold">
        {title}
      </h1>
      <div className={`w-full grid grid-cols-1 ${service ? "md:grid-cols-2 h-full" : " md:grid-cols-2 lg:grid-cols-3"} gap-4`}>
      {data.map((item) => (
        <div
          className="w-full"
          key={item.id}
        >
          {renderedElement(item)}
        </div>
      ))}
      </div>
    </div>
  );
}
