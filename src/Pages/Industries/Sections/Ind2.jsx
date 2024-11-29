import React from 'react'
import SideImg1 from '../../../Images/Industries/Ind2.jpg'
import SideImg2 from '../../../Images/Industries/Ind3.jpg'
import Underlining from '../../../Components/Underlining'
const Ind2 = () => {

    const DataContent = [
    {
        title: 'Core Service Features',
        sideImg: SideImg1,
        reverse: false,
        points: [
        {
            no: 'i',
            name: 'Customized Candidate Search',
            desc: 'We understand your unique needs and culture to find candidates who perfectly align with your goals and vision.'
        },
        {
            no: 'ii',
            name: 'Comprehensive Candidate Evaluation',
            desc: 'Our process includes interviews, skills assessments, and screenings to present only the most qualified candidates.'
        },
        {
            no: 'iii',
            name: 'Cultural Compatibility Assessment',
            desc: 'We prioritize candidates who align with your organizational culture, ensuring better retention and satisfaction.'
        },
        ]
    },
    {
        title: 'Primary Hiring Benefits',
        sideImg: SideImg2,
        reverse: true,
        points: [
        {
            no: 'i',
            name: 'Enhanced Employee Retention',
            desc: 'Our focus on cultural alignment leads to sustainable placements and long-term success for your organization.'
        },
        {
            no: 'ii',
            name: 'Faster Hiring Process & Reduced Costs',
            desc: 'Our streamlined processes help save you valuable resources, letting you focus on growing your core operations.'
        },
        {
            no: 'iii',
            name: 'Top-Quality Hires',
            desc: 'Our thorough evaluations deliver top talent, minimizing hiring risks and ensuring better outcomes for your team.'
        },
        ]
    },
    ];

    return DataContent.map((Content, index) => (
        <div className='flex flex-col my-[4%] lg:my-sm w-[90%] lg:w-[80%] 2xl:w-[70%] mx-auto'>
            <div className={`flex flex-col ${Content.reverse ? 'lg:flex-row-reverse': 'lg:flex-row lg:mb-12'} w-full`} key={index}>
                <div className={`w-full lg:w-[50%] flex lg:min-h-[48vh]`}>
                    <img className='w-full h-full rounded-[20px] shadow-md shadow-[#bc9a642f]' src={Content.sideImg} alt='cheeck'/>
                </div>
                <div className={`flex flex-col justify-center py-6 ${Content.reverse ? 'lg:pl-0 lg:pr-8':'lg:pl-8 lg:pr-0'} w-full lg:w-[50%]`}>
                    <div className='text-[1.7rem] lg:text-[2.2rem] font-semibold tracking-wide uppercase mb-4' ><Underlining bodytext={Content.title} textcolor={'w-1'} position={'left'}/></div>
                    {
                        Content.points.map((point, key) => (
                            <h4 className='text-[1.2rem] lg:text-[1.4rem] text-w-1 font-[300] leading-tight mb-4' key={key}>
                                <span className='text-g-1 font-[600] capitalize'>{point.no}. {point.name}:</span> {point.desc}
                            </h4>
                        ))
                    }
                </div>  
            </div>
        </div>
    ))
}

export default Ind2