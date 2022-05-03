module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        pattern: 'url("./assets/images/pattern-bg.png")',
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 59%)",
        "very-dark-grey": "hsl(0, 0%, 17%)",
      },
    },
  },
  plugins: [],
};
