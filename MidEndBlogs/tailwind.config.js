/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00a898",
        "active-background": "#d9f2f0",
        "active-text": "#148376",
      },
    },
  },
  plugins: [],
};
