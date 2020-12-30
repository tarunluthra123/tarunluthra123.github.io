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
    const wavesShapeSvgRef = useRef();
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

    useEffect(() => {
        let widthBase = 130;
        let isIncreasing = true;
        let heightBase = 5;
        let heightIncreasing = true;
        let heightDiff = 0.1;
        const intervalId = setInterval(() => {
            wavesShapeSvgRef.current.style.width = `calc(${widthBase}% + 1.3px)`;
            if (isIncreasing) widthBase++;
            else widthBase--;
            if (widthBase >= 180 || widthBase <= 110)
                isIncreasing = !isIncreasing;

            wavesShapeSvgRef.current.style.height = `${heightBase}vw`;
            if (heightIncreasing) heightBase += heightDiff;
            else heightBase -= heightDiff;
            if (heightBase <= 3 || heightBase >= 6)
                heightIncreasing = !heightIncreasing;
        }, 100);

        return () => {
            clearInterval(intervalId);
        };
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
            <div class="waves-shape">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    ref={wavesShapeSvgRef}
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        class="shape-fill"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        class="shape-fill"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        class="shape-fill"
                    ></path>
                </svg>
            </div>
            <SkillsShowcase />
        </React.Fragment>
    );
};

export default AboutPage;
