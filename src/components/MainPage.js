import React, { Component } from "react";
import { animateScroll as scroll, Element, Link } from "react-scroll";
import Achievements from "./Achievements";
import ProjectList from "./ProjectList";
import AboutPage from "./AboutPage";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";
import Fade from "react-reveal/Fade";
import "../assets/css/main_page.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.navLinks = React.createRef();
    this.projectRef = React.createRef();
    this.achievementRef = React.createRef();
    this.contactRef = React.createRef();
    this.burgerRef = React.createRef();
    this.blogsRef = React.createRef();
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  toggleBurgerMenu = () => {
    if (window.innerWidth > 768) return;
    this.navLinks.current.classList.toggle("open");
    this.projectRef.current.classList.toggle("fade");
    this.achievementRef.current.classList.toggle("fade");
    this.contactRef.current.classList.toggle("fade");
    this.blogsRef.current.classList.toggle("fade");
    this.burgerRef.current.classList.toggle("toggle");
  };

  render() {
    return (
      <React.Fragment>
        <nav className="row">
          <div className="col-md navBarName">
            <Link to="about" smooth={true} duration={500}>
              TARUN
              <br />
              LUTHRA
            </Link>
          </div>
          <ul className="col-md nav-links" ref={this.navLinks}>
            <li ref={this.projectRef}>
              <Link
                activeClass="active"
                className="navLinkItem"
                to="projectsList"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.toggleBurgerMenu}
              >
                <span>Projects{"  "}</span>
              </Link>
            </li>
            <li ref={this.achievementRef}>
              <Link
                activeClass="active"
                className="navLinkItem"
                to="achievements"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.toggleBurgerMenu}
              >
                <span>Achievements</span>
              </Link>
            </li>
            <li ref={this.contactRef}>
              <Link
                activeClass="active"
                className="navLinkItem"
                to="contactInfo"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.toggleBurgerMenu}
              >
                Contact
              </Link>
            </li>
            <li ref={this.blogsRef}>
              <a
                href={"https://blogs.tarunluthra.in/"}
                className="navLinkItem"
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.toggleBurgerMenu}
              >
                Blogs
              </a>
            </li>
          </ul>

          <div
            className="hamburger"
            onClick={this.toggleBurgerMenu}
            ref={this.burgerRef}
          >
            <div className="line line1" />
            <div className="line line2" />
            <div className="line line3" />
          </div>
        </nav>

        <div className="main">
          <Element name="about" className="element">
            <AboutPage />
          </Element>

          <Element name="projectsList" className="element">
            <br />
            <br />
            <ProjectList />
          </Element>

          <Element name="achievements" className="element">
            <Achievements />
          </Element>

          <Element name="contactInfo" className="element">
            <br />
            <br />
            <Fade bottom>
              <br />
              <br />
              <ContactInfo />
            </Fade>
          </Element>

          <br />
          <br />
          <Footer scrollToTop={this.scrollToTop} />
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;
