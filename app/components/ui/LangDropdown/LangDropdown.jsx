import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function LangDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const languages = [
    { code: "en", name: "English", flag: "/lang/en-flag.svg" },
    // { code: "ar", name: "Arabic", flag: "/lang/ar-flag.png" },
  ];

  const handleSelect = (code) => {
    setSelectedLang(code);
    setIsOpen(false);
  };

  return (
    <div className="relative hidden md:block">
      {/* Selected Language */}
      <div
        className="min-w-[70px] flex gap-4 items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="size-6">
          <img
            src={languages.find((lang) => lang.code === selectedLang).flag}
            alt="selected language"
            className="w-6 h-6"
          />
        </div>
        <div>
          <IoIosArrowDown
            size={18}
            className={`text-main_blue-500 transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-max bg-white shadow-md rounded-md z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(lang.code)}
            >
              <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
