/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000', 
        gray: '#535366',
        blue: '#0071DC',
        fadeblue: "#f2f7f7",
        gradient: '#FF9680-#FCAC11'
      },
      backgroundImage: {
        "hero" : "url('/src/assets/images/hero-bg.jpg')",
        "about" : "url('/src/assets/images/about-bg.jpg')",
        "download" : "url('/src/assets/images/phones.jpg')",
        "detail":  "url('/src/assets/images/detail.png')",
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar" :{
          display: "none",
        },
        ".no-scrollbar" :{
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
      },
    };
    addUtilities(newUtilities)
  }
  ],
}

