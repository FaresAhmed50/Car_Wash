/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      fontFamily: {
        nav: ['var(--font-nav)'], // Map the CSS variable to Tailwind's font utility
      },
    },
  },
  plugins: [],
}

