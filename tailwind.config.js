
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
        'header-drop-x': '0%',
        'header-drop-y': '2%',
      },
      margin:{
        "sm":'8vh',
      },
      fontSize:{
        'mh-d':'2.8rem',
        'mh-m': '1.7rem',
        'mp-d':'1.4rem',
        'mp-m': '1.15rem',
        'cardTitle-d':'1.7rem',
        'cardTitle-m':'1.4rem',
        'cardText-d':'1.1rem',
        'testimonials-d':'1.3rem',
      },
      screens:{
        '2xl':'1600px',
      }
    },
  },
  plugins: [],
}

