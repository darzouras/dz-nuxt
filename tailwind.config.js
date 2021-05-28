module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#e8eddf',
      purple: {
        100: '#221e22',
        50: '#31263e',
        25: '#44355b',
      },
      green: {
        100: '#0b987c',
        50: '#1fc19e',
        25: '#44ddae',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
