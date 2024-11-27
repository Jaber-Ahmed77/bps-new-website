/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fade-from-center':  "radial-gradient(circle, rgba(108, 112, 128, 0.6) -7%, rgba(108, 112, 128, 0.6) 40%, rgba(88, 112, 39, 0.8) 85%, rgba(100, 39, 127, 1) 18%)",
        'hero-bg': "url('/img/hero-bg.svg')",
      },      
      colors: {
        main_blue: {
          50: "#eaf7fc",
          100: "#bee5f6",
          200: "#9ed8f2",
          300: "#72c6ec",
          400: "#56bbe8",
          500: "#2caae2",
          600: "#289bce",
          700: "#1f79a0",
          800: "#185e7c",
          900: "#12475f",
        },
        neutral: {
          50: "#f9fafb",
          100: "#ebf0f2",
          200: "#e1e8ec",
          300: "#d3dee4",
          400: "#cbd8de",
          500: "#beced6",
          600: "#adbbc3",
          700: "#879298",
          800: "#697176",
          900: "#50575a",
        },
        pageBG: "#0d0d0d",
        mainBG: "#0070E4",
        mainText: "#ffffff",
        secondaryText: "#13111A",
        thirdText: "#f5f8f7",
        btnsColor: "#0070E4",
      },
      keyframes: {
        fadeOut: {
          '0%': { backgroundColor: 'rgba(0, 0, 0, 1)' },
          '100%': { backgroundColor: 'rgba(0, 0, 0, 0)' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 3s ease-out forwards',
      },
    },
    fontFamily: {},
  },
  plugins: [],
};
