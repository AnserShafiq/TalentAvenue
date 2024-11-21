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
    paragraph: 'Talent Avenue teams up with both local and global companies to find and hire the talent you need for your business. We recruit, screen, and match top-tier individuals with the right skills and qualifications. We provide personalized training programs to ensure employees are fully prepared for their first day. Our ongoing support and assistance guarantee that we provide the best staffing solutions.',

  }

  const CardsData = [
    {
      icon: Icon2,
      title: 'According to your needs',
      tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
    },{
      icon: Icon3,
      title: 'Uniqueness & Authenticity',
      tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
    },{
      icon: Icon4,
      title: 'Matching of skills & essentials',
      tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
    },{
      icon: Icon1,
      title: 'First train, then work',
      tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
    },
  ]

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