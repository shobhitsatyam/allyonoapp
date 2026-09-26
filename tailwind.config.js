/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#ffffff',
          secondary: '#ffffff',
          card: '#ffffff',
          cardHover: '#ffffff',
          lightCard: '#ffffff',
        },
        gold: {
          DEFAULT: '#1AFF00',
          bright: '#1AFF00',
          amber: '#1AFF00',
          dark: '#1AFF00',
          light: '#1AFF00',
          glow: 'rgba(26, 255, 0, 0.45)',
          border: 'rgba(26, 255, 0, 0.35)',
          borderSoft: 'rgba(26, 255, 0, 0.20)',
          badge: '#1AFF00',
        },
        muted: {
          DEFAULT: '#000000',
          dark: '#000000',
          border: 'rgba(0, 0, 0, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(26, 255, 0, 0.18)',
        'gold-md': '0 0 20px rgba(26, 255, 0, 0.22)',
        'gold-lg': '0 0 35px rgba(26, 255, 0, 0.28)',
        'card-dark': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'card-light': '0 4px 20px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #1AFF00 0%, #1AFF00 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #1AFF00 0%, #1AFF00 100%)',
        'card-gradient': 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)',
        'hero-gradient': 'radial-gradient(circle at 70% 30%, rgba(26, 255, 0, 0.16) 0%, rgba(255, 255, 255, 0) 70%)',
        'tab-gold': 'linear-gradient(180deg, #1AFF00 0%, #1AFF00 100%)',
      }
    },
  },
  plugins: [],
}
