import React from "react";

export default function FormInput({
  placeholder,
  icon,
  type,
  error,
  register,
}) {
  return (
    <div className="group h-[40px] max-w-[318px] flex relative">
      <div className="flex w-full relative justify-between items-center px-1 gap-2 text-secondaryText/45 group-hover:text-mainText">
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-transparent block border-none text-md placeholder:text-secondaryText/45 group-hover:placeholder:text-mainText focus:outline-none focus:ring-0"
          {...register}
        />
        {error && (
          <p className="absolute -bottom-6 left-0 text-xs text-nowrap text-red-500">
            {error.message}
          </p>
        )}
      </div>
      <div
        className={`w-full h-[0.5px] absolute bottom-0 left-0 bg-secondaryText/45 ${
          error && "bg-red-300"
        }`}
      ></div>
      <div
        className={`w-0 h-[0.5px] absolute bottom-0 left-0 group-hover:w-full transition-all duration-500 bg-mainText ${
          error && "bg-red-300"
        }`}
      ></div>
    </div>
  );
}
