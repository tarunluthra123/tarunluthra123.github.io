import React, {Component} from 'react';
import data from '../assets/data/work_experience.json';
import Job from "./Job";

class WorkExperience extends Component {
    renderJobs = () => {
        let arr = []
        for (let jobNumber in data) {
            let obj = data[jobNumber]
            console.log(jobNumber)
            arr.push(
                <Job data={obj}/>
            )
        }
        arr.reverse()
        return arr
    }

    render() {
        return (
            <div className="container">
                <div className={"container sectionTitleContainer"}>
                    <b className="sectionTitle">Work Experience</b>
                </div>
                <ul>
                    {this.renderJobs()}
                </ul>
            </div>
        );
    }
}

export default WorkExperience;