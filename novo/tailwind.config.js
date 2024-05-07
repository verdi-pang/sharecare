/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero': "url('/img/hero-bkg.jpg')",
      },
      colors: {
        primary: '#025E73',
        secondary: '#011F26',
        tertiary: '#F2A71B',
        neutral: '#BFB78F',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

