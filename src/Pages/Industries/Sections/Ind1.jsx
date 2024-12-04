import React from 'react'
import MainHead from '../../../Components/SectionsHead/MainHead.jsx'
import Img1 from '../../../Images/Industries/infotech.jpg'
import Img2 from '../../../Images/Industries/healthcare.jpg'
import Img3 from '../../../Images/Industries/finance.jpg'
import Img4 from '../../../Images/Industries/manufacturing.jpg'
import Img5 from '../../../Images/Industries/retail.jpg'
import Img6 from '../../../Images/Industries/engineering.jpg'
import Img7 from '../../../Images/Industries/construction.jpg'
import Img8 from '../../../Images/Industries/marketing.jpg'
import IndustryFlipCard from '../../../Components/Cards/IndustryFlipCard'

const IndustriesList = () => {

  const OurIndustries = [
    {
      Name: 'Information Technology',
      JobTypes: 'Database Manager, Project Manager, Systems Analyst, IT Coordination, Full Stack Developer and Many more.',
      Statement: 'Identifying tech-savvy professionals who align with industry trends and meet the specific technological demands of organizations.',
      Image: Img1,
    },{
      Name: 'Healthcare',
      JobTypes: 'Healthcare Administrator, Physical Therapists, Pharmacists, Laboratory Technician, Physician, and Many more.',
      Statement: 'Connecting healthcare professionals with organizations that prioritize patient care and regulatory compliance.',
      Image: Img2,
    },{
      Name: 'Accounting & Finance',
      JobTypes: 'Director of Finance, Assistant Controller, Audit Manager, Payroll Clerk, Business Analyst, Tax Manager, and Many more.',
      Statement: 'Sourcing candidates with a keen understanding of financial regulations, risk management, and strategic planning.',
      Image: Img3,
    },{
      Name: 'Manufacturing',
      JobTypes: 'Production Supervisor, Quality Control Inspector, CNC Machine Operator, Maintenance Technician, Forklift Operator and Many more.',
      Statement: 'Finding skilled workers who can ensure quality production and meet operational goals within the manufacturing sector.',
      Image: Img4,
    },{
      Name: 'Retail',
      JobTypes: 'Sales Associate, Store Manager, Cashier, Merchandiser, Inventory Specialist, Customer Service Representative, and Many more.',
      Statement: 'Helping retailers build a workforce that enhances customer experience and drives sales in a competitive market.',
      Image: Img5,
    },{
      Name: 'Engineering',
      JobTypes: 'Chemican Engineer, Automation & Controls, General Manager, Plant Manager, CAD Technologist, Marine Engineer, and Many more.',
      Statement: 'Providing engineering firms with professionals who possess technical expertise and the ability to meet project specifications.',
      Image: Img6,
    },{
      Name: 'Construction',
      JobTypes: 'Construction Laborer, Site Supervisor, Electrician, Carpenter, Plumber, Civil Engineer, Safety Office, Quantity Surveyor, and Many more',
      Statement: 'Matching construction firms with workers who meet project deadlines while adhering to safety and compliance standards.',
      Image: Img7,
    },{
      Name: 'Marketing',
      JobTypes: 'Brand Manager, Project Manager, Communications, Manager, Director of Communities, Marketing Coordinator, Marketing Manager, and Many more.',
      Statement: 'Delivering marketing talent with the creativity and strategic thinking required to elevate brand presence and engagement.',
      Image: Img8,
    },
  ]
  
  
  const MainHeadContent = {
    Head: 'Industries we cover',
    Desc: 'we provide tailored direct hire recruitment services to industries across various sectors. Our focus is on connecting businesses with permanent employees who possess the skills and cultural alignment needed for success. By deeply understanding each industry’s unique requirements, we ensure seamless and effective talent placement.'
  }

  return (
    <div className='flex flex-col my-[10%] lg:my-sm w-[95%] lg:w-[83%] 2xl:w-[70%] mx-auto'>
        <MainHead title={MainHeadContent.Head} titleColor={'w-1'} description={MainHeadContent.Desc} descriptionColor={'w-1'} />
        <div className='flex lg:flex-row flex-wrap justify-around items-center w-full'>
          {
            OurIndustries.map((Industry, index) =>(
                <IndustryFlipCard target={Industry} key={index}/>
            ))
          }
          
        </div>
        
    </div>
  )
}

export default IndustriesList