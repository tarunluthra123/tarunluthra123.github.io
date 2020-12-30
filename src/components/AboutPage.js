import React, { useEffect, useRef } from "react";
import me from "../assets/me.jpg";
import SkillsShowcase from "./SkillsShowcase";
import "../assets/css/about.css";
import { TimelineMax, gsap, CSSPlugin } from "gsap/all";

const AboutPage = (props) => {
    gsap.registerPlugin(CSSPlugin);
    const introductionPhotoRef = useRef();
    const introductionTextRef = useRef();
    const inlineNameHeadingRef = useRef();
    const upperNameHeadingRef = useRef();
    const tl = new TimelineMax();

    useEffect(() => {
        tl.fromTo(
            introductionPhotoRef.current,
            1,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0 }
        )
            .fromTo(
                introductionTextRef.current,
                1,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0 },
                "-=1"
            )
            .fromTo(
                inlineNameHeadingRef.current,
                1,
                { y: "500%" },
                { y: "100%" },
                "-=0.7"
            )
            .fromTo(
                upperNameHeadingRef.current,
                1,
                { y: "500%" },
                { y: "100%" },
                "-=0.7"
            );
    });

    return (
        <React.Fragment>
            <div className="aboutContainer">
                <div align="center" className="upperNameHeading nameHeading">
                    <span ref={upperNameHeadingRef}>
                        Hey, I'm <strong>Tarun</strong>.
                    </span>
                </div>
                <div className="row">
                    <div className="col-md-5 col-sm-4 col-4">
                        <img
                            src={me}
                            ref={introductionPhotoRef}
                            alt="Tarun Luthra"
                            className="introductionPhoto"
                        />
                    </div>
                    <div className="col-md col-sm col">
                        <br />
                        <div className="inlineNameHeading nameHeading">
                            <span ref={inlineNameHeadingRef}>
                                Hey, I'm <strong>Tarun</strong>.
                            </span>
                        </div>
                        <p
                            className="introductionText"
                            ref={introductionTextRef}
                        >
                            A web developer with advanced DS-Algo skills. I love
                            to create web apps and solve new challenges
                            everyday.
                        </p>
                    </div>
                </div>
            </div>
            <div className="diagonallyTiltedDivAbout">Some Invisible Text</div>
            <SkillsShowcase />
        </React.Fragment>
    );
};

export default AboutPage;
