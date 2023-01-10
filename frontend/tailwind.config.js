/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        money: "url('/src/assets/plant.jpg')",
      },
    },
    fontFamily: {
      serif: ["Roboto Slab", "serif"],
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
