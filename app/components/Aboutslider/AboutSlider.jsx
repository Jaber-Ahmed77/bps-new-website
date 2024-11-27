import React from "react";

function AboutSlider() {
  return (
    <div className="grid sm:grid-cols-1  gap-6 md:grid-cols-3 ">
      <div
        className="shadow-xl rounded-lg h-fit py-2 px-3 flex gap-2"
        data-aos="fade-down"
      >
        <div>
          <span className="text-[#2CAAE2]">2022</span>
          <svg
            width="37"
            height="240"
            viewBox="0 0 37 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3.5" width="30" height="30" rx="15" fill="#BEE5F6" />
            <circle cx="18.5" cy="15" r="9" fill="#2CAAE2" />
            <path d="M18.5 30L18.5 330" stroke="#2CAAE2" strokeWidth="2" />
          </svg>
        </div>
        <div className=" pt-[35px]">
          <span className="text-[#12475F]">CRM</span>
          <p className="text-[#697176]">
            We have implemented a specific <br />
            functionality to effortlessly connect
            <br /> to lead generation platforms.
          </p>
          <p className="pt-5 text-[#697176]">
            More than 20 lead generators have
            <br /> already been integrated into the
            <br /> Best Broker Solutions CRM. The
            <br /> major aggregator, Trackbox, is one
            <br /> of our respected partners.
          </p>
        </div>
      </div>

      <div
        className="shadow-xl rounded-lg h-fit py-2 px-3 flex gap-2"
        data-aos="fade-down"
      >
        <div>
          <span className="text-[#2CAAE2]">2023</span>
          <svg
            width="37"
            height="240"
            viewBox="0 0 37 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3.5" width="30" height="30" rx="15" fill="#BEE5F6" />
            <circle cx="18.5" cy="15" r="9" fill="#2CAAE2" />
            <path d="M18.5 30L18.5 330" stroke="#2CAAE2" strokeWidth="2" />
          </svg>
        </div>
        <div className=" pt-[35px]">
          <span className="text-[#12475F]">Awards</span>
          <p className="text-[#697176]">
            We have implemented a specific <br />
            functionality to effortlessly connect
            <br /> to lead generation platforms.
          </p>
          <p className="pt-5 text-[#697176]">
            More than 20 lead generators have
            <br /> already been integrated into the
            <br /> Best Broker Solutions CRM. The
            <br /> major aggregator, Trackbox, is one
            <br /> of our respected partners.
          </p>
        </div>
      </div>

      <div
        className="shadow-xl rounded-lg h-fit py-2 px-3 flex gap-2"
        data-aos="fade-down"
      >
        <div>
          <span className="text-[#2CAAE2]">2024</span>
          <svg
            width="37"
            height="240"
            viewBox="0 0 37 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3.5" width="30" height="30" rx="15" fill="#BEE5F6" />
            <circle cx="18.5" cy="15" r="9" fill="#2CAAE2" />
            <path d="M18.5 30L18.5 330" stroke="#2CAAE2" strokeWidth="2" />
          </svg>
        </div>
        <div className=" pt-[35px]">
          <span className="text-[#12475F]">Partnership department</span>
          <p className="text-[#697176]">
            We have implemented a specific <br />
            functionality to effortlessly connect
            <br /> to lead generation platforms.
          </p>
          <p className="pt-5 text-[#697176]">
            More than 20 lead generators have
            <br /> already been integrated into the
            <br /> Best Broker Solutions CRM. The
            <br /> major aggregator, Trackbox, is one
            <br /> of our respected partners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSlider;
