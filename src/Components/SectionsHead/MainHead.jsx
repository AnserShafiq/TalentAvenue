import React from 'react'
import Underlining from '../HeaderFooter/Underlining'

const MainHead = ({title, titleColor, description, descriptionColor}) => {
    

    return (
        <div className='flex flex-col items-center'>
            <div className={`text-mh-m lg:text-mh-d text-${titleColor} font-bold tracking-wider uppercase text-center flex flex-col relative mb-6 lg:mb-4`}><Underlining bodytext={title} textcolor={titleColor}/> </div>
            <p className={`text-mp-m lg:text-mp-d text-${descriptionColor} font-normal capitalize text-center w-[90%] leading-normal lg:leading-9 lg:mb-4`}>{description}</p>
        </div>
    )
}

export default MainHead