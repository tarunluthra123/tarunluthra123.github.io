import React, {useEffect, useRef} from 'react';
import SankalanLogo from '../assets/achievements_images/sankalan_logo.jpg';
import MapsLogo from '../assets/achievements_images/maps_logo.jpg';
import MOS_Powerpoint from '../assets/achievements_images/MOS_PowerPoint.jpg';
import UmeedLogo from '../assets/achievements_images/umeed_logo.png';
import '../assets/css/achievements_list.css'
import Fade from 'react-reveal/Fade';
import {Element} from "react-scroll";

const Achievements = (props) => {
    return (
        <React.Fragment>
            <div className="container-fluid achievementListSection">
                <div className="container sectionTitleContainer">
                    <b className="sectionTitle">Achievements</b>
                </div>
                <div className="container">
                    <Fade bottom>
                    <div className="row p-2 m-2">
                        <div className="col-2 col-sm-2 col-md-1 sectionImage">
                            <a href={"https://www.facebook.com/DUCS.Sankalan/"} target={"_blank"}>
                                <img src={SankalanLogo} alt={"Sankalan"} height={50}/>
                            </a>
                        </div>
                        <section className="col col-sm col-md achievementSection">
                            <b> Sankalan Grand Trophy Winner</b>
                            <br/>
                            <div className="achievementOrganisation"><i>Delhi University, Computer Science Dept.</i>
                            </div>
                        </section>
                        <section className="col-2 col-sm-2 col-md-2">
                            2020
                        </section>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className="row p-2 m-2">
                        <div className="col-2 col-sm-2 col-md-1 sectionImage">
                            <a href="http://www.umeedngo.org/" target="_blank">
                                <img src={UmeedLogo} alt={"MAPS"} height={50}/>
                            </a>
                        </div>
                        <section className="col col-sm col-md achievementSection">
                            <b>Received LOR for volunteer work</b>
                            <br/>
                            <div className="achievementOrganisation"><i>Umeed NGO</i></div>
                            <section style={{"font-size": "90%"}}>
                                Received Letter of Recommendation for exemplary volunteer
                                work at Umeed NGO.
                            </section>
                        </section>
                        <section className="col-2 col-sm-2 col-md-2">
                            2019
                        </section>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className="row p-2 m-2">
                        <div className="col-2 col-sm-2 col-md-1 sectionImage">
                            <img src={MapsLogo} alt={"MAPS"} height={50}/>
                        </div>
                        <section className="col col-sm col-md achievementSection">
                            <b>Best Student Award</b>
                            <br/>
                            <div className="achievementOrganisation"><i>Maharaja Agarsain Public School</i></div>
                        </section>
                        <section className="col-2 col-sm-2 col-md-2">
                            2018
                        </section>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className="row p-2 m-2">
                        <div className="col-2 col-sm-2 col-md-1 sectionImage">
                            <img src={MapsLogo} alt={"MAPS"} height={50}/>
                        </div>
                        <section className="col col-sm col-md achievementSection">
                            <b>Best Personality Award</b>
                            <br/>
                            <div className="achievementOrganisation"><i>Maharaja Agarsain Public School</i></div>
                        </section>
                        <section className="col-2 col-sm-2 col-md-2">
                            2018
                        </section>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className="row p-2 m-2">
                        <div className="col-2 col-sm-2 col-md-1 sectionImage">
                            <a href="https://www.youracclaim.com/badges/bee7f14c-81d7-470d-82d7-eeb33380db18/linked_in_profile"
                               target="_blank">
                                <img src={MOS_Powerpoint} alt={"MOS India"} height={50}/>
                            </a>
                        </div>
                        <section className="col col-sm col-md achievementSection">
                            <b>Microsoft Office Specialist</b>
                            <br/>
                            <div className="achievementOrganisation"><i>MOS India Championship</i></div>
                        </section>
                        <section className="col-2 col-sm-2 col-md-2">
                            2018
                        </section>
                    </div>
                    </Fade>
                </div>
                <p style={{color: "transparent"}}>Invisible Text here</p>
            </div>
            <div className="achievementsBottomTiltedBox"/>
        </React.Fragment>
    );
}

export default Achievements;