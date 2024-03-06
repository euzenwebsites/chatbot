/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'purple': '#b56fbb',
        'royal-purple':'#56256e',
        'grey':'#515151',
        'lightgrey':'#a3a3a3',
      },
      backgroundImage: {
        'hero-pattern': "url('/public/images/pattern.png')",
      }
    },
  },
  plugins: [],
};
