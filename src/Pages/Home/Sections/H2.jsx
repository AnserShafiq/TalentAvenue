import React from 'react'
// import Underlining1 from '../../../Components/HeaderFooter/Underlining'
import CardsTTB from '../../../Components/Cards/CardsTopToBottom'
import Icon1 from '../../../Images/Home/i1.png'
import Icon2 from '../../../Images/Home/i2.png'
import Icon3 from '../../../Images/Home/i3.png'
import Icon4 from '../../../Images/Home/i4.png'
import MainHead from '../../../Components/SectionsHead/MainHead'

const H2 = () => {

  const BodyText= {
    title: 'How We Work',
    paragraph: 'Talent Avenue teams up with both local & global companies to find & hire the talent you need for your business. We recruit, screen, & match top-tier individuals with the right skills & qualifications. We provide personalized training programs to ensure employees are fully prepared for their first day. Our ongoing support & assistance guarantee that we provide the best staffing solutions.',

  }

  const CardsData = [
    {
      icon: Icon2,
      title: 'According to your needs',
      tagline: 'We connect job seekers and employers by understanding their unique needs, ensuring the perfect hiring match every time.',
    },
    {
      icon: Icon3,
      title: 'Uniqueness & Authenticity',
      tagline: 'Delivering tailored hiring solutions that highlight individuality, ensuring authentic connections for job seekers and employers.',
    },
    {
      icon: Icon4,
      title: 'Matching of skills & essentials',
      tagline: 'Our expert team matches the right skills and requirements, bridging the gap between job seekers and employers seamlessly.',
    },
    {
      icon: Icon1,
      title: 'First train, then work',
      tagline: 'We offer training programs to prepare candidates, ensuring they meet employer expectations and excel in their roles.',
    },
  ];
  

  return (
    <div className='flex flex-col items-center my-sm w-[95%] lg:w-[75%] mx-auto '>
        <MainHead title={BodyText.title} titleColor={'w-1'} description={BodyText.paragraph} descriptionColor={'w-1'} />
        <div className='grid grid-cols[1fr] lg:grid-cols-[1fr,1fr] my-4 w-full '>
        {
          CardsData.map((Card, index) => (
            <CardsTTB key={index} icon={Card.icon} title={Card.title} tagline={Card.tagline} />
          ))
        }
        </div>
        
    </div>
  )
}

export default H2