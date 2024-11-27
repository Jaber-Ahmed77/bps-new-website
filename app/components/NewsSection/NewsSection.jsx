import MapCards from "../Cards/MapCards";
import NewsCard from "../Cards/NewsCard";

export default function NewsSection() {
  const newsData = [
    {
      id: 1,
      title: "Market Cheese October 2024",
      desc: "The MarketCheese team is here with some of the most important announcements. The latest service release features.",
      image: "/img/n-1.webp",
      date: "10 OCT 2024",
      link: "news1"
    },
    {
      id: 2,
      title: "Best Broker Solution CRM October 2024 ",
      desc: "The release of BestBrokerSolution CRM 3.16.0 is packed with a raft of new features. Let us introduce the options.",
      image: "/img/n-2.webp",
      date: "25 OCT 2024",
      link: "news2"
    },
    {
      id: 3,
      title: "Best Broker Solution at iFX EXPO Asia 2024",
      desc: "On Sept 16/18 Bangkok became a hub for one of the largest fintech expos. It brought together tech and service.",
      image: "/img/n-3.webp",
      date: "1 OCT 2024",
      link: "news3"
    },
    {
      id: 4,
      title: "Best Broker Solution Web Terminal & Best Broker",
      desc: "The MarketCheese team is here with some of the most important announcements. The latest service release features.",
      image: "/img/n-1.webp",
      date: "11 Nov 2024",
      link: "news1"
    },
  ];

  return (
    <div>
      <MapCards
        data={newsData}
        renderedElement={(item) => <NewsCard {...item} />}
      />
    </div>
  );
}
