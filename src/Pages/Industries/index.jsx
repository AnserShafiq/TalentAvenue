import React from 'react'
import Section1 from '../CommonSections/Section1'
import Ind1 from '../../Images/Industries/Ind1.jpg'
import IndustriesList from './Sections/Ind1'
import Ind2 from './Sections/Ind2'
import Location from '../../Images/Home/location.png'
import Countries from '../../Images/Home/Countries.png'
import People from '../../Images/Home/People.png'
import Handshake from '../../Images/Home/Handshake.png'
import ContactCard from '../../Components/Cards/ContactCard'
import Underlining from '../../Components/Underlining'

const OurIndustries = () => {

  const ContactData = {
    mainheading: (
      <>
        Want to know how <span className='px-0 py-0 lg:px-2 leading-tight font-semibold'> <Underlining bodytext={'Talent Avenue'} textcolor={'w-1'}/> </span>delivers services?
      </>
    ),
    mainDesc: "Be it your dream job or the perfect hire, our permanent placement solutions cater to your specific needs with unmatched attention.",
    button: 'To Get Linked',
    buttonLink: 'Popup',
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

  const PageHead = {
    bg: Ind1,
    headline: 'Revolutionizing Staffing Excellence',
    secondline : 'Our innovative staffing approach redefines the industry, delivering exceptional dedication to clients & candidates. we connect top talent to leading organizations for lasting success.',
  }
  return (
    <div>
      <Section1 headline={PageHead.headline} secondline={PageHead.secondline} background={PageHead.bg} bgPosition={'object-bottom'}/>
      <IndustriesList />
      <Ind2 />
      <div className='my-[5%]'>
        <ContactCard mainHead={ContactData.mainheading} mainDesc={ContactData.mainDesc} button={ContactData.button} buttonLink={ContactData.buttonLink} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
      </div>

    </div>
  )
}

export default OurIndustries