import React from 'react'
import F1 from './Sections/F1'
import F2 from './Sections/F2'
import ContactCard from '../../Components/Cards/ContactCard'
import Location from '../../Images/Home/location.png'
import Countries from '../../Images/Home/Countries.png'
import People from '../../Images/Home/People.png'
import Handshake from '../../Images/Home/Handshake.png'
import Underlining from '../../Components/Underlining'

const FAQs = () => {
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
            <F1 />
            <F2 />
            <ContactCard mainHead={ContactData.mainheading} mainDesc={ContactData.mainDesc} button={ContactData.button} buttonLink={ContactData.buttonLink} subHead={ContactData.subHead} subOptions={ContactData.subOptions}/>
            <div className='mb-[5%]'/>
        </>
    )
}

export default FAQs