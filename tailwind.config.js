/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
    },
    screens: {
      xs: "360px",
      sm: "700px",
      md: "1060px"
    }
  },
  plugins: [],
}