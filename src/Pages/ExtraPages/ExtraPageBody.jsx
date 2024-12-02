import React from 'react'
import MainHead from '../../Components/SectionsHead/MainHead'
// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const ExtraPageBody = ({PageHeading,PageContent}) => {

    return (
    <div className='flex flex-col lg:flex-row my-[10%] lg:my-sm w-[95%] lg:w-[80%] 2xl:w-[70%] mx-auto'>
        <div className='w-full lg:w-[50%] flex flex-col justify-center items-center lg:justify-start lg:items-start lg:sticky top-[15%] h-fit overflow-y-auto '>
            <MainHead title={PageHeading} titleColor={'w-1'}/>
            <ul className='hidden lg:block' style={{marginLeft:'0.5rem'}}>
                {
                    PageContent.map((Target, index) => (
                        Target.No === 0 ? (null): (<li className='text-w-1 font-[500] tracking-wide capitalize text-[1.2rem] my-2' key={index}><HashLink key={Target.Title} to={`./#${Target.Id}`} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}  className='hover:text-g-1 hover:underline hover:underline-offset-4'>{Target.No}. {Target.Title}</HashLink></li>)
                    ))
                }
            </ul>
        </div>
        <div className='w-[96%] lg:w-[50%] flex flex-col bg-[#323337] mx-auto px-5 pt-4 pb-6'>
            {
                PageContent.map((Point, index) => (
                    <div className='flex flex-col' id={Point.Id} key={index}>
                        {Point.No === 0 ? (null):(<h3 className='text-[1.4rem] capitalize font-bold tracking-wide mt-3 text-w-1'>{Point.No}. {Point.Title}</h3>)}
                        <div className='text-[1.1rem] text-w-1 font-[300]'>
                            {Point.Description}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ExtraPageBody