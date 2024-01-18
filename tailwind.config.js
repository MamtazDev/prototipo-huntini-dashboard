/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue"],
        cabinet: ['"Cabinet Grotesk"', "sans-serif"],
      },
      colors: {
        primary: "#F6F4F2",
        secondary: "#463D3C",
        brown: "#6B6463",
        lightBrown: "#CCC6B6",
        lightBrown2: "#F5F4F0",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
