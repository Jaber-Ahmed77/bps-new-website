import Image from "next/image";

export default function PageLayout({ children }) {
  return (
      <div className="w-full h-[433px] z-[-1]">
        <div className="absolute top-0 left-0 z-[-1] w-full h-[433px] bg-main_blue-900 bg-hero-bg bg-center md:bg-[100px, 5px] bg-Cover"></div>
            
            <div className="absolute md:top-0 left-0 w-full max-h-[433px] z-10">
                <Image
                src="/img/shape_1.webp"
                alt="shape"
                width={1920}
                height={1080}
                quality={70}
                className="w-full h-auto"
                />
            </div>
            {children}
      </div>

  );
}
