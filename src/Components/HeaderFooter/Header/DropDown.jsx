import React from 'react'
import { FaAngleDown as Down } from "react-icons/fa6";
import DropBg from '../../../Images/HeaderFooter/dropBg.png';
import { Link } from 'react-router-dom';

const DropDown = ({ title, content, isOpen, setIsOpen,link }) => {
    return(
        <div className='relative group' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        {
            content ? (
                <>
                <h3 className={`${isOpen ? 'text-g-1 border-g-1' : 'text-w-1 border-transparent'} text-[1.05rem] uppercase cursor-pointer flex tracking-wider items-center px-1 py-[0.5%] my-2 border-b-2 transition-colors ease-in-out duration-300`}>{title} <Down className="ml-1" /></h3>
                <div className={`flex-row absolute bg-[var(--dropdown-bg)] translate-x-header-drop-x left-0 ${isOpen ? 'flex' : 'hidden'} shadow-lg rounded-md w-[40rem] h-[275px]`}>
            
                    <div className='flex relative justify-center items-center h-full w-[50%] max-w-[50%]'>
                        <img src={DropBg} className=' h-full object-cover w-full rounded-s-md' alt="Why Talent Avenue? " />
                        <div className='absolute flex flex-col justify-center items-center w-[100%] h-full top-0 left-0 '>
                            {content.left}
                        </div>
                    </div> 

                    <div className={`flex flex-col ${title === 'Industries we support' ? 'justify-start':'justify-center'} h-[90%] max-h-full overflow-y-auto w-[49%] px-8 my-auto`}>
                        {content.right.map((child, index) => (
                            <Link key={index} path={child.Link} className='py-2 text-g-1 uppercase hover:text-w-1 text-[1.07rem] leading-tight' >{child.ChildName}</Link>
                        ))}
                    </div>
                </div>
                </>
            ):(
                <>
                    <Link className={`${isOpen ? 'text-g-1 border-g-1' : 'text-w-1 border-transparent'} text-[1.05rem] uppercase cursor-pointer flex items-center px-1 py-[0.5%] my-2 border-b-2 transition-colors ease-in-out duration-300`} path={link}>{title}</Link>
                </>
            )
        }
        
    </div>
    )
}

export default DropDown