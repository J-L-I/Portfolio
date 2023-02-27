/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif']
      }
    },
  },
  plugins: [],
}
