import React from 'react'

const FnF = () => {

    const Content = [
        {
            count: '5000+',
            title: 'Weekly associates',
            desc: 'We have an extensive pool of talented people working daily to keep your business running.',
        },{
            count: '525+',
            title: 'Clients served each week',
            desc: 'We have a strong & loyal client base who trust us to effectively manage their hiring requirements.',
        },{
            count: '230+',
            title: 'Colleagues in canada',
            desc: 'We have specialized recruiters around the world, ready to help you.',
        },{
            count: '75+',
            title: 'Perm placements per month',
            desc: 'We find permanent people to join your business for when and where you need them.',
        },{
            count: '60+',
            title: 'Target Locations',
            desc: 'Our wide reach means we are there for you, wherever you need it.',
        },
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 my-5 lg:my-sm w-[95%] lg:w-[85%] 2xl:w-[70%] h-[100%] mx-auto'>
            {
                Content.map((Data, index) => (
                    <div className='flex flex-col pb-6 lg:pb-0 px-6' key={index}> 
                        <h2 className='text-g-1 text-[2.1rem] font-extrabold'>{Data.count}</h2>
                        <h3 className='text-g-1 text-[1.3rem] leading-tight font-[600] capitalize my-2'>{Data.title}</h3>
                        <p className='text-w-1 lg:text-[1.2rem]'>{Data.desc}</p>
                    </div> 
                ))
            }
        </div>
    )
}

export default FnF