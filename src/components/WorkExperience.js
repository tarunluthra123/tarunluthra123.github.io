import React from 'react';
import data from '../assets/data/work_experience.json';
import Job from "./Job";

const WorkExperience = (props) => {
    return (
        <div className="container">
            <div className={"container sectionTitleContainer"}>
                <b className="sectionTitle">Work Experience</b>
            </div>
            {Object.entries(data).map(entry => <Job data={entry[1]}/>).reverse()}
        </div>
    );
}

export default WorkExperience;