/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#9932CCFF',
        dark: 'rgb(17, 17, 17)'
      },
    },
  },
  plugins: [],
}

