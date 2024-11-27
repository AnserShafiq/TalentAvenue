import React from 'react'
import MainHead from '../../../Components/SectionsHead/MainHead'
import M1 from '../../../Images/HowWeWorks/hww-3.jpg'
import M2 from '../../../Images/HowWeWorks/hww-4.jpg'
import M3 from '../../../Images/HowWeWorks/hww-5.jpg'
import Underlining from '../../../Components/Underlining'
import { IoCheckmarkCircleOutline as Check} from "react-icons/io5";

const HWW2 = () => {

  const ModelsData = [
    {
      name:'Workforce solutions',
      desc:'Talent Avenue excels in delivering permanent placement services through direct hire recruitment solutions. We provide businesses of all sizes with streamlined hiring processes, offering:',
      img: M2,      
      points:[
        'Recruitment tailored to a wide range of skill sets.',
        'Direct access to Talent Avenue’s extensive global network.',
        'Full compliance management throughout onboarding and offboarding.',
        'Detailed reporting, analytics, and expert consultation customized to your industry’s specific needs.'
      ],position:'',
    },{
      name:'Onsite - Our team collaborate with you',
      desc:'Talent Avenue excels in delivering permanent placement services through direct hire recruitment solutions. We provide businesses of all sizes with streamlined hiring processes, offering:',
      img: M1 ,points:[
        'Recruitment tailored to a wide range of skill sets.',
        'Direct access to Talent Avenue’s extensive global network.',
        'Full compliance management throughout onboarding and offboarding.',
        'Detailed reporting, analytics, and expert consultation customized to your industry’s specific needs.'
      ],position:'left',
    },{
      name:'Managed Services Provider',
      desc:'Talent Avenue excels in delivering permanent placement services through direct hire recruitment solutions. We provide businesses of all sizes with streamlined hiring processes, offering:',
      img:M3,points:[
        'Recruitment tailored to a wide range of skill sets.',
        'Direct access to Talent Avenue’s extensive global network.',
        'Full compliance management throughout onboarding and offboarding.',
        'Detailed reporting, analytics, and expert consultation customized to your industry’s specific needs.'
      ],position:'',
    },
  ]

  return (
    <div className='flex flex-col items-center mt-sm w-[95%] lg:w-[70%] mx-auto '>
        <MainHead title={'Your Business, Our Management'} titleColor={'w-1'} description={'We work hard to maximize efficiency and cost savings. we offer three primary recruitment management models:'} descriptionColor={'w-1'}/>
        {ModelsData.map((Model, index) => (
              <div className={`flex flex-col w-[90%] lg:w-full my-6 ${(index+1)%2 === 0 ? 'lg:flex-row-reverse':'lg:flex-row'}`} key={index}>
                <div className='w-full lg:w-[40%]'>
                  <img className='w-full h-full rounded-[20px]' src={Model.img} alt={`${Model.name} - Pic`}/>
                </div>
                <div className={`w-full flex flex-col ${(index+1)%2===0 ? 'lg:pr-10':'lg:pl-10'} lg:w-[60%]`}>
                  <div className='text-[1.5rem] lg:text-[2rem] font-bold uppercase mx-auto mt-4 text-center lg:text-start lg:mx-0 lg:mt-0 text-w-1'><Underlining bodytext={Model.name} textcolor={'w-1'} position={Model.position} /></div>
                  <h4 className='text-[1.2rem] leading-tight text-w-1 font-[400] capitalize mt-6 mb-2 text-center lg:text-start'>{Model.desc}</h4>
                  {
                    Model.points.map((Point, index) => (
                      <div key={index} className='flex flex-row my-2'>
                        <div className='w-fit flex items-start justify-center pt-[1.5%] lg:pt-[0.8%]'>
                          <Check className='text-[1.2rem] text-g-1'/>
                        </div>
                        <div className='w-[95%] ml-2'>
                          <h3 className='text-[1.2rem] font-[300] text-w-1'>{Point}</h3>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
        )          
        )}
    </div>
  )
}

export default HWW2