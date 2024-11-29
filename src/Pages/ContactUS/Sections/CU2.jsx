import React, { useState } from 'react';
import SidePic from '../../../Images/ContactUs/CU2.jpg';

const CU2 = () => {

    const [ContactForm, setContactForm] = useState({
        Name: '',
        Email: '',
        ContactNumber: '',
        Reason: '',
        Message: '',
    })

    const handleEntry = (e) => {
        const {name, value} = e.target
        console.log(name,value)
    }

    return (
    <div className="flex flex-col lg:flex-row my-[10%] lg:my-10 w-[95%] lg:w-[80%] 2xl:w-[70%] mx-auto">
      
      <div className="lg:w-[50%] lg:sticky lg:top-[10%]">
        <img
          className="h-[50vh] lg:h-[60vh] w-full object-cover rounded-[20px]"
          src={SidePic}
          alt="Contact Us Form"
        />
      </div>

      <div className="flex flex-col justify-center items-start py-6 px-6 lg:px-10 lg:w-[50%]">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">To Leave Us A Message</h1>
        
        <form>
            <div>
                <label>Full name:</label>
                <input type='text' label='Name' value={ContactForm.Name} placeholder='Enter your full name' onChange={handleEntry} />
            </div>
        </form>


      </div>
    </div>
  );
};

export default CU2;
