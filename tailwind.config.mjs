/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          500: '#a855f7',
          600: '#7c3aed',
          700: '#5b21b6',
          800: '#2e1065'
        },
        accent: {
          500: '#c084fc',
          600: '#a855f7',
          700: '#7e22ce'
        },
        cyan: {
          500: '#fbbf24',
          600: '#f59e0b'
        }
      },
      backgroundImage: {
        'burgundy-gradient':
          'linear-gradient(140deg, rgba(10,10,15,0.95), rgba(88,28,135,0.92))'
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0,0,0,0.55)'
      }
    }
  },
  plugins: []
};


