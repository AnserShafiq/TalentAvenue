import React from 'react';

const Section1 = ({ background, headline, secondline }) => {
  return (
    <div className="flex flex-col items-center relative">
      <img 
        src={background} 
        className="object-cover z-0 w-full h-[85vh] lg:h-auto max-h-[88vh] 2xl:max-h-screen-[85vh] object-top" 
        alt="Talent Avenue - Home 1" 
      />
      <div className="flex flex-col items-center text-center absolute w-[90%] lg:w-[85%] max-w-[1350px] px-[3%] lg:px-[5%] py-[5%] lg:py-[2%] bottom-[7%] bg-[#303030AD] rounded-[20px]">
        {headline && (
          <h3 className="text-w-1 text-[1.6rem] mb-4 lg:mb-0 lg:text-[45px] leading-tight capitalize font-semibold">
            {headline}
          </h3>
        )}
        {secondline && (
          <h4 className="text-w-1 text-[1.4rem] lg:text-[35px] flex flex-col lg:flex-row leading-tight lg:leading-normal uppercase font-semibold tracking-wide">
            {secondline}
          </h4>
        )}
      </div>
    </div>
  );
};

export default Section1;
