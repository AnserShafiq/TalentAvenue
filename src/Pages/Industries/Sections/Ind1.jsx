import React from 'react'
import MainHead from '../../../Components/SectionsHead/MainHead.jsx'
import Img1 from '../../../Images/Industries/infotech.jpg'
import Img2 from '../../../Images/Industries/healthcare.jpg'
import Img3 from '../../../Images/Industries/finance.jpg'
import Img4 from '../../../Images/Industries/manufacturing.jpg'
import Img5 from '../../../Images/Industries/retail.jpg'
import Img6 from '../../../Images/Industries/engineering.jpg'
import Img7 from '../../../Images/Industries/construction.jpg'
import Img8 from '../../../Images/Industries/marketing.jpg'
import IndustryFlipCard from '../../../Components/Cards/IndustryFlipCard'

const IndustriesList = () => {

  const OurIndustries = [
    {
      Name: 'Information Technology',
      Statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum quaerat sapiente veritatis, aliquid quisquam aut? Enim consectetur accusamus ipsa at maxime quisquam quaerat sed. Earum consequuntur harum numquam cupiditate.',
      Image: Img1,
    },{
      Name: 'Healthcare',
      Statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum quaerat sapiente veritatis, aliquid quisquam aut? Enim consectetur accusamus ipsa at maxime quisquam quaerat sed. Earum consequuntur harum numquam cupiditate.',
      Image: Img2,
    },{
      Name: 'Finance',
      Statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum quaerat sapiente veritatis, aliquid quisquam aut? Enim consectetur accusamus ipsa at maxime quisquam quaerat sed. Earum consequuntur harum numquam cupiditate.',
      Image: Img3,
    },{
      Name: 'Manufacturing',
      Statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum quaerat sapiente veritatis, aliquid quisquam aut? Enim consectetur accusamus ipsa at maxime quisquam quaerat sed. Earum consequuntur harum numquam cupiditate.',
      Image: Img4,
    },{
      Name: 'Retail',
      Statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum quaerat sapiente veritatis, aliquid quisquam aut? Enim consectetur accusamus ipsa at maxime quisquam quaerat sed. Earum consequuntur harum numquam cupiditate.',
      Image: Img5,
    },{
      Name: 'Engineering',
      Statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum quaerat sapiente veritatis, aliquid quisquam aut? Enim consectetur accusamus ipsa at maxime quisquam quaerat sed. Earum consequuntur harum numquam cupiditate.',
      Image: Img6,
    },{
      Name: 'Construction',
      Statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum quaerat sapiente veritatis, aliquid quisquam aut? Enim consectetur accusamus ipsa at maxime quisquam quaerat sed. Earum consequuntur harum numquam cupiditate.',
      Image: Img7,
    },{
      Name: 'Marketing',
      Statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum quaerat sapiente veritatis, aliquid quisquam aut? Enim consectetur accusamus ipsa at maxime quisquam quaerat sed. Earum consequuntur harum numquam cupiditate.',
      Image: Img8,
    },
  ]

  const MainHeadContent = {
    Head: 'Industries we cover',
    Desc: 'we provide tailored direct hire recruitment services to industries across various sectors. Our focus is on connecting businesses with permanent employees who possess the skills and cultural alignment needed for success. By deeply understanding each industry’s unique requirements, we ensure seamless and effective talent placement.'
  }

  return (
    <div className='flex flex-col my-[10%] lg:my-sm w-[95%] lg:w-[80%] 2xl:w-[70%] mx-auto'>
        <MainHead title={MainHeadContent.Head} titleColor={'w-1'} description={MainHeadContent.Desc} descriptionColor={'w-1'} />
        <div className='flex lg:flex-row flex-wrap justify-around items-center w-full'>
          {
            OurIndustries.map((Industry, index) =>(
              <IndustryFlipCard target={Industry} key={index} />
            ))
          }
        </div>
    </div>
  )
}

export default IndustriesList