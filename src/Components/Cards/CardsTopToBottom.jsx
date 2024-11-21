import React from 'react'

const CardsTTB = ({icon, title, tagline}) => {
  return (
    <div className='flex flex-col items-start lg:items-center justify-center py-6 lg:py-10 px-8 text-start lg:text-center'>
        <img className=' h-[6rem] w-auto object-contain lg:h-[11rem] mb-4' src={icon} alt={`${title}'s Icon - Talent avenue`} />
        <h3 className= 'text-cardTitle-m lg:text-cardTitle-d font-bold uppercase text-g-1 tracking-wide'>{title}</h3>
        <h3 className='text-cardText-d text-w-1'>{tagline}</h3>
        <div className='border-[0.75px] rounded-[50px] border-g-1 w-[40%] mt-6 mx-auto ' />
    </div>
  )
}

export default CardsTTB