import ApplicationPage from "./ApplicationPage";
import { EmployersFormData } from "./EmployersForm";
import { JobSeekersFormData } from "./JobSeekersForm";


export const EmployersForm = () => <ApplicationPage LeftSide={EmployersFormData.Left} RightSide={EmployersFormData.Right}/>
export const JobSeekersForm = () => <ApplicationPage LeftSide={JobSeekersFormData.Left} RightSide={JobSeekersFormData.Right}/>