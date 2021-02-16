import React from 'react';
import ContactForm from "./ContactForm";
import GithubLogo from '../assets/contact_images/github_logo_2.png';
import LinkedinLogo from '../assets/contact_images/linkedin_logo.png';
import GmailLogo from '../assets/contact_images/gmail_logo.png';

const ContactInfo = (props) => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className={"container sectionTitleContainer"}>
                    <b className="sectionTitle">Contact Me</b>
                </div>
                <div className="container">
                    <ContactForm/>
                </div>

                <div className="container-fluid row">
                    <div className="col-md-2 col-sm-1 col-1"></div>
                    <div className="socialMediaIcons col-md col-sm col">
                        <a href="https://github.com/tarunluthra123" target="_blank" rel="noopener noreferrer">
                            <img src={GithubLogo} height={50} className="m-2" alt={"Github"}/>
                        </a>
                        <a href="https://www.linkedin.com/in/tarunluthra123/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinLogo} height={50} className="m-2" alt={"Linkedin"}/>
                        </a>
                        <a href="mailto:tarunluthra987@gmail.com">
                            <img src={GmailLogo} height={50} className="m-2" alt={"Mail"}/>
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-1 col-1"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactInfo;