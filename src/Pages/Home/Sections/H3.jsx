import React from 'react'
import Vid from '../../../Images/Home/intro.mp4'
import Underlining from '../../../Components/Underlining'
const H3 = () => {
  return (
    <div className=' relative'>
        <video className='w-full h-[80vh] lg:h-[85vh] max-h-[85vh] object-cover' src={Vid} loop 
        muted 
        playsInline 
        autoPlay/>
        <div className='absolute flex flex-col items-center justify-center w-[100%] h-[100%] bg-[#0000007f] top-0 left-0'>
            <div className='flex-col flex text-[1.5rem] lg:text-[4rem] mb-3 uppercase text-center font-bold tracking-wider'>
                <Underlining bodytext={'More than a temp agency'} textcolor={'w-1'}/>
            </div>
            <h3 className='text-[1.1rem] lg:text-[1.5rem] text-w-1 capitalize text-center mx-[7%] lg:mx-[22%]'>Wether you're an organization looking for permanent talent, workforce solutions, or a job seeker looking for career development, We're here for you.</h3>

        </div>
    </div>
  )
}

export default H3