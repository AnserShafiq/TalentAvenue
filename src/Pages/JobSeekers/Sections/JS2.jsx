import React from 'react'
import MainHead from '../../../Components/SectionsHead/MainHead'
import CardBack from '../../../Images/Jobseekers/cards2.png'
import i1 from '../../../Images/Jobseekers/Workforce.png'
import i2 from '../../../Images/Jobseekers/Opportunities.png'
import i3 from '../../../Images/Jobseekers/Professional.png'
import i4 from '../../../Images/Jobseekers/Flexible.png'
import i5 from '../../../Images/Jobseekers/Policy.png'
import i6 from '../../../Images/Jobseekers/Support.png'

const JS2 = () => {

    const CardsContent=[
        {
            heading: 'Workforce Management',
            desc:' We offer customized workforce solutions that match talent with needs.',
            icon:i1,
        },{
            heading: 'Employment Opportunities',
            desc: 'Our job listings cover multiple sectors, from warehousing to HR services.',
            icon: i2,
        },{
            heading: 'Recruitment Professionals',
            desc: 'Our specialists connect your skills with the right opportunities locally.',
            icon: i3,
        },{
            heading: 'Flexible Employment',
            desc: 'Discover jobs that fit your lifestyle, from part-time to full-time roles.',
            icon: i4,
        },{
            heading: 'Work-Ready Policies',
            desc: 'We set clear health, safety, and privacy expectations before each task.',
            icon: i5,
        },{
            heading: 'Ongoing Support',
            desc: "We provide support throughout your journey, from start to next opportunity.",
            icon: i6,
        }
    ]

    return (
    <div className='flex flex-col my-[10%] lg:my-[14vh] w-[95%] lg:w-[80%] 2xl:w-[70%] mx-auto'>
        <MainHead title={'Flexible Careers, Endless Possibilities'} titleColor={'w-1'}/>
        <div className='grid lg:grid-cols-3 gap-y-6 lg:gap-y-[8%] justify-items-center mt-4'>
            {
                CardsContent.map((Card, index) => (
                    <div className='relative w-[320px] h-[380px] rounded-xl bg-opacity-50'>
                        <img className='h-full w-full object-cover rounded-xl' src={CardBack} alt='Job seekers card back'/>
                        <div className={`absolute top-0 left-0 h-full w-full text-w-1 flex flex-col items-center justify-center text-center px-6`}>
                            <img className='w-[7rem]' src={Card.icon} alt={`${Card.heading} - Icon `}/>
                            <h3 className='text-[1.7rem] font-bold text-g-1 tracking-wider uppercase leading-tight my-2'>
                                {Card.heading.split(' ').map((word, index) => (
                                    <span key={index} className='block'>{word}</span>
                                ))}
                            </h3>
                            <h5 className='text-[1.2rem] capitalize leading-tight tracking-wide'>{Card.desc}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default JS2