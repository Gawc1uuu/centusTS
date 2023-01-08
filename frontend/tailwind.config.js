/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        money: "url('/src/assets/plant.jpg')",
      },
    },
  },
  plugins: [],
};
