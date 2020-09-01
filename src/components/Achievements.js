import React, {Component} from 'react';
import SankalanLogo from '../assets/sankalan_logo.jpg';
import MapsLogo from '../assets/maps_logo.jpg';
import MOS_Powerpoint from '../assets/MOS_PowerPoint.png';
import UmeedLogo from '../assets/umeed_logo.png';

class Achievements extends Component {
    render() {
        return (
            <div className="container">
                <div className="container sectionTitleContainer">
                    <b className="sectionTitle">Achievements</b>
                </div>
                <ul>
                    <div className="row p-2 m-2">
                        <div className="col-1">
                            <a href={"https://www.facebook.com/DUCS.Sankalan/"} target={"_blank"}>
                                <img src={SankalanLogo} alt={"Sankalan"} height={50}/>
                            </a>
                        </div>
                        <section className="col achievementSection">
                            <b> Sankalan Grand Trophy Winner</b>
                            <br/>
                            <i>Delhi University, Computer Science Dept.</i>
                        </section>
                        <section className="col-2">
                            2020
                        </section>
                    </div>
                    <div className="row p-2 m-2">
                        <div className="col-1">
                            <a href="http://www.umeedngo.org/" target="_blank">
                                <img src={UmeedLogo} alt={"MAPS"} height={50}/>
                            </a>
                        </div>
                        <section className="col achievementSection">
                            <b>Received LOR for volunteer work</b>
                            <br/>
                            <i>Umeed NGO</i>
                            <p style={{"font-size": "90%"}}>
                                Received Letter of Recommendation for exemplary volunteer
                                work at Umeed NGO.
                            </p>
                        </section>
                        <section className="col-2">
                            2019
                        </section>
                    </div>
                    <div className="row p-2 m-2">
                        <div className="col-1">
                            <img src={MapsLogo} alt={"MAPS"} height={50}/>
                        </div>
                        <section className="col achievementSection">
                            <b>Best Student Award</b>
                            <br/>
                            <i>Maharaja Agarsain Public School</i>
                        </section>
                        <section className="col-2">
                            2018
                        </section>
                    </div>
                    <div className="row p-2 m-2">
                        <div className="col-1">
                            <img src={MapsLogo} alt={"MAPS"} height={50}/>
                        </div>
                        <section className="col achievementSection">
                            <b>Best Personality Award</b>
                            <br/>
                            <i>Maharaja Agarsain Public School</i>
                        </section>
                        <section className="col-2">
                            2018
                        </section>
                    </div>

                    <div className="row p-2 m-2">
                        <div className="col-1">
                            <a href="https://www.youracclaim.com/badges/bee7f14c-81d7-470d-82d7-eeb33380db18/linked_in_profile"
                               target="_blank">
                                <img src={MOS_Powerpoint} alt={"MOS India"} height={50}/>
                            </a>
                        </div>
                        <section className="col achievementSection">
                            <b>Microsoft Office Specialist</b>
                            <br/>
                            <i>MOS India Championship</i>
                        </section>
                        <section className="col-2">
                            2018
                        </section>
                    </div>
                </ul>
            </div>
        );
    }
}

export default Achievements;