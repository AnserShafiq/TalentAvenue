import React from 'react'
import { HashLink } from 'react-router-hash-link'

const PageSubMenu = ({menubody}) => {
  return (
    <div className=' w-[80%] mx-auto my-[1%] hidden lg:flex flex-row justify-center items-center'>
        {
            menubody.map((Menu, index) => (
                <div key={index} className={`flex justify-center items-center px-[4%] ${Menu.last ? 'border-r-2 border-transparent' : 'border-r-2 border-g-1'} `}>
                    <HashLink key={Menu.title} to={Menu.link} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}  className='text-g-1 font-[500] tracking-wide uppercase text-[1.1rem]'>{Menu.title}</HashLink>
                </div>
            ))
        }
    </div>
  )
}

export default PageSubMenu