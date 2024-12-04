import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

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
            gender:'',
            dateOfBirth:'',
            homeAddress:'',
            residentialStatus:''
        },
        Education:{
          lastDegree:'',
          institute:'',
          startingYear:'',
          endingYear:'',
        },
        Experience:{
          experienceType:'',
          EveningevCompany:'',
          contactNumber:'',
          jobPost:'',
          joiningDate:'',
          leavingDate:'',
        },
        JobTarget:{
          industry: '',
          type:'',
          hours12:'',
          shift:'',
          english:'',
          resume:'',
        }
    });

    const handleSubmissionCheck = (e) => {
        const {name, value} = e.target;
        setSubmissionCheck((Eveningev) => ({
            ...Eveningev,
            [name]:value,
        }))
    }

    const handleEntry = (e) => {
        const { name, value, dataset } = e.target;
        const parent = dataset.parent;
        setFields((EveningevFields) => ({
            ...EveningevFields,
            [parent]: {
                ...EveningevFields[parent],
                [name]: value,
            },
        }));
    };

    const handleFormSubmission=(e) =>{
        e.EveningeventDefault();
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
                <h2 className="text-[1.3rem] lg:text-[1.5rem] uppercase tracking-wide font-semibold text-g-1 w-full ">Personal Information</h2>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">First Name <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="firstName" data-parent="Applicant" value={fields.Applicant.firstName} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Last Name <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="lastName" data-parent="Applicant" value={fields.Applicant.lastName} onChange={handleEntry} />
                </div>
                <div className="flex flex-col mb-2 w-[49%]">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Email <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="email" name="email" data-parent="Applicant" value={fields.Applicant.email} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Contact Number <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="tel" name="contactNumber" data-parent="Applicant" value={fields.Applicant.contactNumber} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Gender <span className="text-g-1">*</span></label>
                    <div className="flex flex-row items-center h-full text-w-1 text-[1.1rem] font-[300]">
                      <label className='cursor-pointer flex items-center gap-1 mr-6 lg:mr-4'><input className='' type="radio" name="gender" value="Male" data-parent="Applicant" checked={fields.Applicant.gender === 'Male'} onChange={handleEntry} /> Male</label>
                      <label className='cursor-pointer flex items-center gap-1 mr-6 lg:mr-4'><input className='' type="radio" name="gender" value="Female" data-parent="Applicant" checked={fields.Applicant.gender === 'Female'} onChange={handleEntry} /> Female</label>  
                      <label className='cursor-pointer flex items-center gap-1 mr-6 lg:mr-4'><input className='' type="radio" name="gender" value="Other" data-parent="Applicant" checked={fields.Applicant.gender === 'Other'} onChange={handleEntry} /> Other</label>  
                    </div>
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Date Of Birth <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px] cursor-pointer" required type="date" name="dateOfBirth" data-parent="Applicant" value={fields.Applicant.dateOfBirth} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Address <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px] cursor-pointer" required type="text" name="homeAddress" data-parent="Applicant" value={fields.Applicant.homeAddress} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Residential Status <span className="text-g-1">*</span></label>
                    <select className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" name="residentialStatus" value={fields.Applicant.residentialStatus} onChange={handleEntry} required>
                        <option className="bg-[#323337] text-g-1" value={''}>Select option</option>
                        <option className="bg-[#323337] text-g-1" value={'Citizen'}>Citizen</option>
                        <option className="bg-[#323337] text-g-1" value={'PR'}>PR</option>
                        <option className="bg-[#323337] text-g-1" value={'International Student'}>International Student</option>
                        <option className="bg-[#323337] text-g-1" value={'Refugee'}>Refugee</option>
                        <option className="bg-[#323337] text-g-1" value={'Work Permit'}>Work Permit</option>
                    </select>
                
                </div>
                
                {/* Educational Details */}
                <h2 className="text-[1.3rem] lg:text-[1.5rem] uppercase tracking-wide font-semibold text-g-1 w-full ">Education</h2>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Latest Completed Degree <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="lastDegree" data-parent="Education" value={fields.Education.lastDegree} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Institute's Name <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="institute" data-parent="Education" value={fields.Education.institute} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Started In <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="month" name="startingYear" data-parent="Education" value={fields.Education.startingYear} onChange={handleEntry} />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Ended In <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="month" name="endingYear" data-parent="Education" value={fields.Education.endingYear} onChange={handleEntry} />
                </div>

                {/* Experience Details */}
                <h2 className="text-[1.3rem] lg:text-[1.5rem] uppercase tracking-wide font-semibold text-g-1 w-full ">Experience</h2>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Are you an experienced or freshie? <span className="text-g-1">*</span></label>
                    <div className="flex flex-row items-center h-full text-w-1 text-[1.1rem] font-[300]">
                      <label className='cursor-pointer flex items-center gap-1 mr-6 lg:mr-4'><input className='' type="radio" name="experienceType" value="Experienced" checked={fields.Experience.experienceType === 'Experienced'} data-parent="Experience" onChange={handleEntry} /> Experienced</label>
                      <label className='cursor-pointer flex items-center gap-1 mr-6 lg:mr-4'><input className='' type="radio" name="experienceType" value="Fresher" checked={fields.Experience.experienceType === 'Fresher'} data-parent="Experience" onChange={handleEntry} /> Fresher</label>  
                    </div>
                </div>
                {
                  fields.Experience.experienceType === 'Experienced' ? (
                    <>
                      <div className="flex flex-col w-[100%] mb-2">
                        <label className="text-[1.2rem] tracking-wide text-w-1">Last Company's Name <span className="text-g-1">*</span></label>
                        <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="EveningevCompany" data-parent="Experience" value={fields.Experience.EveningevCompany} onChange={handleEntry} />
                      </div>
                      <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                        <label className="text-[1.2rem] tracking-wide text-w-1">Company's Contact <span className="text-g-1">*</span></label>
                        <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="tel" name="contactNumber" data-parent="Experience" value={fields.Experience.contactNumber} onChange={handleEntry} />
                      </div>
                      <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                        <label className="text-[1.2rem] tracking-wide text-w-1">Job Post <span className="text-g-1">*</span></label>
                        <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="text" name="jobPost" data-parent="Experience" value={fields.Experience.jobPost} onChange={handleEntry} />
                      </div>
                      <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                        <label className="text-[1.2rem] tracking-wide text-w-1">Joining Date <span className="text-g-1">*</span></label>
                        <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="date" name="joinigDate" data-parent="Experience" value={fields.Experience.joiningDate} onChange={handleEntry} />
                      </div>
                      <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                        <label className="text-[1.2rem] tracking-wide text-w-1">Leaving Date <span className="text-g-1">*</span></label>
                        <input className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" required type="date" name="leavingDate" data-parent="Experience" value={fields.Experience.leavingDate} onChange={handleEntry} />
                      </div>
                    </>
                  ):(null)
                }

                {/* Target Job Details */}
                <h2 className="text-[1.3rem] lg:text-[1.5rem] uppercase tracking-wide font-semibold text-g-1 w-full ">Target Field</h2>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Industry <span className="text-g-1">*</span></label>
                    <select className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" name="industry" value={fields.JobTarget.industry} data-parent="JobTarget" onChange={handleEntry} required>
                        <option className="bg-[#323337] text-g-1" value={''}>Select industry</option>
                        <option className="bg-[#323337] text-g-1" value={'Information technology'}>Information technology</option>
                        <option className="bg-[#323337] text-g-1" value={'Healthcare'}>Healthcare</option>
                        <option className="bg-[#323337] text-g-1" value={'Accounting & Finance'}>Accounting & Finance</option>
                        <option className="bg-[#323337] text-g-1" value={'Manufacturing'}>Manufacturing</option>
                        <option className="bg-[#323337] text-g-1" value={'Retail'}>Retail</option>
                        <option className="bg-[#323337] text-g-1" value={'Engineering'}>Engineering</option>
                        <option className="bg-[#323337] text-g-1" value={'Construction'}>Construction</option>
                        <option className="bg-[#323337] text-g-1" value={'Marketing'}>Marketing</option>
                    </select>
                
                </div>

                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Job Type <span className="text-g-1">*</span></label>
                    <div className="flex flex-row items-center h-full text-w-1 text-[1.1rem] font-[300]">
                      <label className='cursor-pointer flex items-center gap-1 mr-6 lg:mr-4'><input className='' type="radio" name="type" value="Full time" checked={fields.JobTarget.type === 'Full time'} data-parent="JobTarget" onChange={handleEntry} /> Full time</label>
                      <label className='cursor-pointer flex items-center gap-1 mr-6 lg:mr-4'><input className='' type="radio" name="type" value="Part time" checked={fields.JobTarget.type === 'Part time'} data-parent="JobTarget" onChange={handleEntry} /> Part time</label>  
                    </div>
                </div>
                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Target Shift <span className="text-g-1">*</span></label>
                    <select className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" name="shift" value={fields.JobTarget.shift} data-parent="JobTarget" onChange={handleEntry} required>
                        <option className="bg-[#323337] text-g-1" value={''}>Select shift</option>
                        <option className="bg-[#323337] text-g-1" value={'Morning'}>Morning</option>
                        <option className="bg-[#323337] text-g-1" value={'Evening'}>Evening</option>
                        <option className="bg-[#323337] text-g-1" value={'Afternoon'}>Afternoon</option>
                        <option className="bg-[#323337] text-g-1" value={'Weekend'}>Weekend</option>
                        <option className="bg-[#323337] text-g-1" value={'Any'}>Any</option>
                    </select>
                </div>

                <div className="flex flex-col w-[100%] lg:w-[49%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Proficiency In English <span className="text-g-1">*</span></label>
                    <select className="text-[1.1rem] rounded-xl text-w-1 font-[300] bg-[#bc9a641e] px-3 py-[6px]" name="shift" value={fields.JobTarget.shift} data-parent="JobTarget" onChange={handleEntry} required>
                        <option className="bg-[#323337] text-g-1" value={''}>Select level</option>
                        <option className="bg-[#323337] text-g-1" value={'Speak'}>Speak</option>
                        <option className="bg-[#323337] text-g-1" value={'Read'}>Read</option>
                        <option className="bg-[#323337] text-g-1" value={'Write'}>Write</option>
                        <option className="bg-[#323337] text-g-1" value={'All'}>All</option>
                    </select>
                </div>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Able to work 12-hours a day? <span className="text-g-1">*</span></label>
                    <div className="flex flex-row items-center h-full text-w-1 text-[1.1rem] font-[300]">
                      <label className='cursor-pointer flex items-center gap-1 mr-6 lg:mr-4'><input className='' type="radio" name="hours12" value="Yes" checked={fields.JobTarget.hours12 === 'Yes'} data-parent="JobTarget" onChange={handleEntry} /> Yes</label>
                      <label className='cursor-pointer flex items-center gap-1 mr-6 lg:mr-4'><input className='' type="radio" name="hours12" value="No" checked={fields.JobTarget.hours12 === 'No'} data-parent="JobTarget" onChange={handleEntry} /> No</label>  
                    </div>
                </div>
                <div className="flex flex-col w-[100%] mb-2">
                    <label className="text-[1.2rem] tracking-wide text-w-1">Upload your resume <span className="text-g-1">*</span></label>
                    <input className="text-[1.1rem] text-w-1 font-[300]" type="file"/>
                </div>

                <div className="flex flex-col w-[100%] mt-6 mb-2">
                    <label className='cursor-pointer block items-start gap-x-1 leading-tight text-w-1'><input className='mt-[0%] lg:mt-[0.4%]' type="checkbox" name="one" value="Check" checked={submissionCheck.one === 'Check'} onChange={handleSubmissionCheck} /> I acknowledge that I have read and accepted the <Link className="text-g-1 ml-1" to={'/privacy-policy'}>Privacy Policy</Link>, <Link className="text-g-1 ml-1" to={'/terms-of-use'}>Terms of Use</Link> and<Link className="text-g-1 ml-1" to={'/cookies-policy'}>Cookies Policy</Link>.</label>
                    <label className='cursor-pointer block items-start mt-2 gap-x-1 leading-tight text-w-1'><input className='mt-[0%] lg:mt-1 ' type="checkbox" name="two" value="Check" checked={submissionCheck.two === 'Check'} onChange={handleSubmissionCheck} /> Yes, please keep me updated on Talent Avenue news, events, offers, or any marketing activity such as the latest employment data and early access to innovative tools. This information may be delivered by post, email, SMS, MMS, phone, social media, push notifications in Apps, and other means. I understand that I may opt out at any time, and my Eveningeferences are always respected.</label>
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