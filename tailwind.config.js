/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef5fb',
          100: '#d8e8f5',
          500: '#1f5f91',
          700: '#123f63',
          900: '#08243a',
        },
        steel: '#5c6f7e',
        line: '#d9e4ec',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(8, 36, 58, 0.10)',
      },
    },
  },
  plugins: [],
};
