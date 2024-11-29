import React from 'react'
import Section1 from '../CommonSections/Section1'
import Bg from '../../Images/ContactUs/CU1.jpg'
import CU1 from './Sections/CU1'
const ContactUs = () => {

    const HeadContent = {
        bg: Bg ,
        headline: 'Empowering Careers and Teams',
        secondline:'Whether building a top-tier team or advancing your career, we’re here to help. Our vast network and personalized solutions deliver results tailored to your goals.'
    }

    return (
    <div>
        <Section1 headline={HeadContent.headline} secondline={HeadContent.secondline} background={HeadContent.bg} />
        <CU1 />
    </div>
  )
}

export default ContactUs