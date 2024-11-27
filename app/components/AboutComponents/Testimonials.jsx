"use client";
import { useRef } from "react";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import StarRating from "./StarRating";

export default function Testimonials({ data }) {
  const scrollableElement = useRef(null);


  const handleNext = () => {
    if (scrollableElement.current) {
      scrollableElement.current.scrollBy({
        left: 400, // Scroll left by 100 pixels
        behavior: "smooth", // Smooth scrolling effect
      });
      console.log(scrollableElement);
    }
  };

  const handlePrev = () => {
    if (scrollableElement.current) {
      scrollableElement.current.scrollBy({
        left: -400, // Scroll left by 100 pixels
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };
  return (
    <div className="w-full text-white overflow-hidden p-5 flex flex-col gap-5">
      {/* Header With Control Btns */}

      <div className="flex justify-between items-center">
        <h1 className="text-xl ">What Our Users Are Saying</h1>
        <div className="flex gap-3">
          <button
            className="border-2 transition-colors rounded-full hover:text-gray-500 hover:border-gray-500 "
            onClick={handlePrev}
            // disabled={slide === 0}
          >
            <MdOutlineArrowBack size={25} />
          </button>
          <button
            className="border-2 transition-colors rounded-full hover:text-gray-500 hover:border-gray-500"
            onClick={handleNext}
          >
            <MdOutlineArrowForward size={25} />
          </button>
        </div>
      </div>

      {/* Cards With Details */}
      <div className="w-full">
        <div
          className={`scrollbar flex gap-3 transition-transform w-full overflow-x-auto`}
          ref={scrollableElement}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="border border-[#3D3C3E] rounded-2xl p-6 min-w-80 sm:min-w-96 flex flex-col gap-3"
            >
              <div className="flex gap-3">
                <div className="size-16 overflow-clip rounded-full">
                  <img
                    className=" max-w-full"
                    src={item.imageLink}
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span>{item.name}</span>
                  <span className="text-[#969696]">{item.jobTitle}</span>
                </div>
              </div>
              <p className="text-[#969696]">{item.openion}</p>
              <StarRating rating={item.rating} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
