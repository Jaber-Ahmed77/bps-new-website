import React from "react";
import GridCards from "../Cards/GridCards";
import SmallCard from "../Cards/PartnerCard";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { ImTarget } from "react-icons/im";
import { MdAutoFixHigh } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { MdSpeed } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

export default function CardsSection() {
  const technologiesData = [
    {
      id: 1,
      title: "ReactJS",
      icon: <FaReact size={45}/>,
    },
    {
      id: 2,
      title: "NextJS",
      icon: <SiNextdotjs size={45}/>,
    },
    {
      id: 3,
      title: "TailwindCSS",
      icon: <RiTailwindCssFill size={45}/>,
    },
    {
      id: 4,
      title: "Laravel",
      icon: <FaLaravel size={45}/>
      ,
    },
    {
      id: 5,
      title: "NodeJS",
      icon: <FaNodeJs size={45}/>,
    },
    {
      id: 6,
      title: "Mysql",
      icon: <SiMysql size={45}/>,
    },
  ];

  const benefitsData = [
    {
      id: 1,
      title: "Efficient",
      icon: <ImTarget size={45}/>,
    },
    {
      id: 2,
      title: "Robust",
      icon: <MdAutoFixHigh size={45}/>,
    },
    {
      id: 3,
      title: "Customizable",
      icon: <MdDashboardCustomize size={45}/>,
    },
    {
      id: 4,
      title: "High-Performance",
      icon: <MdSpeed size={45}/>
      ,
    },
    {
      id: 5,
      title: "Secure",
      icon: <MdOutlineSecurity size={45}/>,
    },
    {
      id: 6,
      title: "Budget-Friendly",
      icon: <GiReceiveMoney size={45}/>,
    },
  ];
  return (
    <section className="w-full flex gap-4 px-6 md:px-12 xl:px-14 py-6 xl:py-8">
      <div className="flex-1">
        <GridCards
        data={technologiesData}
        title="Top Technologies We Use"
        renderedElement={(item) => <SmallCard item={item} />}
      />
      </div>
      
      <div className="flex-1">
      <GridCards
        data={benefitsData}
        title="Top Benefits You Get"
        renderedElement={(item) => <SmallCard item={item} />}
      />
      </div>
    </section>
  );
}
