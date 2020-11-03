import React from 'react';
import data from '../assets/data/education_list.json';
import Education from "./Education";
import Fade from "react-reveal/Fade";

const EducationList = (props) => {
    return (
        <div className="container">
            <div className="container sectionTitleContainer">
                <b className="sectionTitle">Education</b>
            </div>
            {Object.entries(data).map(entry => <Fade bottom><Education data={entry[1]}/></Fade>).reverse()}
        </div>
    )
}

export default EducationList;