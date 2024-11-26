import React from 'react'
import Section1 from '../CommonSections/Section1'
import Bg from '../../Images/HowWeWorks/hww-1.jpg'
import PageSubMenu from '../../Components/PageMenu'
import HWW1 from './Sections/HWW1'
import HWW2 from './Sections/HWW2'
const HowWeWorks = () => {

    const Data = {
    background: Bg,
        title: 'How we work',
        desc:'At Talent Avenue, we employ the very best staffing and recruiting experts in your industry. We use our extensive reach and the world’s largest network of candidates to find you the best people when you need them - at any scale of your business.',
    }
    const PageSubMenuBody = [{title: 'Our recruitment approach',link:'/',},{title:"Intro to technology",link:'/'},{title: 'Recruitment solution by us',link: '/',last:true}]

  return (
    <>
        <Section1 background={Bg} bgPosition={'object-center'} headline={Data.title} secondline={Data.desc} />

        <PageSubMenu menubody={PageSubMenuBody} /> 

        <HWW1 />

        <HWW2 />        

    </>
  )
}

export default HowWeWorks