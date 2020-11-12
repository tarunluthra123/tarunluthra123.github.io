import React from 'react';
import me from '../assets/me.jpg'
import SkillsShowcase from "./SkillsShowcase";
import '../assets/css/about.css'


const AboutPage = (props) => {
    const decideImageHeight = () => {
        console.log("ko")
        if (window.innerWidth > 900)
            return 240
        else if (window.innerWidth > 768)
            return 200
        else if (window.innerWidth > 600)
            return 175
        else if (window.innerWidth > 450)
            return 150
        else
            return 130
    }

    return (
        <React.Fragment>
            <div className="aboutContainer">
                {window.innerWidth <= 420 &&
                <div align="center" className="nameHeading">Hey, I'm <strong>Tarun</strong>.</div>}
                <div className="row">
                    <div className="col-md-5 col-sm-4 col-4">
                        <img src={me} height={decideImageHeight()} alt="Tarun Luthra"/>
                        {console.log(decideImageHeight())}
                    </div>
                    <div className="col-md col-sm col">
                        <br/>
                        {window.innerWidth > 420 &&
                        <div className="nameHeading">Hey, I'm <strong>Tarun</strong>.</div>}
                        <p className="introductionText">
                            A web developer with advanced DS-Algo skills.
                            I love to create web apps and solve new challenges everyday.
                        </p>
                    </div>
                </div>
            </div>
            <div className="diagonallyTiltedDivAbout">abcdc</div>
            <SkillsShowcase/>
        </React.Fragment>
    );
}

export default AboutPage;