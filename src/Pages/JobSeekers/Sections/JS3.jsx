import React from 'react'
import DisplayImg from '../../../Images/Jobseekers/js4.jpg'
import MainHead from '../../../Components/SectionsHead/MainHead'
import { IoCheckmarkCircleOutline as Check} from "react-icons/io5";
const JS3 = () => {
    const Content={
        title: window.innerWidth < 1000 ? "Right Career Path":"Find the Right Career Path",
        desc1:`Building a successful career begins with finding the perfect opportunity. We're here to support you every step of the way:`,
    }
    const Points = [
      "When you're ready to take the next step and explore career opportunities.",
      "When you're unsure how to start your journey to a fulfilling career.",
      "When you need expert guidance and access to a vast network of job openings.",
      "When you seek a partner dedicated to aligning your skills with the right role."
    ]
    
    return (
        <div className='flex relative flex-col justify-center items-center my-sm lg:mt-[10%] lg:mb-[5%] w-[95%] lg:w-[80%] 2xl:w-[70%] h-[100%] mx-auto'>
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

export default JS3