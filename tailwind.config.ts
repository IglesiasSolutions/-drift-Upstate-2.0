import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'drift-navy':   '#0D1B2A',
        'drift-gold':   '#C9A84C',
        'drift-gold-dark': '#A8893E',
        'drift-mist':   '#E8EFF5',
        'drift-forest': '#2D5016',
        'drift-coral':  '#E8734A',
      },
      fontFamily: {
        playfair:   ['var(--font-playfair)', 'Georgia', 'serif'],
        inter:      ['var(--font-inter)', 'system-ui', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        superwide: '0.2em',
      },
      animation: {
        marquee:   'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up':   'accordion-up 0.25s ease-out',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(180deg, rgba(13,27,42,0.5) 0%, rgba(13,27,42,0.1) 40%, rgba(13,27,42,0.75) 100%)',
        'card-gradient':
          'linear-gradient(180deg, transparent 30%, rgba(13,27,42,0.95) 100%)',
        'gold-shimmer':
          'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #C9A84C 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 0 1px rgba(201,168,76,0.3)',
        'gold':    '0 0 0 2px rgba(201,168,76,0.5)',
        'lift':    '0 20px 60px rgba(13,27,42,0.15)',
        'lift-lg': '0 30px 80px rgba(13,27,42,0.25)',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
