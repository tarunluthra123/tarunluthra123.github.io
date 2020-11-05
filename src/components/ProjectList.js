import React from 'react';
import data from '../assets/data/projects_list.json'
import Project from "./Project";
import Fade from "react-reveal/Fade";


const ProjectList = (props) => {
    return (
        <React.Fragment>
            <div className="diagonallyTiltedDivProjectsTop"/>
            <div className="projectsListContainer">
                <br/>
                <div className="container">
                    <div className="container sectionTitleContainer">
                        <b className="sectionTitle">Projects</b>
                    </div>
                    {Object.entries(data).map(entry => <Fade bottom><Project data={entry[1]}/></Fade>).reverse()}
                </div>

                <p style={{"color": "transparent"}}>Invisible Text here</p>
            </div>

            <div className="diagonallyTiltedDivProjectsBottom"/>
        </React.Fragment>
    );
}

export default ProjectList;