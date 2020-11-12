import React, {Component} from 'react';
import {animateScroll as scroll, Element, Link} from 'react-scroll'
import Achievements from "./Achievements";
import ProjectList from "./ProjectList";
import AboutPage from "./AboutPage";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";
import Fade from 'react-reveal/Fade';
import '../assets/css/main_page.css'

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.navLinks = React.createRef()
        this.aboutRef = React.createRef()
        this.projectRef = React.createRef()
        this.achievementRef = React.createRef()
        this.contactRef = React.createRef()
        this.resumePdfRef = React.createRef()
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    toggleBurgerMenu = () => {
        if (window.innerWidth > 768)
            return
        this.navLinks.current.classList.toggle('open')
        this.aboutRef.current.classList.toggle('fade')
        this.projectRef.current.classList.toggle('fade')
        this.achievementRef.current.classList.toggle('fade')
        this.contactRef.current.classList.toggle('fade')
        this.resumePdfRef.current.classList.toggle('fade')
    }

    render() {
        return (
            <React.Fragment>
                <nav className="row">
                    <div className="col-md navBarName">
                        <Link to="about" smooth={true} duration={500}>
                        TARUN<br/>
                        LUTHRA
                        </Link>
                    </div>
                    <ul className="col-md nav-links" ref={this.navLinks}>
                        {/*<li ref={this.aboutRef}>*/}
                        {/*    <Link className="navLinkItem" to="about" spy={true}*/}
                        {/*          smooth={true} duration={500} onClick={this.toggleBurgerMenu}>*/}
                        {/*        About*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li ref={this.projectRef}>
                            <Link activeClass="active" className="navLinkItem" to="projectsList" spy={true}
                                  smooth={true} duration={500} onClick={this.toggleBurgerMenu}>
                                Projects
                            </Link>
                        </li>
                        <li ref={this.achievementRef}>
                            <Link className="navLinkItem" to="achievements" spy={true}
                                  smooth={true} duration={500} onClick={this.toggleBurgerMenu}>
                                Achievements
                            </Link>
                        </li>
                        <li ref={this.contactRef}>
                            <Link activeClass="active" className="navLinkItem" to="contactInfo" spy={true}
                                  smooth={true} duration={500} onClick={this.toggleBurgerMenu}>
                                Contact
                            </Link>
                        </li>
                        <li ref={this.resumePdfRef}>
                            <a href={'http://tarunluthra123.github.io/Resume.pdf'} className="navLinkItem"
                               target="_blank" onClick={this.toggleBurgerMenu}>
                                Résumé PDF
                            </a>
                        </li>
                    </ul>

                    <div className="hamburger" onClick={this.toggleBurgerMenu}>
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                    </div>
                </nav>

                <div className="main">
                    <Element name="about" className="element">
                        <AboutPage/>
                    </Element>

                    <Element name="projectsList" className="element">
                        <br/><br/>
                        <ProjectList/>
                    </Element>

                    <Element name="achievements" className="element">
                        <Achievements/>
                    </Element>

                    <Element name="contactInfo" className="element">
                        <br/><br/>
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