/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'bungee': ['Bungee', 'cursive'],
      },
      screens: {
        'xs': '475px',
        'xxs': '400px',
      },
      perspective: {
        '1200': '1200px',
      },
      rotate: {
        'x-15': 'rotateX(15deg)',
        'y-8': 'rotateY(-8deg)',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.perspective-1200': {
          perspective: '1200px',
        },
        '.rotate-x-15': {
          transform: 'rotateX(15deg)',
        },
        '.-rotate-y-8': {
          transform: 'rotateY(-8deg)',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
      })
    }
  ],
}