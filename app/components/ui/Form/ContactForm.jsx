"use client";
import { useForm } from "react-hook-form";
import Btn from "../btns/Btn";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitted(false);

    try {
      setIsSubmitted(true);

      const response = await fetch(
        "https://demo.fx-hub.net/api/best-broker/mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, plan }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Response from API:", result);

      reset();
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to send the message. Please try again later.");
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="w-full space-y-4 pb-4">
      <p className="text-neutral-800 text-center" data-aos="fade-down">
        We are ready to answer your questions and tell you more about our
        solutions.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          data-aos-duration="500"
          data-aos="fade-down"
        >
          {/* Name Field */}
          <div className="w-full">
            <label>
              <p className="text-main_blue-900 mb-1 text-base font-medium">
                Your Name
              </p>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg focus:outline-none focus:ring focus:ring-main_blue-300"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </label>
          </div>

          {/* Email Field */}
          <div className="w-full">
            <label>
              <p className="text-main_blue-900 mb-1 text-base font-medium">
                Email
              </p>
              <input
                type="email"
                placeholder="example@website.com"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg focus:outline-none focus:ring focus:ring-main_blue-300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </label>
          </div>

          {/* Phone Field */}
          <div className="w-full">
            <label>
              <p className="text-main_blue-900 mb-1 text-base font-medium">
                Phone
              </p>
              <input
                type="tel"
                placeholder="ex: 01011020020"
                {...register("phone", { required: "Phone is required" })}
                className="w-full px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg focus:outline-none focus:ring focus:ring-main_blue-300"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </label>
          </div>

          {/* Country Field */}
          <div className="w-full">
            <label>
              <p className="text-main_blue-900 mb-1 text-base font-medium">
                Country
              </p>
              <input
                type="text"
                placeholder="ex: Egypt"
                {...register("country", { required: "Country is required" })}
                className="w-full px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg focus:outline-none focus:ring focus:ring-main_blue-300"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </label>
          </div>
        </div>

        {/* Message Field */}
        <div className="w-full" data-aos-duration="500" data-aos="fade-down">
          <label>
            <p className="text-main_blue-900 mb-1 text-base font-medium">
              Your Message
            </p>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              {...register("message", { required: "Message is required" })}
              className="w-full px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg focus:outline-none focus:ring focus:ring-main_blue-300"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </label>
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center h-[40px]">
          <Btn
            text={isSubmitting ? "Submitting..." : "Make a Request"}
            bg="bg-main_blue-500"
            rounded="rounded-lg"
            color="text-mainText"
            type="submit"
            disabled={isSubmitting || isSubmitted}
          />
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <p className="text-green-500 text-center">
            Thank you! Your request has been submitted.
          </p>
        )}
      </form>
    </div>
  );
}
