/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#ffffff',
          dark: '#1a1816',
        },
        'secondary': {
          DEFAULT: '#f5f1eb',
          dark: '#2d2824',
        },
        'accent': '#8B4513',
        'accent-hover': '#6B3410',
        'accent-light': '#A0522D',
        'coffee-brown': {
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#e8ddd0',
          300: '#d4c4b0',
          400: '#b8a088',
          500: '#8B4513',
          600: '#6B3410',
          700: '#4a2410',
          800: '#2d1810',
          900: '#1a0f0a',
        },
        'text-primary': {
          DEFAULT: '#3d2817',
          dark: '#f5f1eb',
        },
        'text-secondary': {
          DEFAULT: '#6B4E3D',
          dark: '#d4c4b0',
        },
        'border': {
          DEFAULT: '#d4c4b0',
          dark: '#4a2410',
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}