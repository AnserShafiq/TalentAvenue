import React from 'react'
import I1 from '../../../Images/Employers/Clients.png';
import I2 from '../../../Images/Employers/Network.png';
import I3 from '../../../Images/Employers/Recruitment.png';
import I4 from '../../../Images/Employers/Relationship.png';
import MainHead from '../../../Components/SectionsHead/MainHead';
const Emp1 = () => {
    const SectionContent = {
        title: 'Customized Recruitment for Top Talent',
        description: 'At Talent Avenue, we offer a detailed and tailored recruitment process to connect your business with the best candidates. By understanding your unique needs and leveraging our extensive network, we source and screen top talent. From consultation to onboarding, our team ensures a seamless experience, fostering lasting and successful employment relationships.'
    }
    const Features = [
        {
            title: 'In-depth Understanding Of Clients',
            icon:I1,
        },{
            title: 'Extensive Network & Industry Expertise',
            icon:I2,
        },{
            title: 'Comprehensive Recruitment Process',
            icon:I3,
        },{
            title: 'Long-lasting Employment Relationships',
            icon:I4,
        },
    ]
    return (
    <div className='flex flex-col justify-center items-center my-[8%] lg:my-sm w-[95%] lg:w-[80%] 2xl:w-[71%] mx-auto'>

        <div className='flex flex-col justify-center w-full'>
            <MainHead title={SectionContent.title} titleColor={'w-1'} description={SectionContent.description} descriptionColor={'w-1'}/>
        </div>

        <div className='flex flex-col justify-center lg:grid lg:grid-cols-4 lg:gap-x-[4%] mt-6 w-[80%] lg:w-full'>
        {
            Features.map((feature, index) => (
                <div className='flex flex-col items-center px-5 py-6 my-4 lg:my-0 shadow-xl shadow-[#bc9a640f] bg-[#0000007f] rounded-[25px]' key={index}>
                    <img className='w-[8rem] h-full lg:w-[10rem] mb-4' src={feature.icon} alt={`${feature.title}'s icon - Talent Avenue`}/>
                    <h3 className='text-[1.2rem] lg:text-[1.4rem] text-w-1 text-center'>{feature.title}</h3>
                </div>
            ))
        }
        </div>
        
    </div>
    )
}

export default Emp1