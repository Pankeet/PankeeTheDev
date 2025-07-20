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
            101 : '#DADADA',
            200 : "#F3F4F6",
          },
          purple : {
            300 : "#e0e7ff",
            600 : "#5046E4",
            700 : '#631FF0',
          }
      },
    },
  },
  plugins: [],
}