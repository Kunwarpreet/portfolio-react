/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      para: ['Nunito', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

