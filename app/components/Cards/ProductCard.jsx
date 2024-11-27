import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ img, title, desc, id, link }) {
  return (
    <Link href={link}>
      <div className="w-full min-h-full max-w-md p-6 bg-main_blue-900 rounded-xl flex flex-col justify-start items-center gap-4">
        {/* Header Section */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="w-full text-4xl font-semibold text-stroke leading-loose text-main_blue-900 opacity-85">
            0{id}
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="text-main_blue-500 text-lg md:text-xl font-semibold leading-normal">
              {title}
            </div>
            <div className="text-neutral-700 text-xs md:text-sm font-normal leading-[18px]">
              {desc}
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full max-w-xs h-auto relative flex justify-center items-center">
          <Image src={img} alt={title} width={130} height={130} quality={70} />
        </div>
      </div>
    </Link>
  );
}
