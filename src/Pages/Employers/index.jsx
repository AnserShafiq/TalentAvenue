import React from 'react'
import Section1 from '../CommonSections/Section1'
import HeadBg from '../../Images/Employers/emp1.jpg'
import Emp1 from './Sections/Emp1'
import Emp2 from './Sections/Emp2'
import RecruitmentProcess from './Sections/RecruitmentProcess'
import ContactCard from '../../Components/Cards/ContactCard'
import Location from '../../Images/Home/location.png'
import Countries from '../../Images/Home/Countries.png'
import People from '../../Images/Home/People.png'
import Handshake from '../../Images/Home/Handshake.png'
import Underlining from '../../Components/Underlining'
const Employers = () => {
  
    const PageHead = {
        bg: HeadBg,
        title: 'Inclusion at the Heart of Success',
        description: 'Diversity & inclusion are vital for success. Talent Avenue helps build diverse teams that foster innovation, improve decision-making, & boost productivity while creating an engaging & positive culture.',
    }

    const EmploymentProcess =[
        {
            no:1,
            name:'Focused Needs Assessment',
            line:'Understand your culture, technical needs, and role to find the right fit.',
        },{
            no:2,
            name:'Personalized Consultations',
            line:'Evaluate opportunities based on skills, career goals, and preferences.',
        },{
            no:3,
            name:'Competency Evaluation',
            line:'Assess technical and soft skills via matrix and interviews.',
        },{
            no:4,
            name:'Cultural Fit Review',
            line:'Ensure team and cultural compatibility through assessments.',
        },{
            no:5,
            name:'Empowering Success',
            line:'Empower candidates to align skills with business needs confidently.',
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
        <div>
            <Section1 background={PageHead.bg} headline={PageHead.title} secondline={PageHead.description}/>
            <Emp1 />
            <Emp2 />
            <RecruitmentProcess Heading={
                window.innerWidth < 1000 ? 'Recruitment Process' : 'Our Recruitment Process'
            } Process={EmploymentProcess}/>
            <div className='my-[5%]'>
            <ContactCard mainHead={ContactData.mainheading} mainDesc={ContactData.mainDesc} button={ContactData.button} buttonLink={ContactData.buttonLink} subHead={ContactData.subHead} subOptions={ContactData.subOptions} />
        </div>
        </div>
    )
}

export default Employers