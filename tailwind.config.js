/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // Angular templates and TS files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], // DaisyUI plugin
  daisyui: {
    themes: ['light', 'dark'], // optional
  },
};
