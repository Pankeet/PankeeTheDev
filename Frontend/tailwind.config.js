/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
      armies : ['Armies Display'] ,
      },
      width : {
        128 : '512px' ,
      },
      colors :{
          gray : {
            101 : '#DADADA'
          },
      },
    },
  },
  plugins: [],
}