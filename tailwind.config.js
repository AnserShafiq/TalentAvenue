
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      padding:{
        "X-Header":"3vw",
        "Y-Header":"1.7vh",
      },
      colors:{
        'w-1':'#e5e5e5',
        'g-1':'#bc9a64',
        'dropdown-bg':'#424242',
      },
      translate:{
        'header-drop-x': '-35%',
        'header-drop-y': '2%',
      }
    },
  },
  plugins: [],
}

