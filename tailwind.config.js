/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "2sm": "740px",
        // => @media (min-width: 740px) { ... }
      },
    },
    colors: {
      "dark-1": "#111111",
      "dark-2": "#222222",
      "dark-3": "#0D0D0D",
      "dark-4": "#121417",
      "dark-5": "#0E0C0C",
      "dark-6": "#3F3F46",
      "dark-7": "#1F243B",
      "blue-dark-1": "#1B1B27",
      "blue-dark-2": "#15192B",
      "blue-dark-3": "#161622",
      "blue-dark-4": "#121417",
      "blue-dark-5": "#26264F",
      "light-white": "#C7D8EB",
      "light-white-2": "#CAD7E9",
      "light-green": "#A3DE83",
      "dark-green": "#08BF31",
      "shadow-green": "#9B9B1F",
      "light-blue": "#41C9E2",
      "dark-blue": "#008DDA",
      white: "#fff",
      golden: "rgba(254, 197, 118, 0.54)",
      bluen: "rgba(199, 216, 235, 0.40)",
      darken: "rgba(63, 63, 70, 0.83)",
      darkentwo: "rgba(183, 183, 151, 0.58)",
    },
    fontFamily: {
      sans: ["Mirza", "cursive"],
      lato: ["Lato", "sans-serif"],
      tajwal: ["Tajawal", "sans-serif"],
      italiano: ["Italianno", "cursive"],
      tapestry: ["Tapestry", "cursive"],
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};
