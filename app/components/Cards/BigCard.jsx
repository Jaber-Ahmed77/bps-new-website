import { IoArrowForward } from "react-icons/io5";
import Btn from "../ui/btns/Btn";
import Image from "next/image";
import Link from "next/link";
import { MdContactless } from "react-icons/md";
import Accordion from "../ui/Accordion/Accordion";

export default function BigCard({ item }) {
  return (
    <div
      className={`w-full h-fit flex flex-col gap-2 md:gap-4 md:flex-row p-6 md:p-10 rounded-3xl ${item.bg}`}
    >
      <div className="basis-1/2 text-mainText flex flex-col justify-evenly order-2 md:order-1">
        <div className="space-y-2 my-4">
          <h2 className="text-sm md:text-3xl font-bold tracking-wide">{item.title}</h2>
          <p className="text-[12px] md:text-md font-light tracking-wide">{item.desc}</p>
        </div>

        {item.btnText && (
          <div className="h-[43px]">
            <Btn
              text={item.btnText}
              color="text-mainText"
              bg="bg-btnsColor"
              icon={<IoArrowForward />}
              url={item?.url}
            />
            <p className="text-sm mt-2 text-thirdText">{item.textUnderBtn}</p>
          </div>
        )}
      </div>

      {item.showAsk ? (
        <div className="basis-1/2 flex flex-col justify-evenly h-full order-2 md:order-1">

        {
          item.question && 
          item?.question.map((item) => (
            <Accordion
            key={item.id}
            title={item.title}
            // icon={<MdContactless size={25} />}
          >
            <div className="overflow-clip">
              <h4>{item.answer}</h4>
            </div>
          </Accordion>
          ))
        }

        <div className="w-full h-[43px] flex justify-end mt-4">
          <Link href="contact" alt="ask" className="text-thirdText text-sm md:text-md hover:text-thirdText/75">
            Ask a question
          </Link>
        </div>
          
        </div>
      ) : (
        <div className="basis-1/2 order-1 md:order-2 overflow-clip rounded-lg max-h-[370px]">
          <Image
            src={item.img}
            alt="features"
            width={300}
            height={300}
            quality={70}
            layout="responsive"
          />
        </div>
      )}
    </div>
  );
}
