module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['commissioner'],
      },
      colors: {
        button: 'hsl(176, 50%, 47%)',
        buttonhover: 'hsl(176, 72%, 28%)',
        darkgray: 'hsl(0, 0%, 48%)',
      },
      zIndex: {
        '-10': '-10',
      },
      width: {
        'card-mb': '86%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}