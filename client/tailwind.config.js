/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#435334",
        secondary: "#9EB384",
        backgroundGray: "#DBDBDB",
        kakao: "#FAE100",
      },
      textColor: {
        primary: "#435334",
        secondary: "#9EB384",
        black: "#111111",
      },
      outlineColor: {
        primary: "#435334",
        secondary: "#9EB384",
      },
      borderColor: {
        primary: "#435334",
        secondary: "#9EB384",
      },
    },
  },
  plugins: [],
};
