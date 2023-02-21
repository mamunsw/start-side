/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary-one':'#4E9FFF',
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
