import React from 'react';
import { Link } from 'react-router-dom';
import ReactFlipCard from 'reactjs-flip-card';

const IndustryFlipCard = ({ target }) => {
  const Cardfront = () => (
    <div className="w-full h-full relative">
      <img
        className="object-cover h-full w-full object-center rounded-[20px]"
        src={target.Image}
        alt={`${target.Name} - Pic`}
      />
      <div className="absolute w-full h-full top-0 left-0 flex px-6 pb-10 items-end justify-center text-center leading-tight bg-gradient-to-t from-[#030303af] from-0% to-transparent to-40% rounded-[20px]">
        <h3 className="text-w-1 text-[1.5rem] font-[600] uppercase tracking-wide">{target.Name}</h3>
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
      <div className="absolute w-full h-full top-0 left-0 flex flex-col px-6 text-center items-center justify-center bg-black bg-opacity-50 rounded-[20px]">
        <h3 className="text-g-1 text-[1.5rem] font-bold tracking-wide uppercase">{target.Name}</h3>
        <p className='text-w-1 text-[1.1rem] lg:text-[1.3rem] font-normal leading-tight'>{target.Statement}</p>
        <Link className='text-g-1 hover:text-w-1 font-[500] text-[1.3rem] px-4 py-1 rounded-xl border-2 border-g-1 hover:border-w-1 bg-[#000000cf] hover:bg-g-1 mt-4' to={'/'}>To Apply</Link>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-[300px] h-[350px] lg:w-[375px] lg:h-[420px] my-5 lg:my-10 rounded-[20px]">
      <ReactFlipCard 
        containerStyle={
          {
            width: '100%',
            height:'100%',
            cursor:'pointer',
          }
        }
        frontComponent={<Cardfront />} 
        backComponent={<Cardback />} 
      />
    </div>
  );
};

export default IndustryFlipCard;
