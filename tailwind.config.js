/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-default': '#040C18',
        'color-footer ': '#031B34',
        'color-blog': '#042c54',
        'color-text': '#81AFDD',
        'subtext': '#FF8A71',
      },
      backgroundColor:{
        'default': '#040C18',
        'footer ': '#031B34',
        'blog': '#042c54',
        'text': '#81AFDD',
        'subtext': '#FF8A71',
      }
    },
  },
  plugins: [],
}