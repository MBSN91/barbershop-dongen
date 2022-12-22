/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,astro,css}"],
  theme: {
    extend: {

      fontFamily: {
        'title': ['"Oswald"','sans-serif'],
        'body': ['"Open Sans"','sans-serif'],
      },

      colors: {
        'primary':'#dca47d',
        'secondary':'#555555',
        'bg-primary':'#fafafa',
        'bg-secondary':'#fff8f1',
      }
      
    },
  },
  plugins: [],
}
