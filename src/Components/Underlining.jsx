import React from 'react'
import UL from '../Images/underlineCurve.png'
const Underlining = ({bodytext,textcolor}) => {
  return (
    <h3 className={`flex flex-col relative text-${textcolor} w-fit`}> 
        {bodytext}
        <img className={`object-fixed absolute bottom-[-5%] lg:bottom-[0%] h-[12px] w-full 2xl:h-[14px] 2xl:bottom-[-13%]`} src={UL} alt='Special Underlining 1' />
    </h3>
  )
}

export default Underlining