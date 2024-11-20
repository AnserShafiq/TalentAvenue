import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Header from './Components/HeaderFooter/Header/Header'
import Footer from './Components/HeaderFooter/Footer/Footer'

const App = () => {
  return(
    <BrowserRouter>
      <Header />
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )

}

export default App