const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["client/**/*.{html,js}"],
    fontFamily: {
      lato: ["Lato", ...defaultTheme.fontFamily.mono]
    },
    theme: {
        extend: {},
    }
}