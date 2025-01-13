/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#B88E2F',
        head_bg: '#FFF3E3',
        product_bg: '#F4F5F7',
        discount_bg: '#E97171',
        no_discount_bg: '#2EC1AC',
      },
    },
  },
  plugins: [],
}

