import React, {Component} from 'react';
import SkillsGraph from "./SkillsGraph";
import me from '../assets/me.jpg'
import SkillsShowcase from "./SkillsShowcase";


class AboutPage extends Component {
    decideImageHeight = () => {
        if (window.innerWidth > 550)
            return 200
        else if (window.innerWidth > 400)
            return 150
        else
            return 125
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {window.innerWidth <= 420 && <h1 align="center">Tarun Luthra</h1>}
                    <div className="row">
                        <div className="col-lg-2"/>
                        <div className="col-md-4 col-sm-5 col-5 container-fluid ">
                            <img src={me} height={this.decideImageHeight()}/>
                        </div>
                        <div className="col-md col-sm col">
                            {window.innerWidth > 420 && <h1>Tarun Luthra</h1>}
                            <p className="introductionText">
                                I am a Computer Science undergrad.
                                I am a proficient competitive programmer with advanced Algo-DS skills and a trained web
                                developer.
                                I love to create web apps with React and Ember.
                            </p>
                        </div>
                    </div>
                </div>
                <SkillsShowcase/>
            </React.Fragment>
        )
            ;
    }
}

export default AboutPage;