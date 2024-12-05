import React from 'react'
import Section1 from '../CommonSections/Section1'
import HeadBg_D from '../../Images/Jobseekers/js1.jpg'
import HeadBg_M from '../../Images/Jobseekers/js3.jpg'
import JS1 from './Sections/JS1'
import JS2 from './Sections/JS2'
import JS3 from './Sections/JS3'
import RecruitmentProcess from '../CommonSections/RecruitmentProcess'
import { Link } from 'react-router-dom'
import ContactCard from '../../Components/Cards/ContactCard'
import Location from '../../Images/Home/location.png'
import Countries from '../../Images/Home/Countries.png'
import People from '../../Images/Home/People.png'
import Handshake from '../../Images/Home/Handshake.png'
import Underlining from '../../Components/Underlining'
const JobSeekers = () => {

  const RecruitmentSteps = [
    {
      no: 1,
      name: 'Reach Out to Us',
      line:
        <>
          We're here to address your questions and provide the support you need. <Link className='text-g-1 capitalize hover:underline font-bold' to={'/job-seekers/application-form'}>Fill out application</Link> to get started. 
        </>,
    },{
      no: 2,
      name: 'Share Your Goals',
      line:'Tell us about your unique requirements so we can tailor our services to meet your expectations.',
    },{
      no: 3,
      name: 'Discover Opportunities',
      line:'Explore career options that align with your skills and offer personal and professional growth.',
    },{
      no: 4,
      name: 'Build Your Career',
      line:'Enjoy a rewarding professional journey with a focus on work-life balance and long-term satisfaction.',
    },{
      no: 5,
      name: 'Get Continued Support',
      line:'From us get ongoing guidance, career advice, & resources to help you thrive in your chosen path.',
    },

  ]

  const PageHead = {
    bg: window.innerWidth > 1000 ? HeadBg_D : HeadBg_M,
    title: 'Unlock Opportunities for Growth',
    description: 'We connect you with tailored job options that perfectly match your experience, skills, and career goals, ensuring your professional growth and satisfaction.',
  }

  const ContactData = {
    mainheading: (
      <>
        Searching for the <span className='px-0 py-0 lg:px-2 leading-tight font-semibold'> <Underlining bodytext={'Perfect Career'} textcolor={'w-1'}/> </span>match with ease?
      </>
    ),
    mainDesc: "Talent Avenue is dedicated to helping you find the best job options tailored to your skills, experience, and ambitions.",
    button: 'Connect with us',
    buttonLink: '/job-seekers/application-form',
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
    <div>
      <Section1 background={PageHead.bg} headline={PageHead.title} secondline={PageHead.description}/>
      <JS1 />
      <JS2 />
      <JS3 />
      <RecruitmentProcess Heading={window.innerWidth < 1000 ? 'REcruitment Process':'Roadmap to goal success'}  Process={RecruitmentSteps} />
      <ContactCard mainHead={ContactData.mainheading} mainDesc={ContactData.mainDesc} button={ContactData.button} buttonLink={ContactData.buttonLink} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
    </div>
  )
}

export default JobSeekers