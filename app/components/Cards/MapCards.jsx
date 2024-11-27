export default function MapCards({ data, renderedElement, threeCols }) {
  return (
    <div
      className={`w-full h-full px-5 py-4 grid ${
        threeCols
          ? "md:grid-cols-3 gap-4"
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 place-content-center"
      }`}
    >
      {data.map((item) => (
        <div data-aos="fade-down" className="w-full h-full" key={item.id}>
          {renderedElement(item)}
        </div>
      ))}
    </div>
  );
}
