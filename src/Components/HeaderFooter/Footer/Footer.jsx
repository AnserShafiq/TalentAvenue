import React from 'react'
import curve from '../../../Images/underlineCurve.png'
import { Link } from 'react-router-dom'
import { FaFacebook as Fb} from "react-icons/fa";
import { FaTwitter as Tw} from "react-icons/fa";
import { RiInstagramFill as Insta} from "react-icons/ri";
import { IoLogoLinkedin as Ln} from "react-icons/io5";
import { FooterPages } from '../MenuItems';
import { FaRegCopyright as CP } from "react-icons/fa6";


// import './style.css'
const Footer = () => {



    return (
    <div className={`flex flex-col w-full`}>
        <div className='flex lg:grid flex-col lg:grid-cols-[1fr,1fr,1fr,1fr] lg:gap-3 w-full px-X-footer py-Y-footer bg-[#1a1a1a]'>
            <div className='flex flex-col px-3 lg:px-5 py-4'>
                <h3 className='text-[1.9rem] text-w-1 font-bold leading-tight tracking-wide' > Unlock Opportunities</h3>
                <h3 className='text-[2.5rem] text-g-1 font-bold leading-tight tracking-wide uppercase'>Find Success</h3>
                <img className='w-[86%] mt-[-2%]' src={curve} alt='Underlining in footer'/>
            </div>
            <div className='flex flex-col px-3 lg:px-5 py-4'>
                <h3 className='text-[1.9rem] capitalize text-g-1 font-bold leading-tight tracking-wider border-b-2 border-g-1 w-fit mb-4'>Want To Apply?</h3>
                <Link className='text-[1.2rem] text-w-1 font-semibold capitalize tracking-wide hover:text-g-1 border-2 px-2 py-1 rounded-md border-transparent hover:border-g-1 w-fit' >For exploring jobs?</Link>
                <h3 className='text-[2rem] relative font-extrabold text-g-1 italic pl-4 '>OR</h3>
                <Link className='text-[1.2rem] text-w-1 font-semibold capitalize tracking-wide hover:text-g-1 border-2 px-2 py-1 rounded-md border-transparent hover:border-g-1 w-fit' >For hunting talent?</Link>
            </div>
            <div className='flex flex-col px-3 lg:px-5 py-4'>
            <h3 className='text-[1.9rem] capitalize text-g-1 font-bold leading-tight tracking-wider border-b-2 border-g-1 w-fit mb-4 '>Contracts we deal</h3>
            <Link className='text-[1.2rem] text-w-1 font-semibold capitalize tracking-wide hover:text-g-1 border-2 px-2 py-1 rounded-md border-transparent hover:border-g-1 w-fit' >Contractual Placements</Link>
            <Link className='text-[1.2rem] text-w-1 font-semibold capitalize tracking-wide hover:text-g-1 border-2 px-2 py-1 rounded-md border-transparent hover:border-g-1 w-fit' >Permanents Placements</Link>
            <Link className='text-[1.2rem] text-w-1 font-semibold capitalize tracking-wide hover:text-g-1 border-2 px-2 py-1 rounded-md border-transparent hover:border-g-1 w-fit' >Outsourcings</Link>
            </div>
            <div className='flex flex-col px-3 lg:px-5 py-4'>
                <h3 className='text-[1.9rem] capitalize text-g-1 font-bold leading-tight tracking-wider border-b-2 border-g-1 w-fit mb-4 '>Follow Us:</h3>
                <div className='flex '>
                    <div className='mr-4 border-2 p-[0.35rem] rounded-[50%] cursor-pointer text-w-1 hover:text-g-1 hover:border-g-1'><Fb className='text-[1.7rem] '/></div>
                    <div className='mr-4 border-2 p-[0.35rem] rounded-[50%] cursor-pointer text-w-1 hover:text-g-1 hover:border-g-1'><Tw className='text-[1.7rem] '/></div>
                    <div className='mr-4 border-2 p-[0.35rem] rounded-[50%] cursor-pointer text-w-1 hover:text-g-1 hover:border-g-1'><Insta className='text-[1.7rem] '/></div>
                    <div className='mr-4 border-2 p-[0.35rem] rounded-[50%] cursor-pointer text-w-1 hover:text-g-1 hover:border-g-1'><Ln className='text-[1.7rem] '/></div>
                </div> 
            </div>
        </div>
        <div className='flex flex-col w-full py-[0.4%] bg-[#000000]'>
            <div className='flex flex-col py-2 px-X-footer lg:py-0 lg:flex-row justify-center'>
                {
                    FooterPages.map((Child, index) => (
                        <Link className='text-[1.3rem] lg:text-[1.1rem] text-w-1 mx-4 my-2 lg:my-0 lg:mx-10 hover:text-g-1 hover:underline underline-offset-4 lg:leading-tight'  key={index} path={Child.Link}>{Child.Name}</Link>
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