import React from 'react'
import DisplayImg from '../../../Images/HowWeWorks/hww-2.jpg'
import MainHead from '../../../Components/SectionsHead/MainHead'

const HWW1 = () => {
    const Content={
        title: 'Fast and Reliable Hiring',
        desc1:'As one of the world’s leading staffing agencies, we use a combination of modern technology and time-tested methods. Our innovation allows us to match you with the perfect-fit candidates, build custom-made solutions that fit your needs, and deliver fast results that impact your bottom line.',
    }
    return (
        <div className='flex relative flex-col justify-center items-center my-sm w-[95%] lg:w-[83%] 2xl:w-[70%] h-[100%] mx-auto'>
            <img className='w-full h-[50vh] lg:h-[83vh] object-bottom object-cover rounded-[20px]' src={DisplayImg} alt={`${Content.title} - Pic `} />
            <div className='relative mt-6 lg:mt-0 lg:absolute lg:top-0 left-0 h-full lg:bg-[#0000007a] flex flex-col rounded-[20px] justify-center'>
                <MainHead title={Content.title} titleColor={'w-1'} description={Content.desc1} descriptionColor={'w-1'} />
            </div>
        </div>
    )
}

export default HWW1