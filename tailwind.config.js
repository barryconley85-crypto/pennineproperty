/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef1f7',
          100: '#d5dcec',
          200: '#aab9d9',
          300: '#7f96c6',
          400: '#5473b3',
          500: '#2950a0',
          600: '#1e3d7a',
          700: '#162d5a',
          800: '#1B2A4A',
          900: '#0d1a30',
          950: '#060d18',
        },
        gold: {
          50:  '#fdf8ef',
          100: '#f9edcf',
          200: '#f3dba0',
          300: '#ecc870',
          400: '#C9A96E',
          500: '#b8924a',
          600: '#9a7638',
          700: '#7c5c2a',
          800: '#5e441e',
          900: '#3f2d12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(201, 169, 110, 0.3)',
        'navy': '0 4px 24px rgba(27, 42, 74, 0.2)',
        'card': '0 8px 40px rgba(27, 42, 74, 0.08)',
        'card-hover': '0 20px 60px rgba(27, 42, 74, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

