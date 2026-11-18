/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ayora: {
          ivory: '#F8F4EC',
          beige: '#EEE7DB',
          'beige-dark': '#E2D9CB',
          gold: '#C49A50',
          'gold-deep': '#A8782D',
          'gold-light': '#DDBB75',
          'gold-soft': '#F4EDE0',
          charcoal: '#20221F',
          dark: '#20231F',
          'dark-deep': '#171916',
          'dark-surface': '#2A2E29',
          muted: '#77736C',
          'muted-light': '#9B968E',
          border: '#E3DACD',
          'border-dark': '#383D36',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Manrope"', '"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(32, 34, 31, 0.08)',
        'luxury-lg': '0 30px 60px -20px rgba(32, 34, 31, 0.12)',
        'gold-glow': '0 0 25px rgba(196, 154, 80, 0.25)',
      },
      letterSpacing: {
        'luxury': '0.15em',
        'luxury-widest': '0.25em',
      }
    },
  },
  plugins: [],
}
