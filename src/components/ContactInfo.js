import React, {Component} from 'react';
import ContactForm from "./ContactForm";
import GithubLogo from '../assets/github_logo_2.png';
import LinkedinLogo from '../assets/linkedin_logo.png';
import GmailLogo from '../assets/gmail_logo.png';
import GithubProfileCard from '../assets/github_profile_card.jpg';
import LinkedinCard from '../assets/linkedin_card.jpg';
import {Popup} from "semantic-ui-react";

class ContactInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className={"container sectionTitleContainer"}>
                    <b className="sectionTitle">Contact Me</b>
                </div>
                <ContactForm/>

                <div className="container-fluid row">
                    <div className="col-md-2 col-sm-1 col-1"></div>
                    <div className="socialMediaIcons col-md col-sm col">
                        <Popup content="tarunluthra123" trigger={
                            <a href="https://github.com/tarunluthra123" target="_blank">
                                <img src={GithubLogo} height={50} className="m-2"/>
                            </a>} hoverable>
                            <img src={GithubProfileCard} height={140}/>
                        </Popup>
                        <Popup content="tarunluthra123" trigger={
                            <a href="https://www.linkedin.com/in/tarunluthra123/" target="_blank">
                                <img src={LinkedinLogo} height={50} className="m-2"/>
                            </a>} hoverable>
                            <img src={LinkedinCard} height={200}/>
                        </Popup>
                        <Popup content="tarunluthra987@gmail.com" trigger={
                            <a href="mailto:tarunluthra987@gmail.com">
                                <img src={GmailLogo} height={50} className="m-2"/>
                            </a>} hoverable/>
                    </div>
                    <div className="col-md-2 col-sm-1 col-1"></div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;