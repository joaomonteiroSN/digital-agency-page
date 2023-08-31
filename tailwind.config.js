/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      'main': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'main-font': '#272D38',
        'button': '#8EADD5'
      }
    },
  },
  plugins: [],
}

