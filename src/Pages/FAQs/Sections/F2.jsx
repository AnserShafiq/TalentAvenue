import React, { useState } from 'react'
import MainHead from '../../../Components/SectionsHead/MainHead'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const F2 = () => {
    const faqData = [
        {
            question: 'What is a staffing agency and how it works?',
            answer:'Talent Avenue is a global staffing and recruitment agency. We specialize in providing recruiters, employers, and job seekers with temporary and permanent employment opportunities. Our services include connecting job seekers with employers, providing training, and offering HR services. We’ll design custom staffing solutions to fit your business needs.',
        },{
            question: 'What types of positions does a staffing agency help fill?',
            answer:'Talent Avenue offers job opportunities in a variety of industries, including office and administrative, industrial, professional and technical, and healthcare.',
        },{
            question: 'What is the process for working with a staffing agency like Talent Avenue?',
            answer:'Because we offer customized staffing solutions based on the needs of your organization the process is unique to every business. The first step is always to contact us and speak with a recruitment expert who will advise you on the next steps and propose a staffing solution that will work best for your business. Some of our solutions include temporary placement, direct hiring, outsourcing, MSP, consulting, onsite management and even training for workers.',
        },{
            question: ' What are the benefits of working with a staffing agency?',
            answer: 'Talent Avenue provides a range of benefits to job seekers, ensuring a rewarding career journey. Enjoy competitive pay, flexible scheduling, and access to training opportunities. Additionally, health and dental insurance options are available in certain cases. Benefit from our referral bonus program and dedicated job search assistance, securing your path to success.',
        },{
            question: 'How quickly can a staffing agency fill a position?',
            answer: 'At Talent Avenue, our 60 years of expertise have shaped an expansive database of pre-qualified talent, coupled with thorough assessments for swift candidate selection. Our industry experts specialize in identifying individuals with precise skills for your organization, expediting the hiring process beyond traditional methods.',
        },{
            question: 'Do staffing agencies provide training for temporary employees?',
            answer: 'Yes, Talent Avenue accompanies individuals throughout their careers, offering reskilling, upskilling, onboarding, and various training programs to ensure continuous skill development. Our commitment is to empower workers with the capabilities needed to future-proof their careers. Explore our training page for more details.',
        },{
            question: 'What if the candidate doesn’t work out?s',
            answer: 'Harnessing the power of AI and our recruiters’ expertise in screening and assessments, Talent Avenue guarantees the identification of candidates with the precise skills needed for the job. In the event a candidate doesn’t align with your business, we offer a replacement with a similar skills profile at no additional cost. Contact us for more details.',
        },
    ]

    const [openFAQ, setOpenFaq] = useState(0)
    const toggleFaq = (index) => {
        if (openFAQ === index){
            setOpenFaq(null)
        }else{
            setOpenFaq(index)
        }
    }

    return (
    <div className='flex flex-col items-center my-sm w-[95%] lg:w-[60%] mx-auto'>
        <MainHead title={
            window.innerWidth < 1000 ? "Customer Questions":'Frequently asked questions'
        } titleColor={'w-1'}/>
        <div className='w-full space-y-[20px] flex flex-col p-[25px]'>
            {
                faqData.map((Faq, index) => (
                    <div key={index} className=''>
                        <div 
                        onClick={() => toggleFaq(index)}
                        className={`
                            flex justify-between capitalize items-center px-4 py-3 cursor-pointer rounded-[20px] border-2 active:bg-g-1 
                            ${openFAQ === index ? 'bg-g-1 text-black':'hover:bg-w-1 hover:text-g-1 hover:font-semibold text-w-1 bg-transparent border-w-1'}
                        `}>
                            <h3 className='text-[1.3rem] font-500 w-[85%]'>{Faq.question}</h3>
                            {openFAQ === index ? (
                                <FaMinus className='w-[10%]'/>
                            ) : (
                                <FaPlus className='w-[10%]'/>
                            )}
                        </div>
                        {
                            openFAQ === index && (
                                <div className="p-4 border-none text-[1.1rem] lg:text-[1.3rem] leading-snug text-w-1">
                                    {Faq.answer}
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default F2