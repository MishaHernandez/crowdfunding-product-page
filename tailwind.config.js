module.exports = {
  purge: {
    content: ['./public/**/*.html', './public/**/*.js']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
      },
      maxWidth: {
        header: '1155px',
        main: '730px',
        success: '540px',
      },
      fontFamily: {
        custom: ['commissioner'],
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
      colors: {
        'cyan-100': 'hsl(176, 50%, 47%)',
        'cyan-200': 'hsl(176, 72%, 28%)',
        darkgray: 'hsl(0, 0%, 48%)',
        link: 'hsl(228, 45%, 44%)',
      },
      zIndex: {
        '-10': '-10',
      },
      width: {
        'card-mb': '87%',
      },
      height: {
        94: '22rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}