"use client";

import { ImSkype } from "react-icons/im";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import PageLayout from "../components/ui/PageLayout/PageLayout";
import ContactForm from "../components/ui/Form/ContactForm";
import { Suspense, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 300, // Global animation duration
      easing: "ease-in-out", // Global easing
    });
  }, []);
  return (
    <section className="w-full flex flex-col justify-center gap-4 px-6 md:px-12 xl:px-14 py-6 xl:py-8">
      <PageLayout>
        <div className="flex flex-col items-center mt-[9.5%] max-h-fit leading-loose gap-8">
          <span className="text-4xl text-thirdText tracking-wider font-bold">
            Contact Us
          </span>

          <div className="flex items-center gap-4" data-aos="fade-down">
            <span className="text-thirdText">Home</span>
            <div className="flex gap-2 items-center">
              <div className="w-[13px] h-[13px] bg-main_blue-500 rounded-full" />
              <span className="text-main_blue-500">Contact Us</span>
            </div>
          </div>
        </div>
      </PageLayout>

      <div>
        <div data-aos="fade-right">
          <span className="text-[#12475F] text-2xl font-bold">Contact Us</span>
          <p className="text-[#697176] text-sm">
            Our specialists are ready to tell you all the information about the
            products and services
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 mt-5 ">
          <div
            className="shadow-xl rounded-xl h-fit py-2 px-3 flex-col "
            data-aos="fade-down"
          >
            <div>
              <svg
                width="52"
                height="40"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="50"
                  height="50"
                  rx="11"
                  fill="#EAF7FC"
                />
                <rect
                  x="1"
                  y="1"
                  width="50"
                  height="50"
                  rx="11"
                  stroke="#2CAAE2"
                  strokeWidth="2"
                />
                <g clip-path="url(#clip0_174_731)">
                  <path
                    d="M32.2461 29.8765C31.462 29.1024 30.4832 29.1024 29.7041 29.8765C29.1098 30.4658 28.5155 31.0551 27.9312 31.6544C27.7713 31.8192 27.6365 31.8542 27.4417 31.7443C27.0572 31.5345 26.6477 31.3647 26.2781 31.135C24.5551 30.0513 23.1118 28.6579 21.8333 27.0897C21.199 26.3106 20.6347 25.4766 20.2401 24.5377C20.1602 24.3479 20.1752 24.2231 20.33 24.0683C20.9243 23.4939 21.5037 22.9046 22.088 22.3153C22.902 21.4963 22.902 20.5374 22.083 19.7133C21.6185 19.2439 21.1541 18.7844 20.6896 18.315C20.2102 17.8355 19.7357 17.3511 19.2513 16.8766C18.4672 16.1125 17.4883 16.1125 16.7093 16.8816C16.11 17.471 15.5356 18.0752 14.9263 18.6546C14.362 19.1889 14.0773 19.8432 14.0174 20.6073C13.9225 21.8508 14.2271 23.0245 14.6566 24.1681C15.5356 26.5354 16.8741 28.6379 18.4972 30.5657C20.6896 33.1726 23.3066 35.2352 26.368 36.7235C27.7464 37.3927 29.1747 37.9071 30.7279 37.992C31.7967 38.0519 32.7256 37.7823 33.4697 36.9482C33.9791 36.3789 34.5534 35.8595 35.0928 35.3151C35.8919 34.5061 35.8969 33.5272 35.1028 32.7282C34.1539 31.7743 33.2 30.8254 32.2461 29.8765ZM31.2922 25.8961L33.1351 25.5815C32.8454 23.8885 32.0464 22.3553 30.8328 21.1367C29.5493 19.8532 27.9262 19.0441 26.1383 18.7944L25.8786 20.6472C27.2619 20.842 28.5205 21.4663 29.5143 22.4601C30.4532 23.399 31.0675 24.5876 31.2922 25.8961ZM34.1739 17.8855C32.0464 15.7579 29.3545 14.4145 26.383 14L26.1233 15.8528C28.6903 16.2124 31.0176 17.3761 32.8554 19.2089C34.5984 20.9519 35.7421 23.1543 36.1566 25.5765L37.9994 25.2619C37.515 22.4551 36.1915 19.9081 34.1739 17.8855Z"
                    fill="#2CAAE2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_174_731">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(14 14)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="pt-3">
              <span className="text-[#12475F]">Phone</span>
              <p className="text-[#697176]"> +357 25 654202</p>
            </div>
          </div>

          <div
            className="shadow-xl rounded-xl h-fit py-2 px-3 flex-col "
            data-aos="fade-down"
          >
            <div>
              <svg
                width="52"
                height="40"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="50"
                  height="50"
                  rx="11"
                  fill="#EAF7FC"
                />
                <rect
                  x="1"
                  y="1"
                  width="50"
                  height="50"
                  rx="11"
                  stroke="#2CAAE2"
                  strokeWidth="2"
                />
                <g clip-path="url(#clip0_174_769)">
                  <path
                    d="M28.0057 28.7043C27.4086 29.1024 26.7151 29.3128 26 29.3128C25.285 29.3128 24.5914 29.1024 23.9943 28.7043L14.1598 22.1478C14.1055 22.1115 14.0522 22.0737 14 22.0345V32.7781C14 34.0099 14.9996 34.9874 16.2094 34.9874H35.7906C37.0224 34.9874 38 33.9878 38 32.7781V22.0344C37.9476 22.0737 37.8942 22.1116 37.8398 22.148L28.0057 28.7043Z"
                    fill="#2CAAE2"
                  />
                  <path
                    d="M14.9398 20.9777L24.7744 27.5343C25.1466 27.7825 25.5733 27.9066 26 27.9066C26.4267 27.9066 26.8534 27.7825 27.2256 27.5343L37.0602 20.9777C37.6487 20.5856 38 19.9293 38 19.2211C38 18.0032 37.0092 17.0125 35.7914 17.0125H16.2086C14.9908 17.0125 14 18.0032 14 19.2222C13.9996 19.5697 14.0853 19.9118 14.2493 20.2181C14.4132 20.5244 14.6505 20.7854 14.9398 20.9777Z"
                    fill="#2CAAE2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_174_769">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(14 14)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="pt-3">
              <span className="text-[#12475F]">Email</span>
              <p className="text-[#697176]">sales@best-brokersolutions.com</p>
            </div>
          </div>

          <div
            className="shadow-xl rounded-xl h-fit py-2 px-3 flex-col "
            data-aos="fade-down"
          >
            <div>
              <svg
                width="52"
                height="40"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="50"
                  height="50"
                  rx="11"
                  fill="#EAF7FC"
                />
                <rect
                  x="1"
                  y="1"
                  width="50"
                  height="50"
                  rx="11"
                  stroke="#2CAAE2"
                  strokeWidth="2"
                />
                <g clip-path="url(#clip0_174_777)">
                  <path
                    d="M32.9322 28.4624C31.57 28.4624 30.3198 29.0667 29.482 30.0867L23.4124 27.0488C23.4957 26.7099 23.5372 26.3581 23.5372 26C23.5372 25.6419 23.4957 25.2869 23.4124 24.9478L29.482 21.9133C30.3196 22.9333 31.57 23.5378 32.9322 23.5378C35.3978 23.5378 37.3996 21.5326 37.3996 19.0705C37.3996 16.6083 35.3946 14.6 32.9322 14.6C30.467 14.6 28.4618 16.6049 28.4618 19.0673C28.4618 19.4254 28.5035 19.7773 28.5866 20.1193L22.5172 23.1507C21.6796 22.1338 20.4292 21.5326 19.067 21.5326C16.6046 21.5326 14.5996 23.5345 14.5996 26C14.5996 28.4655 16.6046 30.4673 19.067 30.4673C20.4292 30.4673 21.6794 29.8661 22.5172 28.8428L28.5868 31.8773C28.5034 32.2218 28.4615 32.5751 28.462 32.9295C28.462 35.395 30.467 37.4 32.9322 37.4C35.3975 37.4 37.3996 35.395 37.3996 32.9295C37.3996 30.464 35.3946 28.4624 32.9322 28.4624Z"
                    fill="#2CAAE2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_174_777">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(14 14)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="pt-3">
              <span className="text-[#12475F]">Social Links</span>
              <div className="flex gap-3">
                <div>
                  <ImSkype className="text-[#697176]" size={20} />
                </div>
                <div>
                  <PiWhatsappLogoFill className="text-[#697176]" size={20} />
                </div>
                <div>
                  <BiLogoTelegram className="text-[#697176]" size={20} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div data-aos="fade-down">
          <span className="text-[#12475F] text-2xl font-bold">
            Get a consultation
          </span>
        </div>{" "}
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm start />
        </Suspense>
      </div>
    </section>
  );
}

export default Contact;
