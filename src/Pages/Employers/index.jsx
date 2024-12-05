import React from 'react'
import Section1 from '../CommonSections/Section1'
import HeadBg_D from '../../Images/Employers/emp1.jpg'
import HeadBg_M from '../../Images/Employers/emp3.jpg'
import Emp1 from './Sections/Emp1'
import Emp2 from './Sections/Emp2'
import RecruitmentProcess from '../CommonSections/RecruitmentProcess'
import ContactCard from '../../Components/Cards/ContactCard'
import Location from '../../Images/Home/location.png'
import Countries from '../../Images/Home/Countries.png'
import People from '../../Images/Home/People.png'
import Handshake from '../../Images/Home/Handshake.png'
import Underlining from '../../Components/Underlining'
import { Link } from 'react-router-dom'
const Employers = () => {
  
    const PageHead = {
        bg: window.innerWidth > 1000 ? HeadBg_D : HeadBg_M,
        title: 'Transformed Strategies for Success',
        description: 'We provide detailed analysis and actionable insights to optimize your processes, enhance efficiency, and achieve impactful outcomes that drive long-term success.',
    }

    const EmploymentProcess =[
        {
            no:1,
            name:'Focused Needs Assessment',
            line:(
                <>
                Understand your culture, technical needs, and role to <Link to={'/employers/application-form'} className='text-g-1 capitalize hover:underline font-bold' >find the right fit</Link>.
                </>
            ),
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
            Searching for <span className='px-0 py-0 lg:px-2 leading-tight font-semibold'> <Underlining bodytext={'talented candidates?'} textcolor={'w-1'}/> </span>We've got you covered.
          </>
        ),
        mainDesc: "We specialize in delivering exceptional permanent placement solutions, helping you secure the right candidates to drive your business forward.",
        button: 'Apply for candidates',
        buttonLink: '/employers/application-form',
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