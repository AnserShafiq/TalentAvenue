import React from 'react'
import RelaxWorkers from '../../../Images/Jobseekers/js2.jpg'
import Underlining from '../../../Components/Underlining'

const JS1 = () => {
    const SectionData = {
        title: 'Thriving in a Dynamic Workplace',
        desc: 'At Talent Avenue, we are committed to your success, offering personalized guidance to help you navigate the complexities of today’s dynamic workplace. With a focus on understanding your unique strengths and aspirations, we ensure you’re prepared to embrace opportunities and overcome challenges in a fast-evolving professional world.',
        desc2:'Our support extends far beyond job placements. We empower you with essential skills, actionable insights, and the confidence to adapt and thrive. Whether you’re seeking growth, stability, or new opportunities, we are here to help you excel in an environment of constant evolution and achieve your career goals.'
    }
  return (
    <div className='flex flex-col-reverse lg:flex-row my-[10%] lg:my-sm w-[95%] lg:w-[85%] 2xl:w-[70%] mx-auto'>
        <div className='flex flex-col justify-center w-full lg:w-[62%] lg:pr-5 '>
            <h3 className='hidden lg:block text-[1.1rem] font-semibold text-w-1 uppercase leading-tight border-b-[1.3px] border-g-1 w-fit tracking-wider'>Our Targets For you</h3>
            <div className='text-mh-m lg:text-mh-d text-center lg:text-start font-bold tracking-wide uppercase px-10 lg:px-0 lg:leading-tight mt-6 lg:my-3' >
                <Underlining bodytext={SectionData.title} textcolor={window.innerWidth < 1000 ? 'w-1': 'g-1'} position={'left'} />
            </div>
            <p className='text-[1.3rem] text-center lg:text-start text-w-1 px-5 lg:px-0 font-[400] my-5'>
                {SectionData.desc}
            </p>
            <p className='hidden lg:block text-[1.3rem] text-w-1 font-[400]'>
                {SectionData.desc2}
            </p>
        </div>
        <div className='flex flex-col w-full lg:w-[38%]'>
            <img className='rounded-[20px] mx-auto w-[92%] lg:w-full h-[35vh] lg:h-full object-cover' src={RelaxWorkers} alt='Success capturing & relaxed jobs - Talent Avenue' />
        </div>
    </div>
  )
}

export default JS1