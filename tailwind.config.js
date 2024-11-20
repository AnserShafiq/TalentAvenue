
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      padding:{
        "X-Header":"3vw",
        "Y-Header":"1.7vh",
        "X-footer": '4vw',
        "Y-footer":'2vh',
        "ContentSection": '7%',
      },
      colors:{
        'w-1':'#e5e5e5',
        'g-1':'#bc9a64',
      },
      translate:{
        'header-drop-x': '-35%',
        'header-drop-y': '2%',
      },
    },
  },
  plugins: [],
}

