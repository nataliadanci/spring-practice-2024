import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "light-gray":"#9b9b9b"
      },
      fontSize:{
        "xxs": "10px",
        "16": "16px",
        "4.5": "40px"
      },
      lineHeight:{
        "115": "1.15",
      },
      transitionProperty: {
        width: "width",
      },
      fontSize1:{
        "13":"13px"
      },
      height:{
        "blog-card": "452px"
      },
      spacing:{
        "18":"4.5rem"
      },
      borderWidth: {
        "1.5":"1.5px"
      },
    },
  },
  plugins: [],
};
export default config;
