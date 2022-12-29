/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b51e6',
        secondary: '#f29913',
        'primary-text': '#1e293b',
        'secondary-text': '#475569',
      },
      fontFamily: {
        sans: ['"Public Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
