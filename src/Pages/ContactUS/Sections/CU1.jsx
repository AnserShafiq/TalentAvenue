import React from 'react'
import MainHead from '../../../Components/SectionsHead/MainHead'
import { FaEnvelopeOpenText as Mail} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PiPhoneCallDuotone as Call} from "react-icons/pi";
import { HiOutlineOfficeBuilding as Office} from "react-icons/hi";

const CU1 = () => {

    const HeadingContent = {
        title: 'Precision Meets Empathy',
        desc: 'By blending cutting-edge technology with a people-first approach, we craft personalized experiences that truly resonate. Our solutions empower both individuals and businesses, driven by empathy and attention to every detail.',
    }

  return (
    <div className='flex flex-col my-[10%] lg:my-sm w-[95%] lg:w-[80%] 2xl:w-[70%] mx-auto'>
        <MainHead title={HeadingContent.title} titleColor={'w-1'} description={HeadingContent.desc} descriptionColor={'w-1'}/>
        <div className='flex flex-col lg:flex-row items-center justify-around mt-5'>
            
            <div className='flex flex-col w-[300px] lg:w-[370px] lg:min-h-[280px] items-center my-4 lg:my-0 py-4 lg:py-8 px-8 rounded-[20px] bg-transparent-black-70'>
                <Mail className='text-[5rem] text-g-1' />
                <h3 className='text-[1.7rem] lg:text-[2rem] font-semibold uppercase text-g-1 mt-2'>
                    To Mail Us
                </h3>
                <Link className='text-[1.2rem] lg:text-[1.5rem] text-w-1 border-b-[1px] border-transparent transition-all duration-[0.3s] hover:text-g-1 hover:underline hover:scale-[1.04]' to={'mailto:info@talentavenue.ca'}>info@talentavenue.ca</Link>
            </div>

            <div className='flex flex-col w-[300px] lg:w-[370px] lg:min-h-[280px] items-center my-4 lg:my-0 py-4 lg:py-8  px-8 rounded-[20px] bg-transparent-black-70'>
                <Call className='text-[5rem] text-g-1' />
                <h3 className='text-[1.7rem] lg:text-[2rem] font-semibold uppercase text-g-1 mt-2'>
                    To Contact Us
                </h3>
                <Link className='text-[1.2rem] lg:text-[1.5rem] text-w-1 border-b-[1px] border-transparent transition-all duration-[0.3s] hover:text-g-1 hover:underline hover:scale-[1.04]' to={'mailto:info@talentavenue.ca'}>(123) 456 7890</Link>
            </div>

            <div className='flex flex-col w-[300px] lg:w-[370px] lg:min-h-[280px] items-center my-4 lg:my-0 py-4 lg:py-8  px-8 rounded-[20px] bg-transparent-black-70'>
                <Office className='text-[5rem] text-g-1' />
                <h3 className='text-[1.7rem] lg:text-[2rem] font-semibold uppercase text-g-1 mt-2'>
                    Our Location
                </h3>
                <Link className='text-[1.2rem] lg:text-[1.5rem] text-w-1 border-b-[1px] border-transparent transition-all duration-[0.3s] hover:text-g-1 hover:underline hover:scale-[1.04] text-center' to={'mailto:info@talentavenue.ca'}>2424 Finch Ave W#18, Torontto, Canada </Link>
            </div>

        </div>
    </div>
  )
}

export default CU1