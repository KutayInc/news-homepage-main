/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(36, 100%, 99%)",
        grayishBlue: "hsl(233, 8%, 79%)",
        darkGrayishBlue: "hsl(236, 13%, 42%)",
        veryDarkBlue: "hsl(240, 100%, 5%)",
        softOrange: "hsl(35, 77%, 62%)",
        softRed: "hsl(5, 85%, 63%)",
        screenShadow: "hsla(0, 0%, 0%, 0.4)",
      },
    },
    fontFamily: {
      sans: "Inter",
    },
    letterSpacing: {
      widest: "0.3em",
    },
  },
  plugins: [],
};
