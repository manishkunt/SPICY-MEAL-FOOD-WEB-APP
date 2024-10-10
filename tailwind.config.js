/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-text": "rgba(2, 6, 12, 0.6)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  
};
