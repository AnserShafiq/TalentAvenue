import ExtraPageBody from "./ExtraPageBody";
import { CookiesPolicyContent, PrivacyPolicyContent, SecurityAndPhishingContent, TermsOfUseContent } from "./PagesContent";


export const PrivacyPolicy = () => <ExtraPageBody PageHeading={'Privacy Policy'} PageContent={PrivacyPolicyContent} />

export const SecurityPhishing = () => <ExtraPageBody PageHeading={'Security and Phishing'} PageContent={SecurityAndPhishingContent} />

export const CookiesPolicy = () => <ExtraPageBody PageHeading={'Cookies Policy'} PageContent={CookiesPolicyContent}/>

export const TermsOfUse = () => <ExtraPageBody PageHeading={'Terms Of Use'} PageContent={TermsOfUseContent} />