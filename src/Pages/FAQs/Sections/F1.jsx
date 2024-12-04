import React, { useEffect, useState } from 'react';
import sideIcon from '../../../Images/FAQ/F1-1.png'
import background1 from '../../../Images/FAQ/F1-2.jpg';
import background2 from '../../../Images/FAQ/F1-3.jpg'
import { Link } from 'react-router-dom';

const F1 = () => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        if(window.innerWidth < 1000){
            setMobile(true)
        }else{
            setMobile(false)
        }
    },[setMobile])


    return (
        <div className="flex relative flex-col items-center relative">
        <img 
            src={
                mobile ? background2: background1
            } 
            className={`object-center object-cover z-0 w-full h-[70vh] lg:h-full lg:max-h-[88vh] 2xl:max-h-[85vh] `} 
            alt="Talent Avenue - Page's Head" 
        />
        <div className='flex flex-col lg:flex-row items-center bg-[#303030AD] lg:bg-transparent rounded-[20px] text-center lg:text-start absolute w-[90%] lg:w-[50%] 2xl:w-[43%] mx-auto lg:mx-0 max-w-[1350px] px-[3%] lg:ml-[3%] lg:px-[5%] py-[5%] lg:py-[2%] bottom-[7%] lg:top-0 lg:left-0 lg:h-full'> 
            <img className= 'hidden lg:block h-[400px] ' src={sideIcon} alt="Talent Avenue's FAQS"/>
            <div className='flex flex-col'>
                <h3 className='text-w-1 text-[1.6rem] mb-4 lg:mb-0 lg:text-[2.2rem] leading-tight capitalize font-semibold'>Find quick answers on Talent Avenue’s FAQ page. Simplifying your path to success with clear insights & helpful guidance.</h3>
                <Link to={'/'} className='text-w-1 text-[1.6rem] mb-4 lg:mb-0 lg:text-[2.2rem] leading-tight capitalize font-[500]'>Explore Now !!!</Link>
            </div>
        </div>
        </div>
    );
};

export default F1;
