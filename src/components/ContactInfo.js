import React, {Component} from 'react';
import ContactForm from "./ContactForm";
import FacebookLogo from '../assets/facebook_logo.png';
import InstagramLogo from '../assets/instagram_icon.svg';
import GithubLogo from '../assets/github_logo_2.png';
import LinkedinLogo from '../assets/linkedin_logo.svg';
import GmailLogo from '../assets/gmail_logo.png';
import GithubProfileCard from '../assets/github_profile_card.png';
import LinkedinCard from '../assets/linkedin_card.png';
import InstagramCard from '../assets/instagram_card.png';
import FacebookCard from '../assets/facebook_card.png';
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
                    <div className="col-2"></div>
                    <div className="socialMediaIcons col">
                        <Popup content="tarunluthra123" trigger={
                            <a href="https://www.facebook.com/tarunluthra123/" target="_blank">
                                <img src={FacebookLogo} height={50} className="m-2"/>
                            </a>} hoverable>
                            <img src={FacebookCard} height={130}/>
                        </Popup>
                        <Popup content="tarunluthra123" trigger={
                            <a href="https://www.instagram.com/tarun.luthra/" target="_blank">
                                <img src={InstagramLogo} height={50} className="m-2"/>
                            </a>} hoverable>
                            <img src={InstagramCard} height={140}/>
                        </Popup>
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
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;