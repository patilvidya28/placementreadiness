/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(245, 58%, 51%)',
        'primary-light': 'hsl(245, 58%, 60%)',
        'primary-dark': 'hsl(245, 58%, 42%)',
      },
    },
  },
  plugins: [],
}
