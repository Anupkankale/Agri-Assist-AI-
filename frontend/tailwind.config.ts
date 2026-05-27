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
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      colors: {
        moss: {
          DEFAULT: '#355b3f',
          light: '#4a7c56',
          dark: '#26422d',
        },
        field: '#6c9a4d',
        wheat: {
          DEFAULT: '#e6c878',
          light: '#f0d9a0',
          dark: '#c4a44d',
        },
        soil: '#8f5b34',
        mist: '#eef4e8',
        night: {
          DEFAULT: '#14281d',
          deep: '#0a1410',
          elevated: '#1c3426',
        },
        apple: {
          glass: 'rgba(255, 255, 255, 0.08)',
          'glass-thick': 'rgba(255, 255, 255, 0.16)',
          'glass-border': 'rgba(255, 255, 255, 0.12)',
          text: '#ffffff',
          'text-muted': 'rgba(255, 255, 255, 0.6)'
        }
      },
      boxShadow: {
        card: '0 20px 60px rgba(0, 0, 0, 0.2)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
        'glass-hover': '0 12px 48px 0 rgba(0, 0, 0, 0.5)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      },
      borderRadius: {
        'apple-xl': '1.5rem',
        'apple-2xl': '2.5rem',
        'apple-3xl': '3.5rem',
      },
      fontFamily: {
        display: ['Poppins', 'SF Pro Display', 'Sora', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'SF Pro Text', 'Manrope', 'system-ui', 'sans-serif']
      },
      transitionTimingFunction: {
        'apple-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    }
  },
  plugins: []
}
