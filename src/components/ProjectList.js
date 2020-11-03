import React from 'react';
import data from '../assets/data/projects_list.json'
import Project from "./Project";
import Fade from "react-reveal/Fade";


const ProjectList = (props) => {
    return (
        <div className="container">
            <div className="container sectionTitleContainer">
                <b className="sectionTitle">Projects</b>
            </div>
            {Object.entries(data).map(entry => <Fade bottom><Project data={entry[1]}/></Fade>).reverse()}
        </div>
    );
}

export default ProjectList;