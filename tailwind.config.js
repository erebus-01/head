/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000',
      'background-primary': '#fff',
      'text-primary': '#161616',
      'background-secondary': '#f1f1f1',
      'text-secondary': '#757575',
      'background-inverse': '#161616',
      'inverse': '#fff',
      'interactive': '#e01e3c',
    },
    fontFamily: {
      'font-primary': ['neuzeit-grotesk','Helvetica Neue','Helvetica','sans-serif'],
      'font-secondary': ['alternate-gothic-no-2-d','Helvetica Neue','Helvetica','sans-serif'],
    }
  },
  plugins: [],
}