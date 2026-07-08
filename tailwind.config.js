/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        "navy-light": "#1e293b",
        "electric-blue": "#00d9ff",
        "blue-accent": "#0066ff",
        "purple-dark": "#7c3aed",
        "purple-light": "#a855f7",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        "gradient-blue": "linear-gradient(135deg, #0066ff, #00d9ff)",
        "gradient-purple": "linear-gradient(135deg, #7c3aed, #a855f7)",
      },
    },
  },
  plugins: [],
}
