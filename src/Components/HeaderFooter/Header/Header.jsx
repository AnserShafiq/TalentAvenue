import React, { useEffect, useState } from 'react';
import Logo from '../../../Images/HeaderFooter/Logo1.png';
import { industriesWeSupport, ourSolutions, whyTalentAvenue } from '../MenuItems';
import { IoMenu as MobileIcon} from "react-icons/io5";
import MobileSideMenu from './MobileSideMenu';
import DropDown from './DropDown';

const Header = () => {
    const [wtaCheck, setWTACheck] = useState(false);
    const [osCheck, setOSCheck] = useState(false);
    const [iwsCheck, setIWSCheck] = useState(false);
    const [findCheck, setFindCheck] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const [ShowHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScroll] = useState(0)

    const HandleScroll = () => {
        if(window.scrollY > lastScrollY && lastScrollY > 100){
            setShowHeader(false)
        }else{
            setShowHeader(true)
        }
        setLastScroll(window.scrollY)
    }


    useEffect(() => {
        window.addEventListener('scroll', HandleScroll);
        return(() => {
            window.removeEventListener('scroll', HandleScroll);
        })
    })

    return (
    <div className={`flex flex-row bg-[#000000] px-X-Header py-Y-Header sticky left-0 top-0 z-10 w-[100%] transition-transform ease-in-out duration-500 shadow-sm shadow-[#bd996055] transform ${ShowHeader ? 'translate-y-0':'-translate-y-full'}`}>

        {/* Mobile Menu */}
        <div className='w-[25%] flex lg:w-[0%] lg:hidden justify-start items-center'>
            <MobileIcon className='text-g-1 text-[2rem]' onClick={() => setOpenMobileMenu(true)}/>
            <MobileSideMenu MenuLogo={Logo} callMobileMenu={setOpenMobileMenu} mobileMenuCalled={openMobileMenu} />
        </div> 

        {/* Logo Section */}
        <div className='w-[50%] lg:w-[20%]'>
            <img src={Logo} alt='Talent Avenue' className='h-auto w-[200px] lg:w-[7rem] 2xl:w-[200px]' onClick={() => window.location.href='/'} />
        </div>

        {/* Desktop Menu Section */}
        <div className='w-[60%] hidden lg:flex justify-center items-center space-x-4'>

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
            <DropDown title={'Find Candidates'} link={'/'} isOpen={findCheck} setIsOpen={setFindCheck}/>
        </div>

    </div>
    );
};

export default Header;
