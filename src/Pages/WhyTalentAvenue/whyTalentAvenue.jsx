import React from 'react'
import Section1 from '../CommonSections/Section1'
import Bg from '../../Images/WhyTalentAvenue/wta1.jpg'
import RecruitmentSols from '../CommonSections/RecruitmentSols'
import ContactCard from '../../Components/Cards/ContactCard'
import IntroVideo from '../CommonSections/IntroVideo'
import { Link } from 'react-router-dom'
const WhyTalentAvenue = () => {

    const DataOne = {
        background : Bg,
        headline: 'Score More With Talent Avenue',
        secondline:'Join us and build a future based on diversity, inclusion, and human potential',
    }

    const PageMenu = [
        {
            title: 'Facts & Figures',
            link: '#facts&figures',
            last:false,
        },{
            title: 'Solutions',
            link: '#solutions',
            last:false,
        },{
            title: 'Intro to technology',
            link: '#intrototechnology',
            last:false,
        },{
            title: 'Testimonials',
            link: '/#testimonials',
            last: true,
        },
    ]


    return (
        <>
            <Section1 background={DataOne.background} bgPosition={'center'} headline={DataOne.headline} secondline={DataOne.secondline} UC={false}/>
            <div className='w-[80%] mx-auto my-[1%] flex flex-row justify-center items-center'>
                {
                    PageMenu.map((Menu, index) => (
                        <div key={index} className={`flex justify-center items-center px-[4%] ${Menu.last ? 'border-r-2 border-transparent' : 'border-r-2 border-g-1'} `}>
                            <Link className='text-g-1 font-[500] tracking-wide uppercase text-[1.1rem]'>{Menu.title}</Link>
                        </div>
                    ))
                }
            </div>
            <RecruitmentSols />
            {/* <ContactCard  /> */}
            <IntroVideo id='intrototechnology' />
            
        </>
    )
}

export default WhyTalentAvenue