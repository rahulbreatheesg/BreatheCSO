/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b1410',
          soft: '#26322a',
          muted: '#4f5b53',
        },
        moss: {
          50: '#f1faf3',
          100: '#dbf3e0',
          200: '#b6e6c1',
          300: '#84d29c',
          400: '#52b873',
          500: '#2f9c54',
          600: '#1f8047',
          700: '#196439',
          800: '#154e2e',
          900: '#0e3722',
        },
        mint: {
          50: '#f3faf6',
          100: '#e6f4ec',
          200: '#cfe9d8',
        },
        cream: '#ffffff',
        bone: '#f4f7f3',
        forest: '#0e3722',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(14,55,34,0.04), 0 8px 24px rgba(14,55,34,0.06)',
        lift: '0 2px 4px rgba(14,55,34,0.05), 0 18px 40px rgba(14,55,34,0.08)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        slowSpin: 'slowSpin 30s linear infinite',
      },
    },
  },
  plugins: [],
}
