import React, {Component} from 'react';
import data from '../assets/data/education_list.json';
import Education from "./Education";

class EducationList extends Component {
    renderEducationList = () => {
        let arr = []
        for (let eduNo in data) {
            let education = data[eduNo]
            arr.push(
                <Education data={education}/>
            )
        }
        arr.reverse()
        return arr
    }

    render() {
        return (
            <div className="container">
                <div className="container sectionTitleContainer">
                    <b className="sectionTitle">Education</b>
                </div>
                <ul>
                    {this.renderEducationList()}
                </ul>
            </div>
        );
    }
}

export default EducationList;