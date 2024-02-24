/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif']
      },
      backgroundColor: {
        base: '#EEEDEB',
        secondary: '#E0CCBE',
        primary: '#3C3633',
      },
      textColor: {

        secondary: '#756355',
        primary: '#3C3633',
      }
    },
  },
  plugins: [],
}

