import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import {Button} from 'semantic-ui-react'

class Project extends Component {

    renderBadges = () => {
        let arr = []
        let {technologies} = this.props.data
        for (let tech of technologies) {
            arr.push(
                <a href="#" className="badge badge-light m-2 p-2">{tech}</a>
            )
        }
        return arr
    }

    render() {
        let {title, description, githubUrl, projectUrl, icon} = this.props.data;
        return (
            <div className="row container p-2 m-2">
                <div className="col-1">
                    <br/>
                    <i className="fab fa-git"/>
                    <FontAwesomeIcon icon={['fab', 'coffee']}/>
                    <FontAwesomeIcon icon={Icons.faShoppingCart} size="lg"/>
                </div>
                <div className="col">
                    &nbsp;&nbsp;&nbsp;
                    <b className="projectTitle">{title}</b>
                    <br/>
                    {this.renderBadges()}
                    <p>
                        {description}
                    </p>
                    {githubUrl &&
                    <Button color="teal" href={githubUrl} target={"_blank"}>Github</Button>}
                    {projectUrl &&
                    <Button color="blue" href={projectUrl} target={"_blank"} className="m-1">Demo</Button>}
                </div>
            </div>
        );
    }
}

export default Project;