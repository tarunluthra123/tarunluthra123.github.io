import React, {Component} from 'react';
import me from '../assets/me.jpg'
import SkillsShowcase from "./SkillsShowcase";
import '../assets/css/about.css'


class AboutPage extends Component {
    decideImageHeight = () => {
        if (window.innerWidth > 550)
            return 240
        else if (window.innerWidth > 400)
            return 150
        else
            return 125
    }

    render() {
        return (
            <React.Fragment>
                <div className="aboutContainer">
                    {window.innerWidth <= 420 &&
                    <div align="center" className="nameHeading">Hey, I'm <strong>Tarun</strong>.</div>}
                    <div className="row">
                        <div className="col-lg-3"/>
                        <div className="col-md-3 col-sm-5 col-5">
                            <img src={me} height={this.decideImageHeight()}/>
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
}

export default AboutPage;