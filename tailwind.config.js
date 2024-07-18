/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#1D4666",
        "midnight-white": "#E8F4FF",
        "happy-gray": "#F0F0F0",
        "midnight-light": "#114B77",
        "midnight-lighter": "#0A5388",
      },
      borderRadius: {
        large: "25px",
      },
      fontFamily: {
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
