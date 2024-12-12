import React from 'react';
import MainHead from '../../Components/SectionsHead/MainHead';
import Logo from  '../../Images/icon.png'
import './style.css'

const UnderConstruction = () => {
    const BodyText = {
        title: (
            <>
                <span className='hidden lg:block'>Website Under Development</span> <span className='block lg:hidden'>Under Development</span>
            </>
        ),
        description: (
            <>
                Sorry for your inconvenience, our website is under development and will be live sooner. For any kind of query, you can mail us at{' '}
                <a className="text-g-1 lowercase transitive-underline" href="mailto:info@talentavenue.ca">
                    info@talentavenue.ca
                </a>.
            </>
        ),
    };

    return (
        <div className="flex flex-col justify-center items-center bg-[#0303037f] px-4 py-8 lg:p-10 rounded-[20px] shadow-xl shadow-[#bc9a6411] w-[95%] lg:w-[50vw] mx-auto">
            <img className='mb-4 lg:mb-2 w-auto lg:w-[10rem]' src={Logo} alt='Talent Avenue'/>
            <MainHead
                title={BodyText.title}
                titleColor={'w-1'}
                description={BodyText.description}
                descriptionColor={'w-1'}
            />
        </div>
    );
};

export default UnderConstruction;
