import React from 'react'
import MainHead from '../../Components/SectionsHead/MainHead'

const ApplicationPage = ({LeftSide,RightSide}) => {
  return (
    <div className='flex flex-col lg:flex-row my-[10%] lg:my-sm w-[95%] lg:w-[80%] 2xl:w-[70%] px-2 lg:px-0 mx-auto'>
        <div className='w-full lg:w-[50%] flex flex-col justify-center items-center lg:justify-start lg:items-start h-fit overflow-y-auto '>
            <MainHead title={LeftSide.Heading} titleColor={'w-1'} description={LeftSide.Description} descriptionColor={'w-1'} textAlign={'text-center lg:text-start'}/>
        </div>
        <div className='w-full lg:w-[50%] mt-4 lg:mt-0'>
            <RightSide />
        </div>
    </div>
  )
}

export default ApplicationPage