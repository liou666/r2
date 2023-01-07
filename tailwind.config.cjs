/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  console.log(variableName)
  return ({ opacityValue }) => {
    if (opacityValue)
      return `rgba(${variableName}, ${opacityValue})`

    return `rgb(${variableName})`
  }
}

module.exports = {
  // mode: 'jit',
  content: {
    relative: true,
    files: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
  },
  theme: {
    extend: {
      backgroundColor: {
        // utilities like `bg-base` and `bg-primary`
        'base': withOpacity('var(--color-base)'),
        'off-base': withOpacity('var(--color-off-base)'),
        'primary': withOpacity('var(--color-primary)'),
        'secondary': withOpacity('var(--color-secondary)'),
        'muted': withOpacity('var(--color-text-muted)'),
      },
      textColor: {
        // like `text-base` and `text-primary`
        'base': withOpacity('var(--color-text-base)'),
        'muted': withOpacity('var(--color-text-muted)'),
        'muted-hover': withOpacity('var(--color-text-muted-hover)'),
        'primary': withOpacity('var(--color-primary)'),
        'secondary': withOpacity('var(--color-secondary)'),
      },
      flexGrow: {
        2: '2',
        3: '3',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    },

  },
  variants: {
    extend: {
      // backgroundColor: ['group-hover'],
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },

}
