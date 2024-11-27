import Image from "next/image";

export default function PartnerCard({ item }) {
  return (
    <div
      className="px-10 py-8 rounded-xl shadow-xl flex justify-center items-center gap-4 w-full"
      data-aos="fade-down"
    >
      <div className="relative w-fit h-auto">
        <Image
          src={item.img}
          alt="quote"
          width={90}
          height={70}
          quality={70}
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
