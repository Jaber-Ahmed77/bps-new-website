import FeaturesCard from "../Cards/ProductCard";
import MapCards from "../Cards/MapCards";

export default function  FeaturesSection({ data, title }) {
  return (
    <section className="w-full flex flex-col justify-center items-center text-mainText gap-4 px-6 md:px-12 xl:px-14 py-6 xl:py-8">

        <h1 className="text-lg md:text-2xl xl:text-3xl tracking-wide font-bold">{title}</h1>

      <MapCards
        data={data}
        renderedElement={(item) => (
          <FeaturesCard {...item} />
        )}
      />
    </section>
  );
}
