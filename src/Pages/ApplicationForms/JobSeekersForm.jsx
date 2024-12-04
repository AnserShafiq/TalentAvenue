import { useEffect, useState } from "react"

const FormStructure = () => {
    const [submissionCheck, setSubmissionCheck] = useState({
        one: '',
        two: ''
    })
    const [fields, setFields] = useState({
        Applicant: {
            firstName: '',
            lastName:'',
            email:'',
            contactNumber:'',
            jobTitle:''
        },
        Company: {
            name: '',
            contactNumber:'',
            email:'',
            postalCode:'',
            streetAddress:'',
            city:'',
            state:'',
        },
        wayhrefContact:'',
        industryType:'',
        countOfStaffNeeded:'',
        message:'',
    });

    const handleSubmissionCheck = (e) => {
        const {name, value} = e.target;
        setSubmissionCheck((prev) => ({
            ...prev,
            [name]:value,
        }))
    }

    const handleEntry = (e) => {
        const { name, value, dataset } = e.target;
        const parent = dataset.parent;

        if(parent!=='Applicant' && parent!=='Company'){

            setFields((prev) => ({
                ...prev,
                [name]:value,
            }))

        }else{
            setFields((prevFields) => ({
                ...prevFields,
                [parent]: {
                    ...prevFields[parent],
                    [name]: value,
                },
            }));
        }

    };

    const handleFormSubmission=(e) =>{
        e.preventDefault();
        console.log(fields)
    }

    useEffect(() => {
        if(submissionCheck.one === 'Check' && submissionCheck.two ==='Check'){
            console.log(submissionCheck)
        }
    },[submissionCheck])

    return (
        <div className="flex flex-col w-[90%] lg:w-full h-full bg-[#323337] mx-auto px-4 lg:px-8 py-6">
            <h3 className="text-[0.9rem] lg:text-[1.1rem] text-g-1">
                Fill the form given below, we will reach back to you as soon as possible.
            </h3>
            <form className=" flex justify-between flex-wrap mt-4" onSubmit={handleFormSubmission}>
                {/* Personal Info */}
                <h2 className="text-[1.3rem] lg:text-[1.5rem] uppercase tracking-wide font-semibold text-g-1 w-full">Personal Information</h2>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">First Name <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="firstName" data-parent="Applicant" value={fields.Applicant.firstName} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Last Name <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="lastName" data-parent="Applicant" value={fields.Applicant.lastName} onChange={handleEntry} />
                </div>
                <div className="flex flex-col mb-2 w-[100%]">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Email <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="email" name="email" data-parent="Applicant" value={fields.Applicant.email} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Contact Number <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="tel" name="contactNumber" data-parent="Applicant" value={fields.Applicant.contactNumber} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Job Position <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="jobTitle" data-parent="Applicant" value={fields.Applicant.jobTitle} onChange={handleEntry} />
                </div>
                {/* Company Details */}
                <h2 className="text-[1.3rem] lg:text-[1.5rem] uppercase tracking-wide font-semibold text-g-1 w-full">Company Details</h2>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Company Name <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="name" data-parent="Company" value={fields.Company.name} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Email <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="email" name="email" data-parent="Company" value={fields.Company.email} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Contact Number <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="tel" name="contactNumber" data-parent="Company" value={fields.Company.contactNumber} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Postal Code</label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="postalCode" data-parent="Company" value={fields.Company.postalCode} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Address <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="streetAddress" data-parent="Company" value={fields.Company.streetAddress} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">City <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="city" data-parent="Company" value={fields.Company.city} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">State <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="state" data-parent="Company" value={fields.Company.state} onChange={handleEntry} />
                </div>

                {/* Other Information */}
                <h2 className="text-[1.3rem] lg:text-[1.5rem] uppercase tracking-wide font-semibold text-g-1 w-full">Other Details</h2>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">What you prefer href contact you?</label>
                    <div className="flex flex-row text-w-1 text-[1.1rem] font-[300]">
                        <label className='cursor-pointer flex items-center gap-1 mr-6 lg:mr-4'><input className='' type="radio" name="wayhrefContact" value="Call" checked={fields.wayhrefContact === 'Call'} onChange={handleEntry} /> Call</label>
                        <label className='cursor-pointer flex items-center gap-1 lg:mr-4'><input className='' type="radio" name="wayhrefContact" value="Email" checked={fields.wayhrefContact === 'Email'} onChange={handleEntry} /> E-Mail</label>
                    </div>
                </div>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Target Industry Type <span className="text-g-1">*</span></label>
                    <select className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px] focus:ring-black" name="industryType" value={fields.industryType} onChange={handleEntry} required>
                        <option className="bg-[#323337] text-g-1" value={''}>Select industry type</option>
                        <option className="bg-[#323337] text-g-1" value={'Information Technology'}>Information Technology</option>
                        <option className="bg-[#323337] text-g-1" value={'Healthcare'}>Healthcare</option>
                        <option className="bg-[#323337] text-g-1" value={'Accounting & finance'}>Accounting & finance</option>
                        <option className="bg-[#323337] text-g-1" value={'Manufacturing'}>Manufacturing</option>
                        <option className="bg-[#323337] text-g-1" value={'Retail'}>Retail</option>
                        <option className="bg-[#323337] text-g-1" value={'Engineering'}>Engineering</option>
                        <option className="bg-[#323337] text-g-1" value={'Construction'}>Construction</option>
                        <option className="bg-[#323337] text-g-1" value={'Marketing'}>Marketing</option>
                    </select>
                </div>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Count Of Candidates Needed <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" type="number" name="countOfStaffNeeded" value={fields.countOfStaffNeeded} onChange={handleEntry} required/>
                </div>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Any additional info you like href share?</label>
                    <textarea className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" row={3} name="message" value={fields.message} onChange={handleEntry} />
                </div>

                <div className="flex flex-col w-[100%] mt-4 mb-2">
                    <label className='cursor-pointer block items-start gap-x-1 leading-tight text-w-1'><input className='mt-[0%] lg:mt-[0.4%]' type="checkbox" name="one" value="Check" checked={submissionCheck.one === 'Check'} onChange={handleSubmissionCheck} /> I acknowledge that I have read and accepted the <a className="text-g-1 ml-1" href={'/privacy-policy'}>Privacy Policy</a>, <a className="text-g-1 ml-1" href={'/terms-of-use'}>Terms of Use</a> and<a className="text-g-1 ml-1" href={'/cookies-policy'}>Cookies Policy</a>.</label>
                    <label className='cursor-pointer block items-start mt-2 gap-x-1 leading-tight text-w-1'><input className='mt-[0%] lg:mt-1 ' type="checkbox" name="two" value="Check" checked={submissionCheck.two === 'Check'} onChange={handleSubmissionCheck} /> Yes, please keep me updated on Talent Avenue news, events, offers, or any marketing activity such as the latest employment data and early access href innovative hrefols. This information may be delivered by post, email, SMS, MMS, phone, social media, push notifications in Apps, and other means. I understand that I may opt out at any time, and my preferences are always respected.</label>
                </div>
                <button type="submit" className="text-[1.3rem] text-w-1 bg-g-1 mt-4 lg:mt-1 font-bold uppercase mx-auto px-4 py-[1.5%] rounded-2xl tracking-wide hover:text-g-1 hover:bg-[#4f4f4f]">Submit</button>
            </form>
        </div>
    );
};
export const JobSeekersFormData = {
    Left: {
        Heading:'Job Application',
        Description: "Thank you for considering a career opportunity with Talent Avenue. Please fill out the required information below and upload your most recent resume for our review and consideration."
    },
    Right: () => <FormStructure />
}