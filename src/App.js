import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index.jsx';
import WhyTalentAvenue from './Pages/WhyTalentAvenue/index.jsx';
import Header from './Components/HeaderFooter/Header/Header';
import Footer from './Components/HeaderFooter/Footer/Footer';
import FAQs from './Pages/FAQs/index.jsx';
import HowWeWorks from './Pages/HowWeWorks/index.jsx';
import Employers from './Pages/Employers/index.jsx';
import JobSeekers from './Pages/JobSeekers/index.jsx';
import OurIndustries from './Pages/Industries/index.jsx';
import ContactUs from './Pages/ContactUS/index.jsx';
import { CookiesPolicy, PrivacyPolicy, SecurityPhishing, TermsOfUse } from './Pages/ExtraPages/ExportPage.jsx';



const AppBody = () =>{
  return (
    <div>
      <Header />
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/why-talent-avenue' element={<WhyTalentAvenue />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/how-we-work' element={<HowWeWorks />}/>
          <Route path='/employers' element={<Employers />} />
          <Route path='/job-seekers' element={<JobSeekers />} />
          <Route path='/industries-we-deal' element={<OurIndustries />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
          <Route path='/security-phishing' element={<SecurityPhishing />}/>
          <Route path='/cookies-policy' element={<CookiesPolicy />}/>
          <Route path='/terms-of-use' element={<TermsOfUse />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

const App = () => {
  return(
    <BrowserRouter>
      <AppBody />
    </BrowserRouter>
  )

}

export default App