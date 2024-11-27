import Btn from "../ui/btns/Btn";

export default function CardOne() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-6">
      <div className="max-w-md space-y-4">
        <span className="text-lg md:text-xl xl:text-2xl tracking-wide text-mainText font-bold">
        About FX HUB 
        </span>
        <p className="text-base font-light text-mainText">
        At FX Hub, we’re redefining the trading experience with our innovative SaaS solutions. Established in 2001 
        </p>
        <p className="text-base font-light text-mainText">
        At FX Hub, we’re redefining the trading experience with our innovative SaaS solutions. Established in 2001 

our mission is to empower traders and administrators with state-of-the-art tools that enhance efficiency, insight, and performance in the financial markets.        </p>
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
