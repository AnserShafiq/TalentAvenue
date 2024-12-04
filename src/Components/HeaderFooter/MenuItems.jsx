import { FaQuestion } from "react-icons/fa";
import { PiBuildingsFill } from "react-icons/pi";
import { FaHelmetSafety } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";

export const MenuItems = [
    {
        Name: 'Home',
        Link: '/',
    },
]


export const whyTalentAvenue = {
    Name: 'About Us',
    Icon: <FaQuestion/>,
    TaglineSimple: 'Need knowledge about',
    TaglineUnderlined: 'Talent avenue?',
    ChildPages: [
        {
            ChildName: 'Why Talent Avenue',
            Link: '/why-talent-avenue',
        },{
            ChildName: 'How we work',
            Link: '/how-we-work',
        },{
            ChildName: "FAQ's",
            Link: '/faqs',
        },
    ]
}


export const industriesWeSupport = {
    Name: 'Industries we deal',
    Icon: <PiBuildingsFill/>,
    Link:'/industries-we-deal',
    TaglineSimple: 'Have a look on',
    TaglineUnderlined: 'industries we deal?',
}
export const employersData = {
    Name: 'Employers',
    Icon: <IoBriefcase/>,Link:'/employers/application-form',
    TaglineSimple: 'Gather more info about',
    TaglineUnderlined: 'Talent we provides!!',
}
export const jobseekersData = {
    Name: 'Job Seekers',
    Icon: <FaHelmetSafety/>,
    Link:'/job-seekers/application-form',
    TaglineSimple: 'Looking for Job options',
    TaglineUnderlined: 'enrol to attract',
}

export const FooterPages = [
    {
        Name: 'About Us',
        Link: '/why-talent-avenue',
    },{
        Name: 'Privacy Policy',
        Link: '/privacy-policy',
    },{
        Name: 'Security & Phishing',
        Link: '/security-phishing',
    },{
        Name: 'Cookies Policy',
        Link: '/cookies-policy',
    },{
        Name: 'Terms Of Use',
        Link: '/terms-of-use',
    },
]