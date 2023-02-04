/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      'fira': ['Fira Sans', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
