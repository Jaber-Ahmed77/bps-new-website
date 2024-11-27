import Btn from "../ui/btns/Btn";

export default function CardList({ data }) {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-6">
      <div className="max-w-md space-y-4">
        <span className="text-lg md:text-xl xl:text-2xl tracking-wide text-mainText font-bold">
          {data.title}
        </span>

        <ul className="text-sm space-y-4 font-light text-mainText list-disc">
          <p>{data.desc}</p>
          {
            data.data.map((item, index) => (
              <li key={index} className="ms-4">{item}</li>
            ))
          }
        </ul>
      </div>

      <div className="w-full flex gap-8 items-center h-[40px]">
        <Btn
          text="Request A Demo"
          bg="bg-mainText"
          color="text-secondaryText"
          url="/contact"
        />
      </div>
    </div>
  );
}
