module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'inter': ['inter'],
      'inter-semi-bold': ['inter-semi-bold'],
      'inter-bold': ['inter-bold'],
      'inter-light': ['inter-light'],
      'inter-medium': ['inter-medium'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/line-clamp')
],
};
