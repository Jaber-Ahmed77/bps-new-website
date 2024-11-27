import Btn from "../ui/btns/Btn";

export default function CardOne() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-4 md:gap-10">
      <div className="max-w-md space-y-4">
        <span className="text-lg md:text-2xl lg:text-3xl xl:text-5xl tracking-wide text-mainText font-bold">
        Back Office CRM Solution 
        </span>
        <p className="text-sm md:text-lg font-light text-mainText">
        full range of management functionalities for Brokers and will help you optimize the entire sales and onboarding process
        </p>
        
      </div>

      <div className="w-full flex gap-8 items-center h-[40px]">
        <Btn
          text="Request A Demo"
          bg="bg-mainText"
          color="text-secondaryText font-bold"
          url="/contact"
        />
      </div>
    </div>
  );
}
