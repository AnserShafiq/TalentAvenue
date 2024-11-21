import React from 'react';

const Section1 = ({ background, headline, secondline }) => {
  return (
    <div className="flex flex-col items-center relative">
      <img 
        src={background} 
        className="object-cover z-0 w-full max-h-[88vh] 2xl:max-h-screen-[88vh] object-top" 
        alt="Talent Avenue - Home 1" 
      />
      <div className="flex flex-col items-center absolute w-[85%] max-w-[1350px] px-[5%] py-[2%] bottom-[7%] bg-[#303030AD] rounded-[20px]">
        {headline && (
          <h3 className="text-w-1 text-[45px] leading-tight capitalize font-semibold">
            {headline}
          </h3>
        )}
        {secondline && (
          <h4 className="text-w-1 text-[35px] flex leading-tight uppercase font-semibold tracking-wide">
            {secondline}
          </h4>
        )}
      </div>
    </div>
  );
};

export default Section1;
