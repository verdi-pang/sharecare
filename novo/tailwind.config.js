/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/img/hero-bkg.jpg')",
        hero1: "url('/img/hero-bkg-1.svg')",
        "hero-2": "url('/img/hero-bkg-2.svg')",
        "hero-3": "url('/img/hero-bkg-3.svg')",
        "hero-4": "url('/img/hero-bkg-4.svg')",
        welcDesc: "url('/img/welcomeDesc-bkg.svg')",
      },
      colors: {
        primary: "#1A1C54",
        secondary: "#353A8C",
        tert: "#F2C301",
        neutral: "#292D73",
      },
      boxShadow: {
        primary: "4px 4px 0 0 rgba(26,35,126,1)",
        yellow: "4px 4px 0 0 rgba(255,202,40,1)",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), nextui()],
};
