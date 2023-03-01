/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      secondary: '#767676',
      accent: '#f7f7f7',
      sale: '#ed0000',
      iconHover: '#333',
      borderLight: '#e7e7e7',
      borderDark: '#929292',
      background: '#f5f5f5',
      overlayDark: '#0009',
      overlayWhite: '#fff9',
      error: '#e22c35',
      errorLight: '#fbe9ea',
      success: '#1e874a',
      info: '#1f6cfe',
      yellow: '#fcf113',
      disabled: '#ccc',
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['Noto Serif', 'serif'],
    },
    extend: {
      transitionDuration: {
        DEFAULT: '400ms',
      },
      boxShadow: {
        deeph0: '0px 1px 0px #EFEFEF',
        deeph1:
          '0px 0px 1px rgba(0, 0, 0, 0.25), 0px 1px 2px rgba(0, 0, 0, 0.05)',
        deeph2: '0px 7px 18px rgba(0, 0, 0, 0.03)',
        deeph3: '0px 14px 38px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
