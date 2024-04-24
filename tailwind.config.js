/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF6300",
        "orange-light": "#fb923c",
      },
      screens: {
        "lg-2": "1340px",
      },
    },
  },
  plugins: [],
};
