/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      'main': ['Inter', 'sans-serif']
    },
    screens: {
      'desktop': '900px'
    },
    extend: {
      colors: {
        'main-font': '#272D38',
        'button': '#8EADD5',
        'span': '#667085',
      }
    },
  },
  plugins: [],
}

