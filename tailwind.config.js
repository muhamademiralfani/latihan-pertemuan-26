/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      brightness: {
        10: '.1',
        20: '.2',
        30: '.3',
        40: '.4',
      },
    },
  },
  plugins: [],
};
