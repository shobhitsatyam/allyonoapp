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
          dark: '#f5f5f4',
          secondary: '#f8f8f6',
          card: '#ffffff',
          cardHover: '#f7f7f5',
          lightCard: '#ffffff',
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
          DEFAULT: '#64748b',
          dark: '#475569',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(245, 185, 40, 0.18)',
        'gold-md': '0 0 20px rgba(245, 185, 40, 0.22)',
        'gold-lg': '0 0 35px rgba(245, 185, 40, 0.28)',
        'card-dark': '0 10px 30px rgba(15, 23, 42, 0.08)',
        'card-light': '0 4px 20px rgba(15, 23, 42, 0.06)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD35A 0%, #F5B928 50%, #D4900C 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #FFE082 0%, #FFC933 50%, #E5A510 100%)',
        'card-gradient': 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        'hero-gradient': 'radial-gradient(circle at 70% 30%, rgba(245, 185, 40, 0.16) 0%, rgba(245, 245, 244, 0) 70%)',
        'tab-gold': 'linear-gradient(180deg, #FFD35A 0%, #F5B928 100%)',
      }
    },
  },
  plugins: [],
}
