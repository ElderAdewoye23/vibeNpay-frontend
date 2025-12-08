
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0000FF', 
          dark: '#1E40AF', 
          hero: '#F4F8FF', 
        },
        darkbg:{
          DEFAULT: '#36EBAF',
          thicker: '#66FECB '
        }
      },
    },
  },
  plugins: [],
}

