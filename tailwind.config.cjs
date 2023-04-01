/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': [your_main_font],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        c3green: '#387728',
        c3blue: '#003567',
        c3grey: '#f6f4f4'
      },
    },
  },
  plugins: [
    // add the class debug-screens to your <body> app.html tag enable it
    require('tailwindcss-debug-screens'),
  ],
  safelist: [
    // used in form validation
    'border-red-500',
    // message component
    'bg-blue-500', 'border-blue-400', 'bg-blue-100', 'text-blue-700',
    'bg-green-500', 'border-green-400', 'bg-green-100', 'text-green-700',
    'bg-orange-500', 'border-orange-400', 'bg-orange-100', 'text-orange-700',
    'bg-red-500', 'border-red-400', 'bg-red-100', 'text-red-700',
    // button no loading and loading
    'disabled:opacity-25',
  ],
}
