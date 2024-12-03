import React, { useState } from 'react';
// import './ComponentsStyles/popup.css';
import { IoCloseCircleOutline as CloseIcon} from "react-icons/io5";
import { Link } from 'react-router-dom';
import Underlining from './Underlining';



export default function Popup({children, btnCSS}) {
    
    const DataDisplay = (props) => {


        return props.trigger ? (
            <div className='fixed top-0 left-0 h-full w-full flex flex-col items-center justify-center bg-[#000000cf]'>
                <div className={`w-[88%] lg:w-[35vw] 2xl:w-[33vw] h-[40vh] lg:h-[45vh] 2xl:h-[43vh] relative `}>
                    <div className='bg-PopUpBg-1 bg-center bg-cover h-full w-full rounded-[20px]' alt='Pop Up Background'/>
                    <div className='absolute top-0 left-0 w-full h-full bg-[#0000008f] rounded-[20px] flex flex-col items-center justify-center'>
                        <button className='absolute top-[-10%] lg:top-[2%] text-g-1 bg-[#00000055] rounded-[50%] text-[1.7rem] right-[2%]' onClick={() => props.setTrigger(false)}><CloseIcon /></button>
                        {props.children}
                    </div>
                </div>
            </div>
        ) : '';
    };
    
    const [popupCall, setPopupCall] = useState(false); 

    return (
        <div className='z-[1]'>
            <button className={` ${btnCSS}`} onClick={() => setPopupCall(true)}>{children}</button>
            <DataDisplay trigger={popupCall} setTrigger={setPopupCall}>
                <div className='flex flex-col justify-end h-full pb-8 lg:pb-12'>
                    <div className='font-bold tracking-wide lg:text-[1.8rem] leading-relaxed mb-4'><Underlining bodytext={'What are you looking for?'} textcolor={'w-1'}/></div>
                    <div className='flex flex-col items-center'>
                        <Link className='px-3 py-[1.5%] capitalize text-g-1 rounded-[20px] border-2 text-[1.1rem] lg:text-[1.3rem] bg-[#00000055] hover:bg-black tranisition-transform duration-[0.5s] ease-in-out hover:scale-[1.05]  border-g-1 w-fit mb-4' to='/job-seekers/job-application'>Looking for jobs </Link>
                        <Link className='px-3 py-[1.5%] capitalize text-g-1 rounded-[20px] border-2 text-[1.1rem] lg:text-[1.3rem] bg-[#00000055] hover:bg-black tranisition-transform duration-[0.5s] ease-in-out hover:scale-[1.05]  border-g-1 w-fit' to='/employers/employees-required'>Looking for candidates</Link>
                    </div>
                </div>
        </DataDisplay>
        </div>
    );
}