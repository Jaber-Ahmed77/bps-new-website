import MapCards from "../Cards/MapCards";
import ProductCard from "../Cards/ProductCard";

export default function OurProducts() {
  const data = [
    {
      id: 1,
      img: "/img/p-1.svg",
      title: "Traders Room",
      link: "tradersRoom",
      desc: "Prompt opening and replenishment of trading accounts.",
    },
    {
      id: 2,
      img: "/img/p-2.svg",
      title: "CRM For Brokers",
      link: "crm",
      desc: "Sales management system in your company.",
    },
    {
      id: 3,
      img: "/img/p-3.svg",
      title: "Broker Solution partnership",
      link: "PartenerProgram",
      desc: "Learn about the benefits for resellers.",
    },
  ];
  return (
    <div data-aos="fade-down" className="w-full">
      <MapCards
        threeCols
        data={data}
        renderedElement={(item) => <ProductCard {...item} />}
      />
    </div>
  );
}
