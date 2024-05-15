/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        libTheme: {
          primary: "#003724",
          secondary: "#F5F5DC",
          accent: "#00372490",

          // neutral: "#191621",
          // "base-100": "#36241e",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
