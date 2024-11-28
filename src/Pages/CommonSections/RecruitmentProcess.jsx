import React from 'react'
import MainHead from '../../Components/SectionsHead/MainHead'

const RecruitmentProcess = ({Heading,Process}) => {
  return (
    <div className='flex relative flex-col justify-center items-center my-sm w-[95%] lg:w-[80%] 2xl:w-[70%] mx-auto'>
        <MainHead title={Heading} titleColor={'w-1'}/>
        <div className='flex lg:grid flex-col lg:grid-cols-5 gap-y-[2%] lg:gap-y-0 lg:gap-x-[2%] w-[80%] lg:w-full align-center'>
            {
                Process.map((Step, index) => (
                    <div className='flex flex-col border-2 border-[#ffffff11] px-5 py-4 my-4 lg:my-0 bg-[#0000007f] rounded-3xl' key={index}>
                        <h2 className='text-[2.2rem] font-extrabold italic text-g-1 uppercase leading-tight'>Step {Step.no}</h2>
                        <h3 className='text-[1.5rem] font-[500] capitalize leading-tight text-w-1 tracking-wide my-2'>{Step.name}</h3>
                        <p className='text-[1.2rem] font-[300] normal text-w-1 tracking-wide'>{Step.line}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default RecruitmentProcess