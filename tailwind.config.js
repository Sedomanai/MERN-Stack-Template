const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["src/**/*.{html,js}"],
    fontFamily: {
      lato: ["Lato", ...defaultTheme.fontFamily.mono]
    },
    theme: {
        extend: {},
    }
}