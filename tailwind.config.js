/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#441752',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          lg: '3rem',
        },
      },
    },
  },
  plugins: [],
};