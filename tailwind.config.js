/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
  "./index.html",
  "./src/**/*.{ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'jura' : ['Jura, sans-serif'],
      'lexend': ['Lexend, sans-serif'],      
    },
    extend: {
      colors: {
        orange: "#F05941",
        whiteTxt: "#ECCCC7",
        orangeBold: "#F3482D",
        buttonTxt: "#FFFFFF",
        orangeWeak: "#7A2A1D",
        darkTXT: "#473735",
        darkBG: "#352222",
        borderOrange: "#B72B2B",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
  ],
}