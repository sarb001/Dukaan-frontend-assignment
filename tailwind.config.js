
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        small : '670px',
        tablet : '960px',
        desktop : '1248px'
      }
    },
  },
  plugins: [
  ],
}

