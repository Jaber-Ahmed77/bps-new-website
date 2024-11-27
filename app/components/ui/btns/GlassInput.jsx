import Btn from "./Btn";
import { IoArrowForward } from "react-icons/io5";

export default function GlassInput() {
  return (
    <div className="h-[40px] max-w-[318px] flex">
      <div className="flex w-full relative justify-between items-center gap-2 text-mainText bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded-3xl">
        <input
          type="text"
          placeholder="Email"
          className="w-full px-4 py-3 bg-transparent block border-none text-md placeholder:text-mainText focus:outline-none focus:ring-0"
        />{" "}
        <Btn
          bg="bg-btnsColor"
          color="text-mainText"
          text="Subscribe"
          icon={<IoArrowForward />}
        />
      </div>
    </div>
  );
}
