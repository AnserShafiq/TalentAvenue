import React from 'react'
import MainHead from '../../Components/SectionsHead/MainHead'

const ApplicationPage = ({LeftSide,RightSide}) => {
  return (
    <div className='flex flex-col lg:flex-row my-[10%] lg:my-sm w-[95%] lg:w-[80%] 2xl:w-[70%] mx-auto'>
        <div className='w-full lg:w-[50%] flex flex-col justify-center items-center lg:justify-start lg:items-start lg:sticky top-[15%] h-fit overflow-y-auto '>
            <MainHead title={LeftSide.Heading} titleColor={'w-1'} description={LeftSide.Description} descriptionColor={'w-1'} textAlign={'text-start'}/>
        </div>
        <div>
            <RightSide />
        </div>
    </div>
  )
}

export default ApplicationPage