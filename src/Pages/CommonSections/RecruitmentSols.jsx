import React from 'react'
import MainHead from '../../Components/SectionsHead/MainHead'
import Main from '../../Images/Recruitment/Main.png'
import RC5 from '../../Images/Recruitment/Ourtrainings.png'
const RecruitmentCard = ({type, title, targetIcon,desc,link }) => {
    return(
        <div className='flex flex-col relative shadow shadow-[#bd996055] bg-[#0000006f] rounded-[25px]'>
            {
                type=== 'Main' ? (
                    <div className='lg:h-[65vh] bg-[#0000006f] shadow-md shadow-[#bd996013] rounded-[25px]'>
                        <img className='w-full h-full rounded-[25px] object-center' src={targetIcon} alt='Recruitment Solutions By Talent Avenue' />
                    </div>
                ) :(
                    <div className='lg:h-[65vh] bg-[#0000006f] shadow-md shadow-[#bd996013] rounded-[25px]' >
                        {title}
                        {desc}
                        {link}
                    </div>
                )
            }
        </div>
    )
}

const RecruitmentSols = () => {
    const BodyText = {
        Name: 'Recruitment Solutions',
        Para: 'Unlock your business potential with Talent Avenue Staffing Solutions. Explore our complete range of services, tailored for organizations of every size and scale.'
    }

    const Recruitments = [
        {
            type:'Main',
            img: Main,
        },{
            type: '',
            title:'Contractual Placements',
            img: RC5,
            desc: 'We manage the entire contract based recruitment process, from candidate search to payroll and administration.',
            link:'/',
        },{
            type: '',
            title:'Permanent Placements',
            img: RC5,
            desc: 'We manage the entire contract based recruitment process, from candidate search to payroll and administration.',
            link:'/',
        },{
            type: '',
            title:'Business Essentials',
            img: RC5,
            desc: 'We manage the entire contract based recruitment process, from candidate search to payroll and administration.',
            link:'/',
        },{
            type: '',
            title:'Outsourcing',
            img: RC5,
            desc: 'We manage the entire contract based recruitment process, from candidate search to payroll and administration.',
            link:'/',
        },{
            type: '',
            title:'Our Trainings',
            img: RC5,
            desc: 'We manage the entire contract based recruitment process, from candidate search to payroll and administration.',
            link:'/',
        },
    ]

    return (
        <div className='flex flex-col items-center my-sm w-[95%] lg:w-[75%] mx-auto '>
            <MainHead title={BodyText.Name} titleColor={'w-1'} description={BodyText.Para} descriptionColor={'w-1'}/>
            <div className='grid grid-cols-[1fr] lg:grid-cols-[1fr,1fr,1fr] gap-[10%] my-5'>
                {
                    Recruitments.map((Child, index) => (  <RecruitmentCard type={Child.type} title={Child.title} desc={Child.desc} link={Child.link} targetIcon={Child.img} key={index} />))
                }
            </div>
        </div>
    )
}

export default RecruitmentSols