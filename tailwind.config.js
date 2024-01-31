/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
     fontFamily: {
        "sans": ["Arial", "sans-serif"],
        "mono": ["Chivo Mono", "monospace"]
      },
      colors: {
        "black": "#343434",
        "yellow": "#fffa72",
        "blue": "#0f62fe",
        "lightblue": "#f4f8fe"
      }
    }
  },
  plugins: [],
}