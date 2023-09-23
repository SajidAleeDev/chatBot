/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulixee/hero/**/*.{js,ts,jsx,tsx,mdx}",
    "*",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        zero: { min: "0px", max: "599px" },
        mobile: { min: "600px", max: "899px" },
        uli: { min: "750px" },
        laptop: { min: "900px", max: "1199px" },

        lcd: { min: "1200px", max: "1399px" },
        tv: { min: "1400px", max: "1599px" },
        "4k": { min: "1600px" },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
