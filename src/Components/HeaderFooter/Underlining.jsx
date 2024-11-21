import React from 'react'
import UL from '../../Images/underlineCurve.png'
const Underlining = ({bodytext,textcolor}) => {
  return (
    <h3 className={`flex flex-col relative text-${textcolor} `}> 
        {bodytext}
        <img className={`object-fixed absolute bottom-[-5%] lg:bottom-[0%] h-[12px] w-full`} src={UL} alt='Special Underlining 1' />
    </h3>
  )
}

export default Underlining