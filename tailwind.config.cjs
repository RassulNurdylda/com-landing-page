/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-blue": "#6C63FF",
        "dark-word": "#1E1E1E",
        "style": "#333745",
        "gray-s": "#9A9EA6",
      },
    },
  },
  plugins: [],
};
