import React from "react";

export default function ItemCard({ number, description, isColumn }) {
  return (
    <div
      className={`flex items-center gap-3 py-5 ${isColumn ? "flex-col" : ""}`}
      data-aos="fade-down"
    >
      <span className="text-2xl min-w-12 flex justify-center py-2 border rounded border-main_blue-900 text-darker-stroke text-transparent tracking-tighter">
        {number}
      </span>
      <p className="text-sm text-neutral-800 text-center">{description}</p>
    </div>
  );
}
