import React from 'react'
import DisplayImg from '../../../Images/WhyTalentAvenue/wta2.jpg'
import MainHead from '../../../Components/SectionsHead/MainHead'

const GTJD = () => {
    const Content={
        title: 'Get the job done',
        desc1:'Talent Avenue stands out as a top-notch recruitment enterprise globally, offering adaptable and groundbreaking resolutions that cater to the needs of both employers and job seekers.',
        desc2: 'Talent Avenue leverages its vast worldwide network to provide custom recruitment solutions for job seekers and employers alike, ensuring access to the most promising opportunities available. Expect a dependable, efficient, and professional service that’s committed to helping you discover qualified candidates as per your needs.',
    }
    return (
        <div className='flex relative flex-col justify-center items-center my-sm w-[95%] lg:w-[83%] 2xl:w-[70%] h-[100%] mx-auto'>
            <img className='w-full h-[50vh] lg:h-[83vh] object-bottom object-cover rounded-[20px]' src={DisplayImg} alt={`${Content.title} - Pic `} />
            <div className='relative mt-6 lg:mt-0 lg:absolute lg:top-0 left-0 h-full lg:bg-[#0000007a] flex flex-col rounded-[20px] justify-center'>
                <MainHead title={Content.title} titleColor={'w-1'} description={Content.desc1 +'  '+ Content.desc2} descriptionColor={'w-1'} />
            </div>
        </div>
    )
}

export default GTJD