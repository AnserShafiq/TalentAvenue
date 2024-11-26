import React, { useEffect, useState } from 'react'
import MainHead from '../../Components/SectionsHead/MainHead'
import Insights from '../../Images/Icons/Ourtrainings2.png'
import Nurture from '../../Images/Icons/Nurture.png'
import Attract from '../../Images/Icons/Attract2.png'
import Engage from '../../Images/Icons/Engage.png'
import Access from '../../Images/Icons/Access.png'
import Hire from '../../Images/Icons/Hire.png'

const PoweredByTech = () => {
    const MainHeadContent = {
        D_title: 'Powered By Technology',M_title: 'Powered By Tech',
        desc: 'At Talent Avenue, we specialize in unearthing and placing top-tier professionals to unlock your business’s fullest potential regardless of the industry you’re operating in. We are skilled at seamlessly overcoming any sector-specific hurdles when it comes to fulfilling all your staffing needs.'
    }

    const IconsDesc = [
        {
            icon: Nurture,
            name: 'Nurture',
            desc: 'Using our extensive proprietary data, we nurture existing talent, ensuring you have a pool of great candidates ready when you need them.'
        },{
            icon: Attract,
            name: 'Attract',
            desc: 'We use the hottest job boards and social media channels as well as leverage programmatic advertising to source the best and hardest-to-find candidates.'
        },{
            icon: Engage,
            name: 'Engage',
            desc: 'We use a number of digital channels to engage talent for your business, from email to our branded candidate apps and chatbots.'
        },{
            icon: Access,
            name: 'Access',
            desc: 'To make sure we only deliver the best candidates, our digital tools include a large array of tests and assessments, customized based on your needs.'
        },{
            icon: Hire,
            name: 'Hire and onboard',
            desc: 'We enable a completely digital onboarding path for candidates so they can sign, upload, and be verified in just a few clicks.'
        },{
            icon: Insights,
            name: 'Insights',
            desc: 'We provide you with direct labour market intelligence and can advise you on the next best action for your business.'
        },
    ]
    const [mobileCheck, setMobileView] = useState(false);

    useEffect(() => {
        if(window.innerWidth < 1000){
            setMobileView(true);
        }else{
            setMobileView(false)
        }
    },[setMobileView])
    return (
    <div className='flex relative flex-col justify-center items-center my-sm w-[95%] lg:w-[80%] 2xl:w-[70%] h-[100%] mx-auto'>
        
        
        
        <MainHead title={mobileCheck ? (MainHeadContent.M_title):(MainHeadContent.D_title)} titleColor={'w-1'} description={MainHeadContent.desc} descriptionColor={'w-1'} />
        <div className='flex flex-col lg:grid lg:grid-cols-3 w-[80%] lg:w-full gap-y-10 lg:gap-y-8 lg:gap-x-8 my-5'>
            {
                IconsDesc.map((ActiveIcon, index) => (
                    <div className='flex flex-col justify-start items-start lg:flex-row' key={index}>
                        <div className='h-fit lg:w-[30%] flex justify-center'>
                            <img className='w-[6rem] lg:w-[80%]' src={ActiveIcon.icon} alt={`${ActiveIcon.name} - icon`} />
                        </div>
                        <div className='lg:w-[70%] lg:max-w-[70%]'>
                            <h3 className='uppercase text-g-1 text-[1.8rem] font-[400]'>{ActiveIcon.name}</h3>
                            <p className='capitalize text-cardText-d text-w-1 font-[300]'>{ActiveIcon.desc}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PoweredByTech