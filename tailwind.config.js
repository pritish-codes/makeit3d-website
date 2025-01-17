/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#F5F5F5',
        accent: '#1D3557',
        text: '#333333',
        gold: '#FFC107',
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