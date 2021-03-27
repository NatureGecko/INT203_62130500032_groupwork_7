const colors = require('tailwindcss/colors')
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        amber:{
          c600:'#D97706',
          c800:'#92400E'
        },
        laxury:{
          blue :'#3B71CE',
          yellowlight: '#EFE692',
          bluedark:'#13223E'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
