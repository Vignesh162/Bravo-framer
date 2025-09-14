/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"], // Added Inter font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Added for text gradient support
        'gradient-text': 'linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      backgroundClip: {
        'text': 'text', // Added background-clip utility
      },
    },
  },
  plugins: [],
};