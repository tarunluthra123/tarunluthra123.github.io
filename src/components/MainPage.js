import React, {Component} from 'react';
import {animateScroll as scroll, Element, Link} from 'react-scroll'
import {Button, Nav, Navbar} from 'react-bootstrap';
import AboutPage from "./AboutPage";
import WorkExperience from "./WorkExperience";
import ProjectList from "./ProjectList";
import EducationList from "./EducationList";
import Achievements from "./Achievements";
import ResumePDF from '../assets/Resume.pdf';
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";

class MainPage extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        return (
            <div>
                <Navbar fixed="top" bg="light">
                    <Nav className="container-fluid row">
                        <Link activeClass="active" className="navLinks col" to="about" spy={true}
                              smooth={true} duration={500}>
                            <Button variant="light">
                                Introduction
                            </Button>
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="workExperience" spy={true}
                              smooth={true} duration={500}>
                            <Button variant="light"> Work Experience</Button>
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="projectsList" spy={true}
                              smooth={true} duration={500}>
                            <Button variant="light">Projects</Button>
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="education" spy={true} smooth={true}
                              duration={500}>
                            <Button variant="light"> Education</Button>
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="achievements" spy={true}
                              smooth={true} duration={500}>
                            <Button variant="light">Achievements</Button>
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="contactInfo" spy={true}
                              smooth={true} duration={500}>
                            <Button variant="light">Contact</Button>
                        </Link>
                        <div className="navLinks col">
                            <a href={ResumePDF} target="_blank">
                                <Button variant="light">Resume PDF</Button>
                            </a>
                        </div>
                    </Nav>
                </Navbar>

                <br/>
                <div className="main">
                    <Element name="about" className="element">
                        <br/><br/>
                        <AboutPage/>
                    </Element>

                    <Element name="workExperience" className="element">
                        <br/><br/>
                        <WorkExperience/>
                    </Element>

                    <Element name="projectsList" className="element">
                        <br/><br/>
                        <ProjectList/>
                    </Element>

                    <Element name="education" className="element">
                        <br/><br/>
                        <EducationList/>
                    </Element>

                    <Element name="achievements" className="element">
                        <br/><br/>
                        <Achievements/>
                    </Element>

                    <Element name="contactInfo" className="element">
                        <br/><br/>
                        <ContactInfo/>
                    </Element>

                    <br/><br/>
                    <Footer scrollToTop={this.scrollToTop}/>
                </div>
            </div>
        );
    }
}

export default MainPage;