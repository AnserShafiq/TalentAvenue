import React from 'react';
import MainHead from '../../Components/SectionsHead/MainHead';
import Commas from '../../Images/Icons/Commas.png'
const Testimonials = ({ Numbers }) => {
    const testimonialsData = {
        One: "Responsive, quick turnaround times, quality candidates, and thoughtful communications. Always friendly and extremely capable people running our local branch of Talent Avenue!",
        Two: "Talent Avenue has been able to provide our office with competent staff in an efficient way. I have found great value using Talent Avenue.",
        Three: "Talent Avenue has great communication and strict follow-up, they find and share suitable candidates quickly, and I can reach them whenever I call. I hope we will continue this business cooperation for a very long time.",
        Four: "I value the dedication of everyone involved and their swift response to our requests. Excellent work, always maintaining a high standard.",
        Five: "It's straightforward, and Talent Avenue simplifies the process. Experience efficient, thorough, and responsive service at every step.",
        Six: "Talent Avenue is a company deeply rooted in our territory, boasting a team of experienced professionals capable of accurately identifying the real needs in the labor demand/supply relationship.",
    };

    return (
        <div className='flex flex-col justify-center items-center my-sm w-[95%] lg:w-[80%] 2xl:w-[70%] h-[100%] mx-auto'>
            <MainHead title={'Our Testimonials'} titleColor={'w-1'}/>
            <div className='flex flex-col lg:flex-row justify-center items-start mt-3'>
                {
                    Numbers.map((Data, index) => (
                        <div className='flex flex-col lg:mx-[1.5%] w-[30%]' key={index}>
                            <img className='w-[3rem]' src={Commas} alt='Inverted commas'/>
                            <h3 className='text-testimonials-d mt-4 text-w-1'>{testimonialsData[Data]}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Testimonials;
