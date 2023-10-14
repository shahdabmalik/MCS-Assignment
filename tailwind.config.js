/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    "./src/**/**/*.jsx",
    "./src/**/**/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        poppins: "'Poppins', sans-serif",
        sans: "'Open Sans', sans-serif"
      },
      colors: {
        "primary": "#0076CE",
        "secondary": "#9400D3",
        "light-gray": '#AEB0B4',
        "background-white": "#FAFBFC",
        "background-light-gray": "#F4F4F4",
        "custom-orange": "#F66",
        "sky-blue": "#DDF3FF",
        "ligth-purple": "#EFD9F9",
        "medium-gray": "#999"
      },
      backgroundImage: {
        'hero-gradient': "url('./src/assets/Gradientbackground.svg')",
      }
    },
  },
  plugins: [],
}

