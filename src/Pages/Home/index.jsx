import React from 'react';
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

const Home = () => {
  const Section1Data={
    Background: BG1,
    Headline: 'Want to build a positive workplace for productivity?',
  }
  const section1SecondLine = (
      <>
        Click Here  
        <div className='ml-0 lg:ml-2 flex font-extrabold flex-col items-center leading-normal'>
          <Underlining bodytext={'To Find Talent !!!'} textcolor='g-1'/>
        </div>
      </>
    )

  const ContactData = {
    mainheading: (
      <>
        Want to see how <span className='px-0 py-0 lg:px-2 font-semibold'> <Underlining bodytext={'Talent Avenue'} textcolor={'w-1'}/> </span>serves it's clients?
      </>
    ),
    mainDesc: "No matter the size of your hiring needs, we’ve got you covered – From Temporary Staffing to direct hires, we're ready to assist you.",
    button: 'Contact Us Now',
    buttonLink: '/',
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
    <>
      <Section1 background={Section1Data.Background} bgPosition={'object-top'} headline={Section1Data.Headline} secondline={section1SecondLine} UC={true} />
      <H2 />
      <IntroVideo />
      <div className='mb-[5%]'/>
      <ContactCard mainHead={ContactData.mainheading} mainDesc={ContactData.mainDesc} button={ContactData.button} buttonLink={ContactData.buttonLink} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
      <IndustriesIntro />
      <RecruitmentSols />
      <div className='mb-[5%]'/>
      <ContactCard mainHead={ContactData.mainheading} mainDesc={ContactData.mainDesc} button={ContactData.button} buttonLink={ContactData.buttonLink} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
      <div className='mb-[5%]'/>
    </>
  )
}

export default Home