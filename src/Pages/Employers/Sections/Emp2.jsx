import React from 'react'
import DisplayImg from '../../../Images/Employers/emp2.jpg'
import MainHead from '../../../Components/SectionsHead/MainHead'
import { IoCheckmarkCircleOutline as Check} from "react-icons/io5";
const Emp2 = () => {
    const Content={
        title: "Enhance your team's diversity",
        desc1:`Cultivating an equitable and inclusive culture is paramount for the success and longevity of your business. We are here to assist you whenever you need us`,
    }
    const Points = [
      "When you've made a commitment to enhance diversity in your hiring practices.",
      "When you seek a personal consultant with industry experience and an extensive network.",
      "When you recognize the value of the change but are unsure where to begin.",
      "When you lack an HR department dedicated to fostering a more equitable working environment."
    ]
    
    return (
        <div className='flex relative flex-col justify-center items-center my-sm w-[95%] lg:w-[80%] 2xl:w-[70%] h-[100%] mx-auto'>
            <img className={`w-full h-[50vh] lg:h-[80vh] object-[78%] lg:object-center object-cover rounded-[20px]`} src={DisplayImg} alt={`${Content.title} - Pic `} />
            <div className='relative mt-6 lg:mt-0 lg:absolute lg:top-0 left-0 h-full lg:bg-[#0000007a] lg:px-[6%] flex flex-col rounded-[20px] justify-center'>
                <MainHead title={Content.title} titleColor={'w-1'} description={Content.desc1} descriptionColor={'w-1'}  />
                <div className='grid lg:grid-cols-2 w-[90%] mx-auto'>
                  {Points.map((P,index) => (
                    <div key={index} className='flex flex-row py-4 px-1' >
                      <div className='w-[6%] text-[1.1rem] lg:text-[1.3rem] text-g-1 pt-[1.75%] lg:pt-2' ><Check /></div>
                      <div className='w-[90%] text-[1.1rem] lg:text-[1.3rem] text-w-1 ml-2'>{P}</div>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    )
}

export default Emp2