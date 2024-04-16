/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39A803",
        disabled: "#78A363",
        pressed: "#2C8700",
        bgGradient: "#004710",
        heading: "#333333",
        bodyText: "#666666",
        surface: "#FEFFFF",
        accent: "#7B4B1D",
        muted: "#F4F4F4",
        gray: "#D9D9D9",
        brown: "#7B4B1D",
        black: "#292929",
        bgBox: '#DF9718',
        bgGray: '#F6F6F6',
        lightGray : '#C3C3C3'
      },
      screens: {},
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    fontWeight: {
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
  },
  plugins: [],
};
