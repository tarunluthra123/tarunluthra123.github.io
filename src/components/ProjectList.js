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
                <h2><b>Projects</b></h2>
                <ul>
                    {this.renderProjectList()}
                </ul>
            </div>
        );
    }
}

export default ProjectList;