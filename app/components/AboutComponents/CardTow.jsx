import Btn from "../ui/btns/Btn";

export default function CardTow() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-6">
      <div className="max-w-md space-y-4">
        <span className="text-lg md:text-xl xl:text-2xl tracking-wide text-mainText font-bold">
          BBS Vision
        </span>

        <ul className="text-sm space-y-4 font-light text-mainText list-disc">
          <p>
            We are dedicated to transforming trading and back-office management
            through:
          </p>

          <li className="ms-4">
            Cutting-Edge Trading Dashboard: An all-in-one platform offering
            real-time market data, seamless trade execution, and powerful
            analytical tools for traders.
          </li>
          <li className="ms-4">
            Backoffice Management System: A comprehensive solution for
            administrators to efficiently manage trading activities, user
            accounts, compliance, and detailed reporting.
          </li>
        </ul>
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
