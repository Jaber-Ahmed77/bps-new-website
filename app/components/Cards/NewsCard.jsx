import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ date, title, desc, image, link }) {
  return (
    <Link href={link} data-aos="fade-down">
      <div className="w-full min-h-full cursor-pointer transition hover:opacity-80 p-4 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-4">
        <div className="w-full sm:w-[304px] h-auto rounded-xl justify-start items-start flex flex-1">
          <div className="relative min-w-[190px] min-h-[120px] w-full h-full rounded-xl justify-center items-center gap-2.5 flex">
            <div className="absolute left-[2px] top-[2px] w-fit h-fit p-1.5 rounded-xl z-10 text-neutral-800 text-nowrap bg-white text-xs font-extralight leading-[14px]">
              {date}
            </div>

            <Image
              src={image}
              alt="quote"
              fill
              quality={70}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="w-full sm:w-auto flex-col justify-start items-start gap-4 flex flex-auto">
          <div className="self-stretch text-[#12475f] text-lg font-semibold">
            {title}
          </div>
          <div className="self-stretch text-neutral-800 text-sm">{desc}</div>
        </div>
      </div>
    </Link>
  );
}
