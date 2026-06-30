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
        // Darkened brand green — nav, footer, dark overlays (readability only)
        'drift-navy':       '#162C1D',
        // Exact logo gold — pixel-sampled from "Upstate" script
        'drift-gold':       '#E3AC32',
        // Hover/active gold — derived from logo gold
        'drift-gold-dark':  '#B68A28',
        // Exact logo cream — pixel-sampled from "DRIFT" wordmark
        'drift-cream':      '#E9D7B6',
        // Warm light section backgrounds (UI extension)
        'drift-mist':       '#F5EDE0',
        // Exact logo green — pixel-sampled from background (all 4 corners identical)
        'drift-forest':     '#285034',
        // Warm coral accent — energy and fun moments
        'drift-coral':      '#E8734A',
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
        marquee:          'marquee 30s linear infinite',
        'fade-up':        'fadeUp 0.6s ease-out forwards',
        'bounce-gentle':  'bounceGentle 2s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up':   'accordion-up 0.25s ease-out',
        'wave-slow':      'waveSlow 9s ease-in-out infinite',
        'wave-fast':      'waveFast 6s ease-in-out infinite',
        'shimmer-gold':   'shimmerGold 2.5s linear infinite',
        'float':          'float 6s ease-in-out infinite',
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
        waveSlow: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%':      { transform: 'translateX(-25%)' },
        },
        waveFast: {
          '0%, 100%': { transform: 'translateX(-15%)' },
          '50%':      { transform: 'translateX(10%)' },
        },
        shimmerGold: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        // Dark brand green overlay for hero images
        'hero-gradient':
          'linear-gradient(180deg, rgba(22,44,29,0.42) 0%, rgba(22,44,29,0.08) 40%, rgba(22,44,29,0.68) 100%)',
        'card-gradient':
          'linear-gradient(180deg, transparent 30%, rgba(22,44,29,0.95) 100%)',
        'gold-shimmer':
          'linear-gradient(135deg, #E3AC32 0%, #F5D068 50%, #E3AC32 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 0 1px rgba(227,172,50,0.3)',
        'gold':    '0 0 0 2px rgba(227,172,50,0.5)',
        'lift':    '0 20px 60px rgba(40,80,52,0.18)',
        'lift-lg': '0 30px 80px rgba(40,80,52,0.28)',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        expo:      'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
