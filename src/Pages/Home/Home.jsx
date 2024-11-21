import React from 'react';
import BG1 from '../../Images/Home/Home-1.jpg'
import Section1 from '../CommonSections/Section1.jsx';
import UL from '../../Images/underlineCurve.png';
import { Link } from 'react-router-dom';

const Home = () => {
  const Section1Data={
    Background: BG1,
    Headline: 'Want to build a positive workplace for productivity?',
  }
  const section1SecondLine = (
      <>
        Click Here  
        <div className='ml-2 flex flex-col items-center '>
          <Link to={'/'} className='font-bold leading-tight text-g-1 cursor-pointer'>
            To Find Talent !!!
            <img className='absolute -mt-1' src={UL} alt='Special Underlining two' />
          </Link>
        </div>
      </>
    )
  return (
    <>
      <Section1 background={Section1Data.Background} headline={Section1Data.Headline} secondline={section1SecondLine} />
    </>
  )
}

export default Home