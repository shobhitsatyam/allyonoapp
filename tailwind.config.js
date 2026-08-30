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
          dark: '#050505',
          secondary: '#101010',
          card: '#161616',
          cardHover: '#1c1c1c',
          lightCard: '#FFFFFF',
        },
        gold: {
          DEFAULT: '#F5B928',
          bright: '#FFD35A',
          amber: '#E5A510',
          dark: '#B8820A',
          light: '#FFF0C2',
          glow: 'rgba(245, 185, 40, 0.45)',
          border: 'rgba(245, 185, 40, 0.35)',
          borderSoft: 'rgba(245, 185, 40, 0.20)',
          badge: '#F39C12',
        },
        muted: {
          DEFAULT: '#B8B8B8',
          dark: '#7A7A7A',
          border: '#2A2A2A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(245, 185, 40, 0.2)',
        'gold-md': '0 0 20px rgba(245, 185, 40, 0.3)',
        'gold-lg': '0 0 35px rgba(245, 185, 40, 0.4)',
        'card-dark': '0 8px 30px rgba(0, 0, 0, 0.8)',
        'card-light': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD35A 0%, #F5B928 50%, #D4900C 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #FFE082 0%, #FFC933 50%, #E5A510 100%)',
        'card-gradient': 'linear-gradient(180deg, #181818 0%, #0F0F0F 100%)',
        'hero-gradient': 'radial-gradient(circle at 70% 30%, rgba(245, 185, 40, 0.15) 0%, rgba(5, 5, 5, 0) 70%)',
        'tab-gold': 'linear-gradient(180deg, #FFD35A 0%, #F5B928 100%)',
      }
    },
  },
  plugins: [],
}
