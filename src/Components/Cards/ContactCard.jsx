import React from 'react'
import { Link } from 'react-router-dom'

const ContactCard = ({mainHead, mainDesc, button, buttonLink, subHead, subOptions}) => {

  return (
    <div className='flex flex-col-reverse lg:flex-row w-[85%] lg:w-[75%] rounded-[20px] lg:rounded-r-[20px] 2xl:w-[65%] bg-[#161616] my-[5vh] mx-auto'>
        <div className='flex flex-col w-full lg:w-[67%] pb-8 pt-4 lg:py-12 px-5 lg:px-10 '>
            <h2 className='flex flex-wrap capitalize tracking-wide text-mh-m py-2 lg:py-0 lg:text-[3rem] font-[400] text-w-1 leading-tight'>{mainHead}</h2>
            <p className='tracking-normal text-mp-m lg:text-[1.4rem] lg:my-3 font-[400] text-w-1 leading-tight'>{mainDesc}</p>
            <Link className='bg-g-1 hover:bg-w-1 text-w-1 hover:text-g-1 font-[500] text-[1.2rem] lg:text-[1.4rem] px-4 py-2 w-fit rounded-[10px] mt-4' to={buttonLink}>{button}</Link>
        </div>
        <div className='flex flex-wrap w-full lg:w-[33%] capitalize bg-g-1 px-5 py-6 rounded-[20px]' >
            <h2 className='flex flex-wrap text-mh-m lg:text-[2.8rem] font-[400] text-w-1 leading-tight'>{subHead}</h2>
            <div className='flex flex-col mt-3'>
                {
                    subOptions.map((Target, index) => (
                        <div className='w-full flex flex-row items-center py-1 text-w-1' key={index}>
                            <img className='w-[1.5rem] ml-2 h-auto' src={Target.icons} alt='Icon' />
                            <h3 className='lg:text-[1.4rem] ml-3 font-[400] text-w-1 leading-tight'>{Target.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ContactCard