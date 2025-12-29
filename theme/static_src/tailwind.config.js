/** @type {import('tailwindcss').Config} */
module.exports = {

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
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
