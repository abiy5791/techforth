export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'primary-soft': '#60a5fa',
        'primary-dark': '#1d4ed8',
        accent: '#22d3ee',
        'background-light': '#f3f4f6',
        'background-dark': '#020617',
        'surface-dark': '#0b1120',
        'card-dark': '#020617',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #3f3f46 1px, transparent 1px), linear-gradient(to bottom, #3f3f46 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
