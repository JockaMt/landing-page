module.exports = {
  theme: {
    extend: {
      keyframes: {
        flash: {
          '0%, 49.99%': { display: 'none' },
          '50%, 100%': { display: 'block' },
        },
      },
      animation: {
        flash: 'flash 1s infinite',
      },
    },
  },
}