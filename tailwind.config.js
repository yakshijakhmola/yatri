/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'White': '#ffffff',
        'Black': '#010606',
        'DarkColor': '#F5754E',
        'Lightcolor': '#FAF5F1',
        'MiddleColor': '',
        'MainHeadColor': '#010606',
        'ParaColor': '#757575',
      },
      FontFamily:{
        'MainFont': '"PT Sans", sans-serif;',
        'ParaFont': 'Raleway',
      },
      backgroundImage:{
        'Footerimage': "url('../../assets/footerbg.png')"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}