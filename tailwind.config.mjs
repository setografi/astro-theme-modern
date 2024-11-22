/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      // Mobile-first breakpoints
      xs: '375px', // Extra small devices
      sm: '576px', // Small devices
      md: '768px', // Medium devices (tablets)
      lg: '992px', // Large devices (desktops)
      xl: '1200px', // Extra large devices
      '2xl': '1440px', // Full HD and above
    },
    extend: {
      colors: {
        blue: {
          100: '#7b97b0', // Light tones
          200: '#8ba4ba',
          300: '#9cb1c4',
          400: '#acbece',
          500: '#bdcbd7',
          600: '#496373', // Dark tones
          700: '#40596c',
          800: '#354c5d',
          900: '#2a3e4e',
        },
        green: {
          100: '#359974', // Light tones
          200: '#4ea686',
          300: '#68b297',
          400: '#81bfa8',
          500: '#9accba',
          600: '#0b5f42', // Dark tones
          700: '#0a5338',
          800: '#09442e',
          900: '#073524',
        },
        neutral: {
          100: '#f3f3f3', // Light tones
          200: '#f5f5f5',
          300: '#f6f6f6',
          400: '#f8f8f8',
          500: '#f9f9f9',
          600: '#212121', // Dark tones
          700: '#1e1e1e',
          800: '#1a1a1a',
          900: '#161616',
        },
        accent: {
          orange: {
            100: '#FFE5DC', // Warna paling terang
            200: '#FFC4A8',
            300: '#FFA375',
            400: '#FF8A4D',
            500: '#E9641A', // Warna asli
            600: '#CC5010',
            700: '#AF3C06',
            800: '#932A00',
            900: '#771A00', // Warna paling gelap
          },
        },
      },
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
        nunito: ['"Nunito"', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
