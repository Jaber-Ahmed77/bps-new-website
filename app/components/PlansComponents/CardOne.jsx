import Btn from "../ui/btns/Btn";

export default function CardOne() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-6">
      <div className="max-w-md space-y-4">
        <span className="text-lg md:text-xl xl:text-2xl tracking-wide text-mainText font-bold">
          Need a Custom Plan?
        </span>
        <p className="text-base font-light text-mainText">
          At FX Hub, we understand that every business is unique. If our
          standard plans don&apos;t quite fit your requirements, we offer
          customizable plans designed to provide you with the exact tools and
          features you need to succeed.{" "}
        </p>
      </div>

      <div className="w-full flex gap-8 items-center h-[40px]">
        <Btn
          text="Contact Us"
          bg="bg-mainText"
          color="text-secondaryText"
          url="/contact"
        />
      </div>
    </div>
  );
}
