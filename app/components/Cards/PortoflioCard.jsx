import Image from "next/image";

export default function PortoflioCard({ item }) {
  return (
    <div
      className="w-full md:w-[31%] text-center bg-white flex flex-col justify-start items-start gap-4 hover:opacity-75 transition-all duration-300"
      data-aos="fade-down"
    >
      {/* Image Section */}
      <Image
        src={item.img}
        alt="quote"
        width={312}
        height={200}
        quality={70}
        className="object-cover rounded-xl"
      />

      {/* Content Section */}
      <div className="flex flex-col justify-start items-start gap-2">
        {/* Badge */}
        <div className="px-3 py-1 bg-[#eaf7fc] rounded-full flex justify-center items-center">
          <span className="text-[#2caae2] text-sm font-medium capitalize">
            {item.label}
          </span>
        </div>

        {/* Title */}
        <div className="text-[#12475f] text-xl sm:text-lg md:text-xl font-medium capitalize">
          {item.title}
        </div>
      </div>
    </div>
  );
}
