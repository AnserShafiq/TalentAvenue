import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook as Fb} from "react-icons/fa";
import { FaTwitter as Tw} from "react-icons/fa";
import { RiInstagramFill as Insta} from "react-icons/ri";
import { IoLogoLinkedin as Ln} from "react-icons/io5";
import { FooterPages } from '../MenuItems';
import { FaRegCopyright as CP } from "react-icons/fa6";
import Underlining from '../../Underlining.jsx';
import { FaEnvelopeOpenText as Mail} from "react-icons/fa";
// import { PiPhoneCallDuotone as Call} from "react-icons/pi";



const Footer = () => {
    const UnderlineText = (
        <>
            <span className='text-[2.5rem] text-g-1 font-bold leading-tight w-fit tracking-wide uppercase'>Find Success</span>
        </>
    )
 
    return (
    <div className={`flex flex-col w-full`}>
        <div className='flex lg:grid flex-col lg:grid-cols-[1fr,1fr,1fr,1fr] lg:gap-3 w-full px-X-footer py-Y-footer bg-[#1a1a1a]'>
            <div className='flex flex-col px-3 lg:px-5 py-4'>
                <h3 className='text-[1.9rem] text-w-1 font-bold leading-tight tracking-wide' > Unlock Opportunities</h3>
                <Underlining textcolor={'g-1'} bodytext={UnderlineText} />    
                <h3 className='text-[1.3rem] text-w-1 flex items-center font-semibold tracking-wide mt-5 px-2 py-1 w-fit'>To Reach Us...</h3>
                {/* <Link to={'/'} className='text-[1.2rem] text-w-1 flex items-center font-semibold capitalize tracking-wide mt-4 hover:text-g-1 border-2 px-2 py-1 rounded-md border-transparent hover:border-g-1 w-fit' > <Call className='text-[1.6rem] text-g-1 mr-2'/>(123) 456 7890</Link> */}
                <Link to={'/'} className='text-[1.2rem] text-w-1 flex items-center  font-semibold tracking-wide hover:text-g-1 border-2 px-2 py-1 rounded-md border-transparent hover:border-g-1 w-fit' ><Mail className='text-[1.4rem] text-g-1 mr-2'/>info@talentavenue.ca</Link>
            </div>
            <div className='flex flex-col px-3 lg:px-5 py-4'>
                <h3 className='text-[1.9rem] capitalize text-g-1 font-bold leading-tight tracking-wider border-b-2 border-g-1 w-fit mb-4'>Want To Apply?</h3>
                <Link to={'/job-seekers/application-form'} className='text-[1.2rem] text-w-1 font-semibold capitalize tracking-wide hover:text-g-1 border-2 px-2 py-1 rounded-md border-transparent hover:border-g-1 w-fit' >For exploring jobs?</Link>
                <h3 className='text-[2rem] relative font-extrabold text-g-1 italic pl-4 '>OR</h3>
                <Link to={'/employers/application-form'} className='text-[1.2rem] text-w-1 font-semibold capitalize tracking-wide hover:text-g-1 border-2 px-2 py-1 rounded-md border-transparent hover:border-g-1 w-fit' >For hunting talent?</Link>
            </div>
            <div className='flex flex-col px-3 lg:px-5 py-4'>
            <h3 className='text-[1.9rem] capitalize text-g-1 font-bold leading-tight tracking-wider border-b-2 border-g-1 w-fit mb-4 '>Industries we deal</h3>
            <h3 className='text-[1.2rem] 2xl:text-[1.3rem] text-w-1 font-semibold capitalize tracking-wide border-2 px-2 py-1 rounded-md border-transparent w-fit' >Information Technology</h3>
            <h3 className='text-[1.2rem] 2xl:text-[1.3rem] text-w-1 font-semibold capitalize tracking-wide border-2 px-2 py-1 rounded-md border-transparent w-fit' >Healtcare</h3>
            <Link to={'/industries-we-deal'} className='text-[1.2rem] 2xl:text-[1.3rem] text-w-1 font-semibold capitalize tracking-wide hover:text-g-1 border-2 px-2 py-1 rounded-md border-transparent hover:border-g-1 w-fit' >To Explore All</Link>
            </div>
            <div className='flex flex-col px-3 lg:px-5 py-4'>
                <h3 className='text-[1.9rem] capitalize text-g-1 font-bold leading-tight tracking-wider border-b-2 border-g-1 w-fit mb-4 '>Follow Us</h3>
                <div className='flex '>
                    <div className='mr-4 border-2 p-[0.38rem] rounded-[50%] cursor-pointer text-w-1 hover:text-g-1 hover:border-g-1' onClick={() => window.location.href='https://www.facebook.com/'}><Fb className='text-[1.6rem] '/></div>
                    <div className='mr-4 border-2 p-[0.38rem] rounded-[50%] cursor-pointer text-w-1 hover:text-g-1 hover:border-g-1'><Tw className='text-[1.6rem] '/></div>
                    <div className='mr-4 border-2 p-[0.38rem] rounded-[50%] cursor-pointer text-w-1 hover:text-g-1 hover:border-g-1'><Insta className='text-[1.6rem] '/></div>
                    <div className='mr-4 border-2 p-[0.38rem] rounded-[50%] cursor-pointer text-w-1 hover:text-g-1 hover:border-g-1'><Ln className='text-[1.6rem] '/></div>
                </div> 
            </div>
        </div>
        <div className='flex flex-col w-full py-[0.4%] bg-[#000000]'>
            <div className='flex flex-col py-2 px-X-footer lg:py-0 lg:flex-row justify-center'>
                {
                    FooterPages.map((Child, index) => (
                        <Link className='text-[1.1rem] lg:text-[1.2rem] text-w-1 mx-4 my-2 lg:my-0 lg:mx-10 hover:text-g-1 hover:underline underline-offset-4 lg:leading-tight'  key={index} to={Child.Link}>{Child.Name}</Link>
                    ))
                }
            </div>
            <div className='flex justify-center items-center pb-0 pt-[0.3%] border-t-2 border-g-1 mt-2'>
                <h4 className='text-[1rem] text-w-1 flex flex-row items-center leading-tight tracking-wider' ><CP className='mr-2' />2021 Talent Avenue | All rights reserved </h4>
            </div>
        </div>
    </div>
  )
}

export default Footer