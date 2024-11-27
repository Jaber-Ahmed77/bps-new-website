"use client";
import { GiCheckMark } from "react-icons/gi";
import { useState } from "react";
import ModalsLayout from "../ui/modals/ModalsLayout";
import ContactForm from "../ui/Form/ContactForm";

export default function PlanCard({ item }) {
  const [open, setOpen] = useState(false);

  const handleSubscribtion = () => {
    console.log("subscribed, in plan", item.title);
    setOpen(false);
    setSuccessfullyModal(true);
  };

  return (
    <section>
      <div className="flex flex-col px-4 py-6  dark:divide-[#0D0D0D] shadow-md border border-white/10 dark:border-[#0D0D0D] rounded-lg max-w-[351px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-btnsColor group text-mainText">
        <div className="space-y-3 pb-6 border-b border-white/10">
          <p className="text-xl font-semibold ">{item.name}</p>

          <p className="text-md">
            ${item.amount}{" "}
            <span className="text-xs font-light dark:text-thirdText">
              /{item.timePeriod ?? "monthly"}
            </span>
          </p>

          <p className="text-xs text-thirdText w-[250px] ">{item.slug}</p>
        </div>

        <div className="flex flex-col gap-2 pt-4">
          {item.features.map((feature, index) => (
            <div key={index} className="flex justify-start items-center gap-2">
              <div className="flex justify-center items-center size-5 text-btnsColor p-1 bg-[#252525] dark:bg-[#171717] rounded-full">
                <GiCheckMark />
              </div>
              <p className="text-base dark:text-white">{feature}</p>
            </div>
          ))}
        </div>

        <button
          className=" py-2 px-6 ring-1 text-btnsColor font-semibold ring-btnsColor mt-4 rounded-lg transition-all duration-300 group-hover:text-mainText group-hover:bg-btnsColor"
          onClick={() => setOpen(true)}
        >
          Join Plan
        </button>
      </div>

      {/* modals */}
      <ModalsLayout onClose={setOpen} open={open}>
        <ContactForm reverse={true}>
        <button
          className=" py-2 px-6  text-mainText bg-btnsColor hover:bg-opacity-75 mt-4 rounded-lg transition-all duration-300"
          type="submit"
        >
          Send Request
        </button>
        </ContactForm>
      </ModalsLayout>
    </section>
  );
}
