import React from 'react'
import I1 from '../../../Images/Home/Home-1.jpg'
import UL from '../../../Images/underlineCurve.png'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <div className='flex flex-col items-center max-h-[65%] relative'>
        <img src={I1} className='object-cover w-full max-h-[95vh] object-top' alt='Talent Avenue - Home 1' />
        <div className='flex flex-col items-center absolute w-[85%] max-w-[1350px] px-[5%] py-[2%] bottom-[5%] bg-[#303030AD] rounded-[20px]'> 
            <h3 className='text-w-1 text-[45px] leading-tight capitalize font-semibold'>Want to build a positive workplace for productivity?</h3>
            <h4 className='text-w-1 text-[35px] flex leading-tight uppercase font-semibold tracking-wide'>Click Here  
              <div className='ml-2 flex flex-col items-center '>
                <Link to={'/'} className='font-bold leading-tight text-g-1 cursor-pointer'>
                  To Find Talent !!!
                  <img className='absolute -mt-1' src={UL} alt='Special Underlining two' />
                </Link>
              </div>
              </h4>
        </div>
    </div>
  )
}

export default Section1