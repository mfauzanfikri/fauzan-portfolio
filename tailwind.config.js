/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        VT323: "VT323, sans-serif",
      },
      colors: {
        primary: "#0ea5e9",
        secondary: "#475569",
        dark: "#0f172a",
      },
      boxShadow: {
        nav: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
