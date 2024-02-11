/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        VT323: "VT323, sans-serif",
      },
      colors: {
        primary: "#0ea5e9",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
