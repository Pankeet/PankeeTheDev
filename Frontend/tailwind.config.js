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
      aptos : ['Aptos'] ,
      langar : ['Langar-Regular'] ,
      SF_Pro : ['SF Pro'],
      },
      width : {
        128 : '512px' ,
      },
      colors :{
          gray : {
            999 : '#070A0F',
            101 : '#DADADA'
          },
      },
    },
  },
  plugins: [],
}