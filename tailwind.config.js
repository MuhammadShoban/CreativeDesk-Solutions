/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // xs breakpoint for very small phones (< 475px) — used for button stacking, etc.
    screens: {
      'xs':  '475px',
      'sm':  '640px',
      'md':  '768px',
      'lg':  '1024px',
      'xl':  '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        inter:   ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'float-delayed':  'float 7s ease-in-out infinite 2s',
        'pulse-slow':     'pulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink':          'blink 1.4s ease-in-out infinite',
        'grow-bar':       'growBar 1.2s ease-out forwards',
        'fade-up':        'fadeUp 0.6s ease-out forwards',
        'modal-in':       'modalIn 0.3s cubic-bezier(0.175,0.885,0.32,1.275) forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.3' },
        },
        growBar: {
          from: { transform: 'scaleY(0)' },
          to:   { transform: 'scaleY(1)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        modalIn: {
          from: { opacity: '0', transform: 'scale(0.93)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'brand-sm':  '0 4px 14px -3px rgba(109,40,217,0.15)',
        'brand-md':  '0 10px 30px -8px rgba(91,33,182,0.18)',
        'brand-lg':  '0 20px 45px -12px rgba(91,33,182,0.22)',
        'glow':      '0 0 20px rgba(139,92,246,0.35)',
        'glow-lg':   '0 0 40px rgba(139,92,246,0.25)',
        'card':      '0 8px 28px -6px rgba(91,33,182,0.08), 0 1px 4px rgba(91,33,182,0.04)',
        'card-hover':'0 18px 40px -10px rgba(91,33,182,0.16)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% -20%, #f5f3ff 0%, #faf5ff 50%, #ffffff 100%)',
        'brand-gradient': 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
        'brand-gradient-r': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 60%, #5b21b6 100%)',
        'text-gradient': 'linear-gradient(135deg, #5b21b6 0%, #8b5cf6 60%, #c084fc 100%)',
      },
      scale: {
        '108': '1.08',
      },
    },
  },
  plugins: [
    // scrollbar-hide utility — used on horizontally scrolling filter tabs on mobile
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          'display': 'none',
        },
      });
    },
  ],
}
