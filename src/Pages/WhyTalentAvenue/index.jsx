import React from 'react'
import Section1 from '../CommonSections/Section1'
import Bg from '../../Images/WhyTalentAvenue/wta1.jpg'
import RecruitmentSols from '../CommonSections/RecruitmentSols'
import ContactCard from '../../Components/Cards/ContactCard'
import IntroVideo from '../CommonSections/IntroVideo'
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
import PageSubMenu from '../../Components/PageMenu'

const WhyTalentAvenue = () => {

    const DataOne = {
        background : Bg,
        headline: 'Score More With Talent Avenue',
        secondline:'Join us and build a future based on diversity, inclusion, and human potential',
    }

    const PageMenuData = [
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
        mainheading: [(
          <>
            Ever thought how<span className='px-0 py-0 lg:px-2 leading-tight font-semibold'> <Underlining bodytext={'Talent Avenue'} textcolor={'w-1'}/> </span>makes perfect matches?
          </>
        ),
        (
          <>
            Want to understand <span className='px-0 py-0 lg:px-2 leading-tight font-semibold'> <Underlining bodytext={"Talent Avenue's"} textcolor={'w-1'}/> </span>secret to success?
          </>
        )
      ],
        mainDesc: ['From job seekers to employers, our permanent placement solutions are focused on delivering results with care.','Whether matching jobs or talent, our permanent placement services are built around your precise needs and goals.'],
        button: ['Explore Us Now','To Learn More'],
        buttonLink: ['/industries-we-deal','/how-we-work'],
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
            
            <PageSubMenu menubody={PageMenuData} />
            
            <div id='facts&figures'/>
            <FnF />
            
            <div id=''/>
            <GTJD />
            
            <div id='solutions'/>
            <RecruitmentSols />

            <div className='my-[5%]'>
            <ContactCard mainHead={ContactData.mainheading[0]} mainDesc={ContactData.mainDesc[0]} button={ContactData.button[0]} buttonLink={ContactData.buttonLink[0]} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
            </div>

            <IntroVideo/>
            
            <IndustriesIntro />
            
            <div id='intrototechnology'/>
            <PoweredByTech />

            <div id='testimonials'/>
            <Testimonials Numbers={['One','Three', 'Five']}/>


            <div className='my-[5%]'>
            <ContactCard mainHead={ContactData.mainheading[1]} mainDesc={ContactData.mainDesc[1]} button={ContactData.button[1]} buttonLink={ContactData.buttonLink[1]} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
            </div>
        </>
    )
}

export default WhyTalentAvenue