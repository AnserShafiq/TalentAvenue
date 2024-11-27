import React, { useState, useEffect } from 'react';
import Logo from '../../../Images/HeaderFooter/Logo1.png';
import { IoIosCloseCircle as Close } from "react-icons/io";
import { FaAngleDown as Down } from "react-icons/fa6";
import { whyTalentAvenue } from '../MenuItems';
import { Link } from 'react-router-dom';

const MenuSection = ({ menuName, subPages, isOpen, onClick, link, last }) => {
    return (
        <div onClick={onClick} className='relative group mb-3'>
            {
                subPages ? (
                    <>
                        <h3 className={`${isOpen ? 'text-g-1 border-g-1' : 'text-w-1 border-w-1'} text-[1.2rem] cursor-pointer flex justify-between items-center px-1 py-2 border-b-2 transition-colors ease-in-out duration-300`}>
                            {menuName}
                            <Down className={`transition-rotation duration-[0.7s] transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </h3>
                        <div className={`flex-col bg-[#00000022] relative ${isOpen ? 'flex' : 'hidden'} transition-display duration-[0.7s] ease-in-out`}>
                            <div className='flex flex-col px-4'>
                                {
                                    subPages.map((child, index) => (
                                        <Link key={index} to={child.Link} className='py-2 text-g-1 capitalize hover:text-w-1 text-[1.2rem] leading-tight'>
                                            {child.ChildName}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to={link} className={`${isOpen ? 'text-g-1 border-g-1' : 'text-w-1 border-w-1'} text-[1.2rem] cursor-pointer flex justify-between items-center px-1 py-2 ${!last ? 'border-b-2':''} transition-colors ease-in-out duration-300`}>
                            {menuName}
                        </Link>
                    </>
                )
            }
        </div>
    );
};

const MobileSideMenu = ({ menuLogo, callMobileMenu, mobileMenuCalled }) => {
    const [activeMenu, setActiveMenu] = useState(null); // Store the active menu name

    useEffect(() => {
        // Add or remove the `overflow-hidden` class on body based on `mobileMenuCalled`
        if (mobileMenuCalled) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup to ensure no lingering class
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [mobileMenuCalled]);

    return (
        <div className={`flex fixed left-0 top-0 z-[999] w-[100vw] min-h-[100vh] h-auto overflow-auto bg-[#00000044] transition-all ease-in-out duration-[0.7s] transform ${mobileMenuCalled ? 'translate-x-0' : '-translate-x-full'}`} id='SideMenu'>
            <Close className='absolute text-w-1 text-[2rem] top-4 right-4' onClick={() => callMobileMenu(false)} />
            <div className={`flex flex-col justify-between bg-[#262626] w-[85%] max-h-[100vh] overflow-y-auto py-8 transition-all ease-in-out duration-[1s] transform ${mobileMenuCalled ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex relative flex-col justify-center items-center'>
                    <img src={Logo} className='w-[18rem]' alt='Talent avenue logo' />
                </div>
                <div className='flex flex-col px-6 w-full'>
                    <MenuSection
                        menuName={'Home'}
                        link={'/'}
                        isOpen={activeMenu === 'Home'}
                        onClick={() => setActiveMenu(activeMenu === 'Home' ? null : 'Home')}
                    />
                    <MenuSection
                        menuName={whyTalentAvenue.Name}
                        subPages={whyTalentAvenue.ChildPages}
                        isOpen={activeMenu === 'WhyTalentAvenue'}
                        onClick={() => setActiveMenu(activeMenu === 'WhyTalentAvenue' ? null : 'WhyTalentAvenue')}
                    />
                    <MenuSection
                        menuName={'Employers'}
                        link={'/employers'}
                        isOpen={activeMenu === 'Employers'}
                        onClick={() => setActiveMenu(activeMenu === 'Employers' ? null : 'Employers')}
                    />
                    <MenuSection
                        menuName={'Job Seeker'}
                        link={'/job-seekers'}
                        isOpen={activeMenu === 'JobSeeker'}
                        onClick={() => setActiveMenu(activeMenu === 'JobSeeker' ? null : 'JobSeeker')}
                    />
                    <MenuSection
                        menuName={'Industries We Deals'}
                        link={'/industries-we-deal'}
                        isOpen={activeMenu === 'IndustriesWeDeals'}
                        onClick={() => setActiveMenu(activeMenu === 'IndustriesWeDeals' ? null : 'IndustriesWeDeals')}
                        last={true}
                    />
                </div>

                <div className='flex flex-col bottom-0 px-6 items-center'>
                    <Link className='text-[1.1rem] text-g-1 border-b-2 border-g-1 cursor-pointer font-bold tracking-wider leading-tight my-2' path='/'>
                        Looking For A Job?
                    </Link>
                    <h3 className='text-[2rem] capitalize font-semibold text-w-1 text-center'>OR</h3>
                    <Link className='text-[1.1rem]  text-g-1 border-b-2 border-g-1 cursor-pointer font-bold tracking-wider leading-tight my-2' path='/'>
                        Looking For The Candidates?
                    </Link>
                    <h3 className='text-[1rem] capitalize font-semibold text-w-1 text-center mt-6'>
                        Copyright 2021 - All rights reserved.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default MobileSideMenu;
