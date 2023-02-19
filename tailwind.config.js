/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Arial', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      'sm': '360px',
      'md': '720px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'custom-black': '#333333',
        'custom-gray': '#808080',
      }
    },
  },
  plugins: [],
}