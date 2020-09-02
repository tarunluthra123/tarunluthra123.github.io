import React, {Component} from 'react';
import {animateScroll as scroll, Element, Link} from 'react-scroll'
import {Nav, Navbar} from 'react-bootstrap';
import AboutPage from "./AboutPage";
import WorkExperience from "./WorkExperience";
import ProjectList from "./ProjectList";
import EducationList from "./EducationList";
import Achievements from "./Achievements";
import ResumePDF from '../assets/Resume.pdf';
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";
import {Icon} from "semantic-ui-react";

class MainPage extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar fixed="top" className="navbarContainer p-3">
                    <Nav className="container-fluid row ">
                        <Link activeClass="active" className="navLinks col" to="about" spy={true}
                              smooth={true} duration={500}>
                            <a href="#">Introduction &#128102;</a>
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="workExperience" spy={true}
                              smooth={true} duration={500}>
                            <a href="#">Work Experience &#128188;</a>
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="projectsList" spy={true}
                              smooth={true} duration={500}>
                            <a href="#">Projects &#128187;</a>
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="education" spy={true} smooth={true}
                              duration={500}>
                            <a href="#">Education<Icon color="green" name="book"/></a>
                        </Link>
                        <Link className="navLinks col" to="achievements" spy={true}
                              smooth={true} duration={500}>
                            <a href="#">Achievements  &#127941;</a>
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="contactInfo" spy={true}
                              smooth={true} duration={500}>
                            <a href="#">Contact<Icon color="red" name="mail"/></a>
                        </Link>
                        <div className="navLinks col">
                            <a href={ResumePDF} target="_blank">
                                Resume PDF &#128196;
                            </a>
                        </div>
                    </Nav>
                </Navbar>

                <br/>
                <div className="main">
                    <Element name="about" className="element">
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
            </React.Fragment>
        );
    }
}

export default MainPage;