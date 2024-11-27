import Link from "next/link";

export default function Btn({
  bg,
  color,
  text,
  icon,
  disabled,
  rounded,
  type,
  onClick,
  url,
}) {
  return (
    <>
      {url ? (
        <button
          className={`h-full btn ${rounded} px-6 py-1 hover:bg-opacity-75 text-nowrap text-[10px] md:text-sm transition duration-300 ${bg} ${color} ${
            bg === "glassy"
              ? "bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
              : ""
          }
  ${disabled ? "cursor-not-allowed bg-gray-300 opacity-50" : ""}
  `}
          disabled={disabled}
          type={type}
          onClick={onClick}
        >
          <Link
            href={url ? url : "#"}
            className="flex gap-2 items-center justify-center"
          >
            <span className="capitalize">{text}</span>
            {icon}
          </Link>
        </button>
      ) : (
        <button
          className={`h-full btn ${rounded} px-6 py-1 flex gap-2 items-center justify-center hover:bg-opacity-75 text-nowrap text-[10px] md:text-sm transition duration-300 ${bg} ${color} ${
            bg === "glassy"
              ? "bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
              : ""
          }
        ${disabled ? "cursor-not-allowed bg-gray-300 opacity-50" : ""}
        `}
          disabled={disabled}
          type={type}
          onClick={onClick}
        >
          <span className="capitalize">{text}</span>
          {icon}
        </button>
      )}
    </>
  );
}
