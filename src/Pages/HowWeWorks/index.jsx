import React from 'react'
import Section1 from '../CommonSections/Section1'
import Bg from '../../Images/HowWeWorks/hww-1.jpg'
import HWW1 from './Sections/HWW1'
import HWW2 from './Sections/HWW2'
import PoweredByTech from '../CommonSections/PoweredByTech'
import ContactCard from '../../Components/Cards/ContactCard'
import Location from '../../Images/Home/location.png'
import Countries from '../../Images/Home/Countries.png'
import People from '../../Images/Home/People.png'
import Handshake from '../../Images/Home/Handshake.png'
import Underlining from '../../Components/Underlining'
const HowWeWorks = () => {

    const Data = {
        background: Bg,
        title: 'How we work',
        desc:'At Talent Avenue, we employ the very best staffing and recruiting experts in your industry. We use our extensive reach and the world’s largest network of candidates to find you the best people when you need them - at any scale of your business.',
    }

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
        <Section1 background={Bg} bgPosition={'object-center'} headline={Data.title} secondline={Data.desc} />

        <HWW2 />

        <HWW1 />        

        <PoweredByTech />

        <div className='my-[5%]'>
            <ContactCard mainHead={ContactData.mainheading} mainDesc={ContactData.mainDesc} button={ContactData.button} buttonLink={ContactData.buttonLink} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
        </div>

    </>
  )
}

export default HowWeWorks