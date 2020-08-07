const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./index.html",
      "./src/**/*.vue",
      "./src/**/*.js"
      // etc.
    ]
  },
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#FEFEFE",
          100: "#FEFEFE",
          200: "#FCFCFC",
          300: "#FAFAFA",
          400: "#F7F7F7",
          500: "#F3F3F3",
          600: "#DBDBDB",
          700: "#929292",
          800: "#6D6D6D",
          900: "#494949"
        },
        pink: {
          50: "#FDF4F6",
          100: "#FBEAED",
          200: "#F5CAD2",
          300: "#EEA9B6",
          400: "#E26980",
          500: "#D52949",
          600: "#C02542",
          700: "#80192C",
          800: "#601221",
          900: "#400C16"
        }
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans]
      }
    }
  }
};
