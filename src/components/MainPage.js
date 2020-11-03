import React, {Component} from 'react';
import {animateScroll as scroll, Element, Events, Link, scroller} from 'react-scroll'
import {Nav, Navbar} from 'react-bootstrap';
import Achievements from "./Achievements";
import {Icon, Popup} from "semantic-ui-react";
import ProjectList from "./ProjectList";
import WorkExperience from "./WorkExperience";
import EducationList from "./EducationList";
import AboutPage from "./AboutPage";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";
import Fade from 'react-reveal/Fade';

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
        Events.scrollEvent.register("begin", function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function () {
            console.log("end", arguments);
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
    }


    scrollTo() {
        scroller.scrollTo("scroll-to-element", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart"
        });
    }

    scrollToWithContainer() {
        let goToContainer = new Promise((resolve, reject) => {
            Events.scrollEvent.register("end", () => {
                resolve();
                Events.scrollEvent.remove("end");
            });

            scroller.scrollTo("scroll-container", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart"
            });
        });

        goToContainer.then(() =>
            scroller.scrollTo("scroll-container-second-element", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
                containerId: "scroll-container"
            })
        );
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
                                <a href="#" className="navLinkText">
                                    &#128102;
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#" className="navLinkText">
                                Introduction&#128102;
                            </a>}
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="workExperience" spy={true}
                              smooth={true} duration={500}>
                            {!isDesktop &&
                            <Popup content={"Work Experience"} trigger={
                                <a href="#" className="navLinkText">
                                    &#128188;
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#" className="navLinkText">
                                Work Experience&#128188;
                            </a>}
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="projectsList" spy={true}
                              smooth={true} duration={500}>
                            {!isDesktop &&
                            <Popup content={"Projects"} trigger={
                                <a href="#" className="navLinkText">
                                    &#128187;
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#" className="navLinkText">
                                Projects&#128187;
                            </a>}
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="education" spy={true} smooth={true}
                              duration={500}>
                            {!isDesktop &&
                            <Popup content={"Education"} trigger={
                                <a href="#" className="navLinkText">
                                    <Icon color="green" name="book"/>
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#" className="navLinkText">
                                Education<Icon color="green" name="book"/>
                            </a>}
                        </Link>
                        <Link className="navLinks col" to="achievements" spy={true}
                              smooth={true} duration={500}>
                            {!isDesktop &&
                            <Popup content={"Achievements"} trigger={
                                <a href="#" className="navLinkText">
                                    &#127941;
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#" className="navLinkText">
                                Achievements&#127941;
                            </a>}
                        </Link>
                        <Link activeClass="active" className="navLinks col" to="contactInfo" spy={true}
                              smooth={true} duration={500}>
                            {!isDesktop &&
                            <Popup content={"Contact"} trigger={
                                <a href="#" className="navLinkText">
                                    <Icon color="red" name="mail"/>
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href="#" className="navLinkText">
                                Contact<Icon color="red" name="mail"/>
                            </a>}
                        </Link>
                        <div className="navLinks col">
                            {!isDesktop &&
                            <Popup content={"Résumé PDF"} trigger={
                                <a href={'https://tarunluthra.me/Resume.pdf/'} target="_blank">
                                    &#128196;
                                </a>
                            }/>}
                            {isDesktop &&
                            <a href={'https://tarunluthra.me/Resume.pdf/'} target="_blank">
                                Résumé PDF&#128196;
                            </a>
                            }
                        </div>
                    </Nav>
                </Navbar>

                <br/>
                <div className="main">
                    <Element name="about" className="element">
                        <AboutPage/>
                    </Element>

                    <Element name="workExperience" className="element">
                        <Fade bottom>
                            <br/><br/>
                            <WorkExperience/>
                        </Fade>
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
                        <Fade bottom>
                            <br/><br/>
                            <Achievements/>
                        </Fade>
                    </Element>

                    <Element name="contactInfo" className="element">
                        <Fade bottom>
                            <br/><br/>
                            <ContactInfo/>
                        </Fade>
                    </Element>

                    <br/><br/>
                    <Footer scrollToTop={this.scrollToTop}/>
                </div>
            </React.Fragment>
        );
    }
}

export default MainPage;