/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F5FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FE',
          400: '#8195FE',
          500: '#5C7AFE',
          600: '#3C64FE',
          700: '#2C52FE',
          800: '#1F40FE',
          900: '#122EFE',
          950: '#0A15FE',
        },
        secondary: {
          50: '#FFF0F5', // Light Pink
          100: '#FFE0E7',
          200: '#FFC7D2',
          300: '#FFA5B4',
          400: '#FF8195',
          500: '#FF5C7A',
          600: '#FF3C64',
          700: '#FF2C52',
          800: '#FF1F40',
          900: '#FF122E',
          950: '#FF0A15',
        },
        tertiary: {
          50: '#F0FFF0', // Light Green
          100: '#E0FFE0',
          200: '#C7FFC7',
          300: '#A5FFA5',
          400: '#81FF81',
          500: '#5CFF5C',
          600: '#3CFF3C',
          700: '#2CFF2C',
          800: '#1FFF1F',
          900: '#12FF12',
          950: '#0AFF0A',
        },
      }
    },
  },
  daisyui: {
    themes: ['cupcake', 'dark']
  },
  plugins: [
    daisyui
  ],
}

