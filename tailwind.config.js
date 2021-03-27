module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        amber : {
          c600 : '#D97706',
          c800 : '#92400E'
        }
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
