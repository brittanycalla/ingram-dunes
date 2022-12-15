/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'accent': '#B1CF5F',
        'dark': '#143D22',
        'aqua': '#73E2A7',
      },
      height: {
        '5vh': '5vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '60vh': '60vh',
        '75vh': '75vh',
        '80vh': '80vh',
      }
    }
  },
  plugins: [],
}
