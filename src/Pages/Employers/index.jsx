import React from 'react'
import Section1 from '../CommonSections/Section1'
import HeadBg from '../../Images/Employers/emp1.jpg'
import Emp1 from './Sections/Emp1'
import Emp2 from './Sections/Emp2'

const Employers = () => {
  
    const PageHead = {
        bg: HeadBg,
        title: 'Inclusion at the Heart of Success',
        description: 'Diversity & inclusion are vital for success. Talent Avenue helps build diverse teams that foster innovation, improve decision-making, & boost productivity while creating an engaging & positive culture.',
    }
    return (
        <div>
            <Section1 background={PageHead.bg} headline={PageHead.title} secondline={PageHead.description}/>
            <Emp1 />
            <Emp2 />
        </div>
    )
}

export default Employers