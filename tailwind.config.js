module.exports = {
  purge: ['.src/pages/**/*.{js,ts,jsx,tsx}', '.src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-banner': "url('/banner.jpg')"
      })
    },
    fontFamily: {
      'inc': ['Inconsolata', 'monospace']
    },
    screens: {
      'mob': {'max': '639px'}
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
