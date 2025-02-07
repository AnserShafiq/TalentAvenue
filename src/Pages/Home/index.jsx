import React, { Suspense } from 'react';
import BG1 from '../../Images/Home/Home-1.webp'
import Section1 from '../CommonSections/Section1.jsx';
import H2 from './Sections/H2.jsx';
import Underlining from '../../Components/Underlining.jsx';
import IndustriesIntro from '../CommonSections/IndustriesIntro.jsx';
import RecruitmentSols from '../CommonSections/RecruitmentSols.jsx';
import ContactCard from '../../Components/Cards/ContactCard.jsx';
import Location from '../../Images/Home/location.png'
import People from '../../Images/Home/People.png'
import Countries from '../../Images/Home/Countries.png';
import Handshake from '../../Images/Home/Handshake.png'
import IntroVideo from '../CommonSections/IntroVideo.jsx'
import Popup from '../../Components/PopUp.jsx';
import Testimonials from '../CommonSections/OurTestimonials.jsx';
import LoadingElement from '../../Components/SuspenseLoading.jsx';

const Home = () => {
  const Section1Data={
    Background: BG1,
    Headline: 'Want to build a positive workplace for productivity?',
  }
  const section1SecondLine = (
      <span className='text-[1.4rem] lg:text-[1.8rem] flex flex-col lg:flex-row'>
        Click Here  
        <div className='ml-0 lg:ml-2 flex flex-col items-center '>
          <Popup btnCSS={'font-extrabold leading-normal uppercase'}><Underlining bodytext={'To Find Talent !!!'} textcolor='g-1'/></Popup>
        </div>
      </span>
    )

  const ContactData = {
    mainheading: [
      (
        <>
          Want to see how <span className='px-0 py-0 lg:px-2 font-semibold'> <Underlining bodytext={'Talent Avenue'} textcolor={'w-1'}/> </span>serves it's clients?
        </>
      ),
      (
        <>
          Curious about how <span className='px-0 py-0 lg:px-2 font-semibold'> <Underlining bodytext={'Talent Avenue'} textcolor={'w-1'}/> </span> meets client needs?
        </>
      )
    ],
    mainDesc: [
      "From connecting talented individuals to rewarding careers to helping employers find exceptional permanent hires, we provide expert support every step of the way.",
      "Whether you're seeking the perfect opportunity or the ideal candidate, our permanent placement solutions are designed to meet your unique needs with precision and care."
    ],
    button: [
      'Contact Us Now',
      'Connect With Us'
    ],
    buttonLink: ['/contact-us','Popup'],
    subHead: 'Your advantages with talent avenue',
    subOptions:[
      {
        icons:Countries,
        name: `Multiple States`,
      },{
        icons:Handshake,
        name: '1000s Of Clients',
      },{
        icons:Location,
        name: '40+ locations',
      },{
        icons:People,
        name: '500+ People on assignment',
      },
    ],
  }

  return (
    <Suspense fallback={<LoadingElement />}>
      <Section1 background={Section1Data.Background} bgPosition={'object-top'} headline={Section1Data.Headline} secondline={section1SecondLine} UC={true} />
      <H2 />
      <IntroVideo />
      <div className='mb-[5%]'/>
      <ContactCard mainHead={ContactData.mainheading[0]} mainDesc={ContactData.mainDesc[0]} button={ContactData.button[0]} buttonLink={ContactData.buttonLink[0]} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
      <IndustriesIntro />
      <RecruitmentSols />
      <div className='mb-[5%]'/>

      <Testimonials Numbers={['Six','Two', 'Four']}/>

      <ContactCard mainHead={ContactData.mainheading[1]} mainDesc={ContactData.mainDesc[1]} button={ContactData.button[1]} buttonLink={ContactData.buttonLink[1]} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
      <div className='mb-[5%]'/>
    </Suspense>
  )
}

export default Home