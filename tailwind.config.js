/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          orange:        '#FF9900',
          'orange-dark': '#E47911',
          'orange-light':'#FFB347',
          dark:          '#131921',
          navy:          '#232F3E',
          slate:         '#37475A',
          gray:          '#485769',
          light:         '#EAEDED',
        },
        prime:  '#00A8E1',
        wins:   '#067D62',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite reverse',
        'spin-slow':    'spin 22s linear infinite',
        'spin-slower':  'spin 32s linear infinite reverse',
        'pulse-dot':    'pulseDot 1.5s ease-in-out infinite',
        'ticker':       'ticker 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1',   transform: 'scale(1)'   },
          '50%':     { opacity: '0.4', transform: 'scale(1.5)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'amazon-gradient': 'linear-gradient(135deg, #FF9900 0%, #E47911 60%, #c96a00 100%)',
        'dark-mesh':
          'radial-gradient(ellipse at 20% 50%, rgba(255,153,0,0.07) 0%, transparent 60%), ' +
          'radial-gradient(ellipse at 80% 20%, rgba(0,168,225,0.06) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
