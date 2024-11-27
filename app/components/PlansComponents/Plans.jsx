import PlanCard from "./PlanCard";

export default function Plans({ data }) {
  return (
    <div className="w-full flex flex-col items-center text-center text-mainText gap-8">

     <span className="text-lg font-semibold md:text-xl lg:text-2xl">
        Our Plans
      </span>
      <p className="text-sm md:text-base font-thin">
        At FX Hub, we offer flexible and comprehensive plans designed to <br />{" "}
        meet the diverse needs of traders and administrators. Whether you’re{" "}
        <br /> just starting out or managing a large trading operation, we have
        a <br /> plan that fits your requirements.
      </p>

      <div className="flex gap-4 mt-10 flex-wrap items-center justify-center">
        {data.map((item, index) => (
          <PlanCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
