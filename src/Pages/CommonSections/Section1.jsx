import React from 'react';

const Section1 = ({ background, bgPosition , headline, secondline, UC }) => {
  
  return (
    <div className="flex flex-col items-center relative">
      <img 
        src={background} 
        className={`${bgPosition} object-cover z-0 w-full h-[70vh] lg:h-full lg:max-h-[88vh] 2xl:max-h-[85vh] `} 
        alt="Talent Avenue - Page's Head" 
      />
      <div className="flex flex-col items-center text-center absolute w-[90%] lg:w-[85%] max-w-[1350px] px-[3%] lg:px-[2%] py-[5%] lg:py-[2%] bottom-[7%] bg-[#303030AD] rounded-[20px]">
        {headline && (
          <h3 className="text-w-1 text-[1.6rem] mb-4 lg:mb-0 lg:text-[45px] leading-tight uppercase font-semibold">
            {headline}
          </h3>
        )}
        {secondline && (
          <h4 className={`text-w-1 text-[1.3rem] lg:text-[1.5rem] px-0 lg:px-[3%] flex flex-col lg:flex-row leading-normal ${UC ? ('uppercase') : ('capitalize')} font-semibold tracking-wide`}>
            {secondline}
          </h4>
        )}
      </div>
    </div>
  );
};

export default Section1;
