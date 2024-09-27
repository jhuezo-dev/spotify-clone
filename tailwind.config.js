/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark': '#0f0f0f',
        'almost-light': '#F6F6F6',
        'button-bg': '#222222',
        'button-light-bg': '#FFFFFF'
      }
    },
  },
  plugins: [],
}

