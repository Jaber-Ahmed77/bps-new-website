import Btn from "../ui/btns/Btn";

export default function CardOne() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-10">
      <div className="max-w-md space-y-4">
        <span className="text-2xl lg:text-3xl xl:text-5xl tracking-wide text-mainText font-bold">
          Welcome to Our Premier Trading Platform{" "}
        </span>
        <p className="text-lg font-light text-mainText">
          Discover a seamless and intuitive trading experience with our
          state-of-the-art trading platform. Designed for traders of all levels,
          our platform offers a comprehensive suite of tools and features to
          help you navigate the financial markets{" "}
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
