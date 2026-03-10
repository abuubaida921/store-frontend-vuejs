/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-blue': '#1e3a5f',
        'banner-orange': '#f59e0b',
        'banner-yellow': '#fbbf24',
      },
    },
  },
  plugins: [],
}
