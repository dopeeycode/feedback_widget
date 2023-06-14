/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257e6',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
