/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        moss: '#355b3f',
        field: '#6c9a4d',
        wheat: '#e6c878',
        soil: '#8f5b34',
        mist: '#eef4e8',
        night: '#14281d'
      },
      boxShadow: {
        card: '0 20px 60px rgba(20, 40, 29, 0.12)'
      },
      fontFamily: {
        display: ['Sora', 'Segoe UI', 'sans-serif'],
        body: ['Manrope', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
}
