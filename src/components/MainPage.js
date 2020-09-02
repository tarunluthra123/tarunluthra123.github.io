import React, {Component} from 'react';
import {animateScroll as scroll, Element, Link} from 'react-scroll'
import {Nav, Navbar} from 'react-bootstrap';
import Achievements from "./Achievements";
import {Icon, Popup} from "semantic-ui-react";
import ProjectList from "./ProjectList";
import WorkExperience from "./WorkExperience";
import EducationList from "./EducationList";
import AboutPage from "./AboutPage";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false
        }
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate = () => {
        this.setState({isDesktop: window.innerWidth > 1000});
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        const {isDesktop} = this.state
        return (
            <React.Fragment>
                <Navbar fixed="top" className="navbarContainer p-3">
                    <Nav className="container-fluid row ">
                        <Link activeClass="active" className="navLinks col" to="about" spy={true}
                              smooth={true} duration={500}>
                            {!isDesktop &&
                            <Popup content={"Introduction"} trigger={
                                <a href="#">
                                    &#128102;
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#">
                                Introduction&#128102;
                            </a>}
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="workExperience" spy={true}
                              smooth={true} duration={500}>
                            {!isDesktop &&
                            <Popup content={"Work Experience"} trigger={
                                <a href="#">
                                    &#128188;
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#">
                                Work Experience&#128188;
                            </a>}
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="projectsList" spy={true}
                              smooth={true} duration={500}>
                            {!isDesktop &&
                            <Popup content={"Projects"} trigger={
                                <a href="#">
                                    &#128187;
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#">
                                Projects&#128187;
                            </a>}
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="education" spy={true} smooth={true}
                              duration={500}>
                            {!isDesktop &&
                            <Popup content={"Education"} trigger={
                                <a href="#">
                                    <Icon color="green" name="book"/>
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#">
                                Education<Icon color="green" name="book"/>
                            </a>}
                        </Link>
                        <Link className="navLinks col" to="achievements" spy={true}
                              smooth={true} duration={500}>
                            {!isDesktop &&
                            <Popup content={"Achievements"} trigger={
                                <a href="#">
                                    &#127941;
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#">
                                Achievements&#127941;
                            </a>}
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="contactInfo" spy={true}
                              smooth={true} duration={500}>
                            {!isDesktop &&
                            <Popup content={"Contact"} trigger={
                                <a href="#">
                                    <Icon color="red" name="mail"/>
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#">
                                Contact<Icon color="red" name="mail"/>
                            </a>}
                        </Link>
                        <div className="navLinks col">
                            {!isDesktop &&
                            <Popup content={"Resume PDF"} trigger={
                                <a href="#">
                                    &#128196;
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#">
                                Resume PDF&#128196;
                            </a>}
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