import React from 'react'
import MainHead from '../../Components/SectionsHead/MainHead.jsx'
import AF from '../../Images/Home/a&f.jpg'
import GM from '../../Images/Home/gm.jpg'
import CS from '../../Images/Home/cs.jpg'
import IndustryCard from '../../Components/Cards/IndustryCard.jsx'
import { Link } from 'react-router-dom'

const IndustriesIntro = () => {
    const BodyText = {
        Name: 'Our industries',
        Paragraph: 'At Talent Avenue, we specialize in unearthing and placing top-tier professionals to unlock your business’s fullest potential regardless of the industry you’re operating in. We are skilled at seamlessly overcoming any sector-specific hurdles when it comes to fulfilling all your staffing needs.'
    }
    const ThreeIndustries = [
        {
            title:'Accounting & finance',
            desc:'The Talent Avenue excels in finding skilled professionals to positively impact your organization. We specialize in finance, accounting recruitment, and have a broad network throughout Canada.',
            link:'/',
            image:AF,
        },{
            title:'General Management',
            desc:'At Talent Avenue, we help clients hire top management, executive, and C-level professionals. Our expertise in Canadian talent markets ensures you find the ideal candidate for your needs.',
            link:'/',
            image:GM,
        },{
            title:'Customer Service',
            desc:'Need exceptional customer service staff? Talent Avenue knows where to source the best talent. We are your trusted partner for finding the right professionals for your organization.',
            link:'/',
            image:CS,
        },
    ]
    return (
        <div className='flex flex-col items-center my-sm w-[95%] lg:w-[75%] mx-auto '>
            <MainHead title={BodyText.Name} titleColor={'w-1'} description = {BodyText.Paragraph} descriptionColor={'w-1'} />
            <div className='flex flex-col mx-[7%] lg:grid lg:grid-cols-[1fr,1fr,1fr] gap-[5%] my-5'>
                {
                    ThreeIndustries.map((Indus, index) => (  <IndustryCard title={Indus.title} desc={Indus.desc} link={Indus.link} profile={Indus.image} key={index} />))
                }
            </div>
            <Link className='text-[1.3rem] hover:bg-g-1 text-g-1 hover:text-w-1 px-4 mt-3 py-1 rounded-[20px] border-g-1 border-2' to={'/'}>View More</Link>
        </div>
    )
}

export default IndustriesIntro