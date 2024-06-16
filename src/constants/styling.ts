import { createTw } from "react-pdf-tailwind";

export const userTypeSelectStyling = {
  menuList: (base: any) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "0px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    overflow: "hidden",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    color: "#b9abab",
    opacity: "0.9",
  }),
  control: (baseStyles: any) => ({
    ...baseStyles,
    borderRadius: "20px",
    backgroundColor: "#0e0c0c",
    boxShadow: "0px 4px 28px -10px rgba(252, 247, 247, 0.25)",
    outline: "none",
    height: "61px",
    paddingLeft: "14px",
    paddingRight: "20px",
    border: "none",
    color: "white",
  }),
};

export const SelectOneChoiceStyling = {
  menuList: (base: any) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "0px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    height: "300px",
    overflow: "hidden",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    color: "#fff",
    opacity: "0.9",
  }),
  control: (baseStyles: any) => ({
    ...baseStyles,
    borderRadius: "7px",
    backgroundColor: "#161622",
    boxShadow: "0px 4px 28px -10px rgba(0, 0, 0, 0.25)",
    outline: "none",
    height: "56px",
    paddingLeft: "14px",
    paddingRight: "20px",
    border: "none",
    color: "#000",
  }),
};

export const SelectMultipleChoiceStyling = {
  menuList: (base: any) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "0px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    height: "300px",
    overflow: "hidden",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    color: "#fff",
    opacity: "0.9",
  }),
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    borderRadius: "7px",
    backgroundColor: "#161622",
    boxShadow: "0px 4px 28px -10px rgba(0, 0, 0, 0.25)",
    outline: "none",
    paddingLeft: "14px",
    paddingRight: "20px",
    paddingTop: "12px",
    paddingBottom: "12px",
    border: "none",
    color: "#000",
  }),
};

export const inputStyle = `px-6 py-4 w-full outline-none input-creategig`;

export const tw = createTw({
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
      fontFamily: {
        sans: ["Mirza", "cursive"],
        lato: ["Lato", "sans-serif"],
        tajwal: ["Tajawal", "sans-serif"],
        italiano: ["Italianno", "cursive"],
        tapestry: ["Tapestry", "cursive"],
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
        "soft-read": "#F02E5E",
        white: "#fff",
        golden: "rgba(254, 197, 118, 0.54)",
        bluen: "rgba(199, 216, 235, 0.40)",
        darken: "rgba(63, 63, 70, 0.83)",
        darkentwo: "rgba(183, 183, 151, 0.58)",
        bgSlate: "rgb(30 41 59)",
      },
    },
  },
});
