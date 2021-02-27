module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { custom: ['commissioner'], },
      colors: {
        'cyan-100': 'hsl(176, 50%, 47%)',
        'cyan-200': 'hsl(176, 72%, 28%)',
        darkgray: 'hsl(0, 0%, 48%)',
        link: 'hsl(228, 45%, 44%)',
      },
      zIndex: { '-10': '-10', },
      width: { 'card-mb': '87%', }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}