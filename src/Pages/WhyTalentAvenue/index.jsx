import React from 'react'
import Section1 from '../CommonSections/Section1'
import Bg from '../../Images/WhyTalentAvenue/wta1.jpg'
import RecruitmentSols from '../CommonSections/RecruitmentSols'
import ContactCard from '../../Components/Cards/ContactCard'
import IntroVideo from '../CommonSections/IntroVideo'
// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import FnF from './Sections/W2'
import GTJD from './Sections/W3'
import Location from '../../Images/Home/location.png'
import Countries from '../../Images/Home/Countries.png'
import People from '../../Images/Home/People.png'
import Handshake from '../../Images/Home/Handshake.png'
import Underlining from '../../Components/Underlining'
import IndustriesIntro from '../CommonSections/IndustriesIntro'
import PoweredByTech from '../CommonSections/PoweredByTech'
import Testimonials from '../CommonSections/OurTestimonials'

const WhyTalentAvenue = () => {

    const DataOne = {
        background : Bg,
        headline: 'Score More With Talent Avenue',
        secondline:'Join us and build a future based on diversity, inclusion, and human potential',
    }

    const PageMenu = [
        {
            title: 'Facts & Figures',
            link: './#facts&figures',
            last:false,
        },{
            title: 'Solutions',
            link: './#solutions',
            last:false,
        },{
            title: 'Intro to technology',
            link: './#intrototechnology',
            last:false,
        },{
            title: 'Testimonials',
            link: './#testimonials',
            last: true,
        },
    ]
    const ContactData = {
        mainheading: (
          <>
            Want to see how <span className='px-0 py-0 lg:px-2 leading-tight font-semibold'> <Underlining bodytext={'Talent Avenue'} textcolor={'w-1'}/> </span>serves it's clients?
          </>
        ),
        mainDesc: "No matter the size of your hiring needs, we’ve got you covered – From Temporary Staffing to direct hires, we're ready to assist you.",
        button: 'Contact Us Now',
        buttonLink: '/',
        subHead: 'Your advantages with talent avenue',
        subOptions:[
          {
            icons:Countries,
            name: `Multiple States`,
          },{
            icons:Handshake,
            name: '1000s Of Clients',
          },{
            icons:Location,
            name: '40+ locations',
          },{
            icons:People,
            name: '500+ People on assignment',
          },
        ],
      }

    return (
        <>
            <Section1 background={DataOne.background} bgPosition={'object-center'} headline={DataOne.headline} secondline={DataOne.secondline} UC={false}/>
            <div className=' w-[80%] mx-auto my-[1%] hidden lg:flex flex-row justify-center items-center'>
                {
                    PageMenu.map((Menu, index) => (
                        <div key={index} className={`flex justify-center items-center px-[4%] ${Menu.last ? 'border-r-2 border-transparent' : 'border-r-2 border-g-1'} `}>
                            <HashLink key={Menu.title} to={Menu.link} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}  className='text-g-1 font-[500] tracking-wide uppercase text-[1.1rem]'>{Menu.title}</HashLink>
                        </div>
                    ))
                }
            </div>
            
            <div id='facts&figures'/>
            <FnF />
            
            <div id=''/>
            <GTJD />
            
            <div id='solutions'/>
            <RecruitmentSols />

            <div className='my-[5%]'>
            <ContactCard mainHead={ContactData.mainheading} mainDesc={ContactData.mainDesc} button={ContactData.button} buttonLink={ContactData.buttonLink} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
            </div>

            <IntroVideo/>
            
            <IndustriesIntro />
            
            <div id='intrototechnology'/>
            <PoweredByTech />

            <div id='testimonials'/>
            <Testimonials Numbers={['One','Three', 'Five']}/>


            <div className='my-[5%]'>
            <ContactCard mainHead={ContactData.mainheading} mainDesc={ContactData.mainDesc} button={ContactData.button} buttonLink={ContactData.buttonLink} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
            </div>
        </>
    )
}

export default WhyTalentAvenue