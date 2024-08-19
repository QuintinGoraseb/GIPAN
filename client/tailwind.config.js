/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "/*eslint-env node*/",
  ],
  theme: {

    aspectRatio: { // defaults to {}
      'none': 0,
      'square': [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9],  // or 16 / 9
      '4/3': [4, 3],    // or 4 / 3
      '21/9': [21, 9],  // or 21 / 9
    },

    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {

      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
        custom3: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        custom4: '0px 1px 0px rgba(17, 17, 26, 0.1)',
        custom5: '0px 25px 20px -20px rgba(0, 0, 0, 0.45)',
        custom6: 'linear-gradient rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5))',
        custom7: '0px 2px 5px -1px rgba(50, 50, 93, 0.25),  0px 1px 3px -1px rgba(0, 0, 0, 0.3)',
        custom8: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
      },

      backgroundImage: {
        'ihero': "url('/img/hero/oupa1.jpg')",
        'banner': "url('/img/hero/glass.jpg')",
      },

      colors: {
        'green': '#91BE55',
        'eerie': 'hsl(0, 0%, 13%)',
        'brown': '#aca297',
      },

    },
  },
  variants: {
    aspectRatio: ['responsive'], // defaults to ['responsive']
  },

  plugins: [require('tailwindcss-aspect-ratio')],
}