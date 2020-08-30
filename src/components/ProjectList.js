import React, {Component} from 'react';
import data from '../assets/data/projects_list.json'
import Project from "./Project";

class ProjectList extends Component {
    renderProjectList = () => {
        let arr = []
        for (let projectNo in data) {
            let project = data[projectNo]
            arr.push(
                <Project data={project}/>
            )
        }
        arr.reverse()
        return arr;
    }


    render() {
        return (
            <div className="container">
                <div className="container sectionTitleContainer">
                    <b className="sectionTitle">Projects</b>
                </div>
                <ul>
                    {this.renderProjectList()}
                </ul>
            </div>
        );
    }
}

export default ProjectList;