import { FaCheck } from "react-icons/fa";
import Btn from "../ui/btns/Btn";

export default function PlanCard({ item }) {
  return (
    <div
      className="w-full max-w-[411px] sm:w-[90%] md:w-[75%] lg:w-[32%] p-6 sm:p-4 md:p-6 bg-main_blue-900 rounded-xl flex flex-col justify-start items-start gap-6 group hover:opacity-85 transition-all duration-300"
      data-aos="fade-down"
    >
      {/* Header Section */}
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="text-white text-lg sm:text-sm md:text-md font-light">
          {item.firstTitle}
        </div>
        <div className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold capitalize leading-tight">
          {item.secondTitle}
        </div>
        <div className="text-main_blue-50 text-lg sm:text-sm md:text-md font-normal">
          {item.desc}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-main_blue-100"></div>

      {/* Features Section */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        {item.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 sm:gap-1.5 text-lg sm:text-sm md:text-base font-normal font-['Roboto'] capitalize"
          >
            <div className="w-5 h-5 flex justify-center items-center bg-main_blue-500 rounded-full">
              <FaCheck size={10} className="text-main_blue-900" />
            </div>
            <span
              className={
                feature.isHighlight
                  ? "text-main_blue-400 font-black"
                  : "text-white text-xs md:text-sm"
              }
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* Order Button */}
      <div className="w-full px-6 py-3 mt-4 rounded-lg border-2 border-main_blue-500 text-center group-hover:bg-main_blue-500 transition-all duration-300">
        {/* <button className="text-main_blue-500 text-base font-semibold group-hover:text-white capitalize">
      Order Now
    </button> */}
        <Btn
          text="order now"
          bg="text-base font-semibold group-hover:text-white capitalize"
          color="text-main_blue-500"
          url={`/contact?plan=${item.secondTitle}`}
        />
      </div>
    </div>
  );
}
