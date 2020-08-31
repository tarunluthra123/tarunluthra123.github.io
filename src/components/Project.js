import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

const Images = require.context('../assets/', true)

class Project extends Component {
    renderImage = () => {
        let imageUrl = this.props.data.icon
        if (imageUrl) {
            let image = Images('./' + imageUrl)
            return <img src={image} height="50px"/>
        }
        return <img alt={"Logo"}/>
    }

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
            <div className="row p-2 m-2">
                <div className="col-1">
                    <br/>
                    {this.renderImage()}
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