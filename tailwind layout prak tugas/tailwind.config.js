/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#F88F24',
      },
      fontFamily: {
        sans: ['poppins','sans-serif'],
      }
    },
  },
  plugins: [],
}

