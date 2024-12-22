/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E6F6FF",
          200: "#BFE3FF",
          300: "#99D0FF",
          400: "#4DB0FF",
          500: "#008FFF",
          600: "#007FDF",
          700: "#0054A6",
          800: "#003F7F",
          900: "#002B59"
        },
        secondary: {
          100: "#FFF5E6",
          200: "#FFE6BF",
          300: "#FFD699",
          400: "#FFB84D",
          500: "#FF9900",
          600: "#E68A00",
          700: "#995C00",
          800: "#734500",
          900: "#4D2E00"
        }
      }
    }
  },
  plugins: []
};
