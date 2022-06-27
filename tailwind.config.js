module.exports = {
  purge: {
    node: 'layers',
    content: ['./public/**/*.html',
      "./node_modules/flowbite/**/*.js"
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      color: {}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}