// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FCC200',
        'accent-yellow': '#FFE66D',
        'accent-pink': '#FFB6C1',
        'accent-green': '#00796B',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Or any premium serif font
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}