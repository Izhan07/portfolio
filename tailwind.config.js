/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        
        'purple-pink': ['#9b5de5', '#f15bb5'],
      }),
    },
  },
  plugins: [
   
  ],
}