/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)', // Dark Blue (Dark Mode Elements)
        'midnight-blue': 'hsl(207, 26%, 17%)', // Very Dark Blue (Dark Mode Background)
        'very-dark-blue': 'hsl(200, 15%, 8%)', // Very Dark Blue (Light Mode Text)
        'dark-gray-input': 'hsl(0, 0%, 52%)', // Dark Gray (Light Mode Input)
        'very-light-gray': 'hsl(0, 0%, 98%)', // Very Light Gray (Light Mode Background)
        white: 'hsl(0, 0%, 100%)', // White (Dark Mode Text & Light Mode Elements)
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
