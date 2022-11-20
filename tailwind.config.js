/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        overlay1: '#00000012',
        overlay2: 'rgb(26, 25, 29)',
        bgcolor: 'rgb(26, 25, 29)',
      }
    },
  },
  plugins: [],
}