import React from 'react';
import BG1 from '../../Images/Home/Home-1.jpg'
import Section1 from '../CommonSections/Section1.jsx';
import H2 from './Sections/H2.jsx';
import Underlining from '../../Components/HeaderFooter/Underlining.jsx';
import H3 from './Sections/H3.jsx';
import IndustriesIntro from '../CommonSections/IndustriesIntro.jsx';
import RecruitmentSols from '../CommonSections/RecruitmentSols.jsx';

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
  return (
    <>
      <Section1 background={Section1Data.Background} headline={Section1Data.Headline} secondline={section1SecondLine} />
      <H2 />
      <H3 />
      <IndustriesIntro />
      <RecruitmentSols />
    </>
  )
}

export default Home