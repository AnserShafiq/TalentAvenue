import React, { useState } from 'react'
import Underlining from '../Underlining';
import { Link } from 'react-router-dom';

const IndustryFlipCard = ({target}) => {
    const [applicationOptions, setApplicationOptions] = useState(false);

    const Cardfront = () => (
        <div className="w-full h-full relative">
          <img
            className="object-cover h-full w-full object-center rounded-[20px]"
            src={target.Image}
            alt={`${target.Name} - Pic`}
          />
          <div className="absolute w-full h-full top-0 left-0 flex px-6 pb-10 items-end justify-center text-center leading-tight bg-gradient-to-t from-[#030303af] to-transparent rounded-[20px]">
            <h3 className="text-w-1 text-[1.5rem] font-extrabold lg:font-[600] uppercase stroke-cyan-500 tracking-wide">{target.Name}</h3>
          </div>
        </div>
      );
    
      const Cardback = () => (
        <div className="w-full h-full relative">
          <img
            className="object-cover h-full w-full object-center rounded-[20px]"
            src={target.Image}
            alt={`${target.Name} - Pic`}
          />
          <div className="absolute w-full h-full top-0 left-0 flex flex-col px-6 py-3 lg:py-8 text-start items-start justify-start bg-black bg-opacity-80 rounded-[20px]">
            {applicationOptions ? (
              <div className="flex flex-col items-center w-full h-full relative justify-center">
                <div className="font-bold tracking-wide text-[1.3rem] lg:text-[1.6rem] leading-relaxed mb-4">
                  <Underlining bodytext={'What are you looking for?'} textcolor={'w-1'} />
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    className="px-3 py-[1.5%] capitalize text-g-1 rounded-[20px] border-2 text-[1.1rem] lg:text-[1.3rem] bg-[#00000055] hover:bg-black transition-transform duration-[0.5s] ease-in-out hover:scale-[1.05] border-g-1 w-fit mb-4"
                    to="/job-seekers/application-form"
                  >
                    Looking for jobs
                  </Link>
                  <Link
                    className="px-3 py-[1.5%] capitalize text-g-1 rounded-[20px] border-2 text-[1.1rem] lg:text-[1.3rem] bg-[#00000055] hover:bg-black transition-transform duration-[0.5s] ease-in-out hover:scale-[1.05] border-g-1 w-fit"
                    to="/employers/application-form"
                  >
                    Looking for candidates
                  </Link>
                </div>
                <button className='text-w-1 text-[0.9rem] underline underline-offset-30 absolute bottom-0 uppercase' onClick={() => setApplicationOptions(!applicationOptions)}> ←back</button>
              </div>
            ) : (
              <>
                <h3 className="text-g-1 text-[1.5rem] font-bold tracking-wide uppercase">{target.Name}</h3>
                <p className="text-w-1 text-[1.1rem] lg:text-[1.3rem] font-[300] leading-tight mb-2">
                  <b className="font-semibold">Job Types:</b> {target.JobTypes}
                </p>
                <p className="text-w-1 text-[1.1rem] lg:text-[1.3rem] font-[300] leading-tight">
                  <b className="font-semibold">Focus:</b> {target.Statement}
                </p>
                <button
                  className="text-g-1 hover:text-w-1 font-[500] text-[1.3rem] px-4 py-1 rounded-xl border-2 border-g-1 hover:border-w-1 bg-[#000000cf] hover:bg-g-1 mt-4"
                  onClick={() => {
                    setApplicationOptions(true);
                  }}
                >
                  To Apply
                </button>
              </>
            )}
          </div>
        </div>
      );


  return (
    <section className='flex flex-col w-[300px] h-[370px] lg:w-[375px] lg:h-[420px] my-5 lg:my-10 rounded-[20px]'>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <Cardfront />
                </div>
                <div class="flip-card-back">
                    <Cardback />
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default IndustryFlipCard