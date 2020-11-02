import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

const Images = require.context('../assets/', true)

class Project extends Component {
    renderImage = () => {
        let {title, imageUrl} = this.props.data
        let width = ""
        if (window.innerWidth >= 1200) {
            //Without this the image size of png image comes out to be more than gif images thus ruining the alignment
            width = "468"
        }
        if (imageUrl) {
            let image = Images('./' + imageUrl)
            return (
                <div className="hovereffect">
                    <img className="img-responsive projectPreviewImage" src={image} alt=""
                         width={width}
                    />
                    <div className="overlay">
                        <h2>{title}</h2>
                    </div>
                </div>
            )
        }
        return <img alt={"Logo"}/>
    }

    render() {
        let {title, description, githubUrl, projectUrl, icon, technologies} = this.props.data;
        return (
            <div className="row p-2 m-2">
                <div className="col-12 col-sm-12 col-md-6 sectionImage">
                    <br/>
                    {this.renderImage()}
                </div>
                <div className="col col-sm col-md">
                    <br/>
                    <b className="projectTitle">{title}</b>
                    <br/>
                    {technologies.map(tech => <a href="#" className="badge badge-light projectBadges p-2">{tech}</a>)}
                    <p>
                        {description}
                    </p>
                    {projectUrl &&
                    <Button color="blue" href={projectUrl} target={"_blank"} className="m-1">Demo</Button>}
                    {githubUrl &&
                    <Button color="teal" href={githubUrl} target={"_blank"}>Github</Button>}
                    {!githubUrl &&
                    <span className="badge">Source Code is private</span>}
                </div>
            </div>
        );
    }
}

export default Project;