import React, { useState } from 'react';
import Logo from '../../Images/HeaderFooter/Logo1.png';
import { industriesWeSupport, ourSolutions, whyTalentAvenue } from './MenuItems';
import { FaAngleDown as Down } from "react-icons/fa6";
import DropBg from '../../Images/HeaderFooter/dropBg.png';

const DropDown = ({ title, content, isOpen, setIsOpen }) => {
    return(
        <div className='relative group' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>

        <h3 className={`${isOpen ? 'text-g-1 border-g-1' : 'text-w-1 border-transparent'} cursor-pointer flex items-center px-1 py-[0.5%] my-2 border-b-2 transition-colors ease-in-out duration-300`}>{title} <Down className="ml-2" /></h3>

        <div className={`flex-row absolute bg-dropdown-bg translate-x-header-drop-x left-0 ${isOpen ? 'flex' : 'hidden'} bg-gray-800 shadow-lg rounded-md w-[40rem] h-[275px]`}>
            
            <div className='flex relative justify-center items-center h-full w-[50%] max-w-[50%]'>
                <img src={DropBg} className=' h-full object-cover w-full rounded-s-md' alt="Why Talent Avenue? " />
                <div className='absolute flex flex-col justify-center items-center w-[100%] h-full top-0 left-0 '>
                    {content.left}
                </div>
            </div> 

            <div className={`flex flex-col ${title === 'Industries we support' ? 'justify-start':'justify-center'} h-[90%] max-h-full overflow-y-auto w-[49%] px-8 my-auto`}>
                {content.right.map((child, index) => (
                    <a key={index} href={child.Link} className='py-2 text-g-1 capitalize hover:text-w-1 text-[1.2rem] leading-tight' >{child.ChildName}</a>
                ))}
            </div>
        </div>
    </div>
    )
}

const Header = () => {
    const [wtaCheck, setWTACheck] = useState(false);
    const [osCheck, setOSCheck] = useState(false);
    const [iwsCheck, setIWSCheck] = useState(false);

    return (
    <div className='flex flex-row bg-[#000000] px-X-Header py-Y-Header relative'>
        {/* Logo Section */}
        <div className='w-[25%]'>
        <img src={Logo} alt='Talent Avenue' className='h-auto w-[175px]' />
        </div>

        {/* Menu Section */}
        <div className='w-[50%] flex justify-center items-center space-x-4'>

            {/* Why Talent Avenue */}
            <DropDown 
                title={whyTalentAvenue.Name}
                content={{
                    left: (
                        <>
                            <h2 className='text-g-1 text-[4rem] mb-3'>{whyTalentAvenue.Icon}</h2>
                            <h3 className='text-[1.3rem] capitalize tracking-wider font-[600] text-w-1'>{whyTalentAvenue.TaglineSimple}</h3>
                            <h3 className='text-[1.5rem] capitalize tracking-wider font-[700] text-g-1 pb-0 border-b-[2px] border-g-1'>{whyTalentAvenue.TaglineUnderlined}</h3>
                        </>
                    ),
                    right:whyTalentAvenue.ChildPages,
                }}
                isOpen={wtaCheck}
                setIsOpen={setWTACheck}
            />
            {/* Our Solutions */}
            <DropDown 
                title={ourSolutions.Name}
                content={{
                    left: (
                        <>
                            <h2 className='text-g-1 text-[4rem] mb-3'>{ourSolutions.Icon}</h2>
                            <h3 className='text-[1.3rem] capitalize tracking-wider font-[600] text-w-1'>{ourSolutions.TaglineSimple}</h3>
                            <h3 className='text-[1.5rem] capitalize tracking-wider font-[700] text-g-1 pb-0 border-b-[2px] border-g-1'>{ourSolutions.TaglineUnderlined}</h3>
                        </>
                    ),
                    right:ourSolutions.ChildPages,
                }}
                isOpen={osCheck}
                setIsOpen={setOSCheck}
            />
            {/* Industries We Support */}
            <DropDown 
                title={industriesWeSupport.Name}
                content={{
                    left:(
                        <>
                            <h2 className='text-g-1 text-[4rem] mb-3'>{industriesWeSupport.Icon}</h2>
                            <h3 className='text-[1.3rem] capitalize tracking-wider font-[600] text-w-1'>{industriesWeSupport.TaglineSimple}</h3>
                            <h3 className='text-[1.5rem] capitalize tracking-wider font-[700] text-g-1 pb-0 border-b-[2px] border-g-1'>{industriesWeSupport.TaglineUnderlined}</h3>
                        </>
                    ),
                    right: industriesWeSupport.ChildPages,
                }}
                isOpen={iwsCheck}
                setIsOpen={setIWSCheck}
            />
        </div>

    </div>
    );
};

export default Header;
