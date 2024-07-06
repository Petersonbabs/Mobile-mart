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
    },
    extend: {
      width: {
        '95vw': '95vw',
        'max': '1200px',
        'fit': 'fit-content'
      },
      borderWidth: {
        '1': '1px', 
      },
      borderColor: {
        green: 'var(--primary-green-300)', 
      },
    },
  },
  plugins: [],
  
}

