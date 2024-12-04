import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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
import ReactLoading from 'react-loading';
import { EmployersForm, JobSeekersForm } from './Pages/ApplicationForms/index.jsx';



const AppBody = () =>{

  

  const location= useLocation();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const excludeLoadingPaths = [
      '/privacy-policy/',
      '/security-phishing/',
      '/cookies-policy/',
      '/terms-of-use/',
    ];
    if(excludeLoadingPaths.includes(location.pathname)){
      setLoading(false)
      return;
    }

    setLoading(true)
    const timer = setTimeout(()=>{
      setLoading(false)
    },3000)
    return () => clearTimeout(timer);
  },[location])

  if(loading) return(
    <div className='h-screen w-screen flex justify-center flex-col items-center text-center bg-[#0000007f]'>
      <ReactLoading type='spinningBubbles' color='#bc9a64' height={5+'rem'} />
      <h3 className='text-2xl lg:text-3xl tracking-wide font-[600] text-g-1'>
        Loading...
      </h3>
    </div>
  )

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
          <Route path='/employers/application-form' element={<EmployersForm />}/>
          <Route path='/job-seekers' element={<JobSeekers />} />
          <Route path='/job-seekers/application-form' element={<JobSeekersForm />}/>
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