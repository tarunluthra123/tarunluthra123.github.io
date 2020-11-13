import React from 'react';
import me from '../assets/me.jpg'
import SkillsShowcase from "./SkillsShowcase";
import '../assets/css/about.css'


const AboutPage = (props) => {
    return (
        <React.Fragment>
            <div className="aboutContainer">
                <div align="center" className="upperNameHeading nameHeading">Hey, I'm <strong>Tarun</strong>.</div>
                <div className="row">
                    <div className="col-md-5 col-sm-4 col-4">
                        <img src={me} alt="Tarun Luthra" className="introductionPhoto"/>
                    </div>
                    <div className="col-md col-sm col">
                        <br/>
                        <div className="inlineNameHeading nameHeading">Hey, I'm <strong>Tarun</strong>.</div>
                        <p className="introductionText">
                            A web developer with advanced DS-Algo skills.
                            I love to create web apps and solve new challenges everyday.
                        </p>
                    </div>
                </div>
            </div>
            <div className="diagonallyTiltedDivAbout">Some Invisible Text</div>
            <SkillsShowcase/>
        </React.Fragment>
    );
}

export default AboutPage;