/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brown': {
          100: '#F5E6D3',
          300: '#DBC1A7',
          500: '#A67C52',
          800: '#6B4423',
        },
        'cream': {
          100: '#FFFAF0',
          200: '#FDF5E6',
        }
      },
      boxShadow: {
        'book': '0 0 20px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};