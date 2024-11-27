export default function MainTitle({ title, desc, children }) {
  return (
    <section
      id="products"
      className="w-full flex flex-col justify-center items-center gap-4 px-6 md:px-12 xl:px-14 py-6 xl:py-8"
    >
      <div
        className="text-center h-fit leading-loose gap-2"
        data-aos="fade-down"
      >
        <span className="text-[36px] text-nowrap md:text-8xl text-thirdText tracking-widest font-extrabold">
          {title}
        </span>
        <p className="font-bold -translate-y-9 md:-translate-y-8 text-xl md:text-[40px]">
          {desc ?? title}
        </p>
      </div>

      {children}
    </section>
  );
}
