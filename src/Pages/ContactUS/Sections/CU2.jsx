import React, { useState } from 'react';
import SidePic from '../../../Images/ContactUs/CU2.jpg';
import Underlining from '../../../Components/Underlining';

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
      setContactForm((prev) => (
        {...prev,
        [name]:value}
      ))  
      console.log(value)
    }

    const handleSubmission = async(e) => {
      e.preventDefault();

      const ToSend = {
        'Name': ContactForm.Name,
        'Email': ContactForm.Email,
        'Contact Number': ContactForm.ContactNumber,
        'Reason': ContactForm.Reason,
        'Message': ContactForm.Message
      }
      const sendingMail = await fetch('https://formspree.io/f/xpwwlggb',{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(ToSend)
      });
      if (sendingMail.ok){
          console.log('Contact Form Mail Sent!!!');
      }
    }

    return (
    <div className="flex flex-col lg:flex-row my-[10%] lg:mt-10 lg:mb-14 w-[95%] lg:w-[80%] 2xl:w-[70%] mx-auto">
      
      <div className="lg:w-[50%] lg:sticky lg:top-[10%]">
        <img
          className="h-[50vh] lg:h-full w-full object-cover rounded-[20px]"
          src={SidePic}
          alt="Contact Us Form"
        />
      </div>

      <div className="flex flex-col justify-center items-start py-6 lg:py-0 px-6 lg:px-10 lg:w-[50%]">
        <div className="text-[1.8rem] lg:text-[2.3rem] font-bold mb-4"><Underlining bodytext={'To Leave Us A Message'} textcolor={'w-1'} position={'left'}/></div>
        <form className='w-full' onSubmit={handleSubmission}>
            <div className='flex flex-col w-full mb-3'>
                <label className='text-[1.5rem] text-w-1 font-[500] capitalize tracking-wider'>Full name:</label>
                <input className='w-full px-3 py-2 rounded-[8px] text-[1.1rem] placeholder:text-g-1 lg:text-[1.3rem] text-w-1 bg-[#0000007f]' type='text' name='Name' value={ContactForm.Name} placeholder='Enter your full name' onChange={handleEntry} />
            </div>
            <div className='flex flex-col w-full mb-3'>
                <label className='text-[1.5rem] text-w-1 font-[500] capitalize tracking-wider'>Email:</label>
                <input className='w-full px-3 py-2 rounded-[8px] text-[1.1rem] placeholder:text-g-1 lg:text-[1.3rem] text-w-1 bg-[#0000007f]' type='email' name='Email' value={ContactForm.Email} placeholder='Enter your email' onChange={handleEntry} />
            </div>
            <div className='flex flex-col w-full mb-3'>
                <label className='text-[1.5rem] text-w-1 font-[500] capitalize tracking-wider'>Contact Number:</label>
                <input className='w-full px-3 py-2 rounded-[8px] text-[1.1rem] placeholder:text-g-1 lg:text-[1.3rem] text-w-1 bg-[#0000007f]' type='tel' name='ContactNumber' value={ContactForm.ContactNumber} placeholder='Enter your contact number' onChange={handleEntry} />
            </div>
            <div className='flex flex-col w-full mb-3'>
                <label className='text-[1.5rem] text-w-1 font-[500] capitalize tracking-wider'>Reason:</label>
                <input className='w-full px-3 py-2 rounded-[8px] text-[1.1rem] placeholder:text-g-1 lg:text-[1.3rem] text-w-1 bg-[#0000007f]' type='text' name='Reason' value={ContactForm.Reason} placeholder='Enter reason of contacting us' onChange={handleEntry} />
            </div>
            <div className='flex flex-col w-full mb-3'>
                <label className='text-[1.4rem] text-w-1 font-[500] capitalize tracking-wider'>Message:</label>
                <textarea className='w-full px-3 py-2 rounded-[8px] text-[1.1rem] placeholder:text-g-1 lg:text-[1.3rem] text-w-1 bg-[#0000007f]' rows={3} placeholder='Enter your detailed message' name='Message' value={ContactForm.Message} onChange={handleEntry}/>
            </div>
            <button className='bg-g-1 hover:bg-[#000000af] text-[1.2rem] hover:text-g-1 border-2 border-transparent hover:border-g-1 lg:text-[1.3rem] font-semibold capitalize text-w-1 px-4 py-1 rounded-2xl tracking-wide mt-3' type='submit'>Submit Message</button>
        </form>


      </div>
    </div>
  );
};

export default CU2;
