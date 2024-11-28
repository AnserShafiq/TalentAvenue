import React, { useEffect, useState } from 'react'
import UL from '../Images/underlineCurve.png'
const Underlining = ({bodytext,textcolor,position}) => {

  const [ulWidth, setULWidth] = useState('w-full')

  useEffect(() => {
    if(bodytext.length > 24 && window.innerWidth <= 1000){
      setULWidth('w-[60%] mx-[20%]')
    }
    else if(bodytext.length > 27 && position !== 'left' ){
      setULWidth('w-[75%] mx-[12.5%]')
    }
  },[setULWidth,bodytext,position])

  return (
    <h3 className={`flex flex-col relative text-${textcolor} w-fit`}> 
        {bodytext}
        <img className={`object-fixed ${position === 'left' && window.innerWidth > 1000 ? 'ml-0': ''} absolute bottom-[-5%] lg:bottom-[0%] h-[12px] ${ulWidth} 2xl:h-[14px] 2xl:bottom-[-13%]`} src={UL} alt='Special Underlining 1' />
    </h3>
  )
}

export default Underlining