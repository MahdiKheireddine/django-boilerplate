/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode via class
  darkMode: 'class',

  // Specify all paths to scan for Tailwind classes
  content: [

    // Templates within theme app
    '../templates/**/*.html',

    // Django templates in main project
    '../../templates/**/*.html',

    // Django templates inside any app
    '../../**/templates/**/*.html',

    // Tailwind CSS source files
    './src/**/*.css',
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('daisyui'),
  ],
  
  // DaisyUI configuration
  daisyui: {
    themes: ['light', 'dark'], // enable light & dark themes
    darkTheme: 'dark',         // default darkTheme
  },
};
