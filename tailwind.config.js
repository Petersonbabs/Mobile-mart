/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors :{
      primary: {
        300: 'var(--primary-green-300)',
        400: "var(--primary-green-400)"
      },
      white: {
        pure: '#fff'
      },
      gray: {
        primary: 'rgba(74, 74, 74, 0.1)'
      },
      red: {
        primary : 'red'
      }
    },
    extend: {
      width: {
        '95vw': '95vw',
        '90vw' : '90vw',
        'fit': 'fit-content'
      },
      borderWidth: {
        '1': '1px', 
      },
      borderColor: {
        green: 'var(--primary-green-300)', 
      },

      screens: {
        'xsm' : '481px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
  
}

