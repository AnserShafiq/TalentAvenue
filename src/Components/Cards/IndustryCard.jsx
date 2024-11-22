import React from 'react'
import { Link } from 'react-router-dom'

const IndustryCard = ({title, desc, link, profile}) => {
  return (
    <div className='flex flex-col relative shadow-md shadow-[#bd996013] bg-[#0000006f] rounded-[25px] my-4 lg:my-0'>
        <img className='rounded-t-[25px] object-cover object-center lg:h-[250px]' src={profile} alt={`${title}'s Pic`} />
        <div className='flex flex-col px-6 py-4'>
            <h3 className=' text-cardTitle-m lg:text-cardTitle-d text-g-1 capitalize font-semibold tracking-wide'>{title}</h3>
            <p className='text-[1rem] text-w-1 mb-4'>{desc}</p>
            <Link className=' text-g-1 text-[1.1rem] border-b-2 border-transparent hover:text-w-1 hover:border-w-1 w-fit ' to={link}>Explore</Link>
        </div>
    </div>
  )
}

export default IndustryCard