/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Make sure to include all relevant file types for your React project
    './index.html',               // Include the HTML entry point
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],   // Add DaisyUI plugin
};
