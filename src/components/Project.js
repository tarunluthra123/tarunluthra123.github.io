import React from 'react';
import {Button} from 'semantic-ui-react';

const Images = require.context('../assets/projects_images', true)

const Project = (props) => {
    const {title, description, githubUrl, projectUrl, imageUrl, technologies} = props.data;
    const renderImage = () => {
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
        return <img alt={title}/>
    }


    return (
        <div className="row p-2 m-2">
            <div className="col-12 col-sm-12 col-md-6 sectionImage">
                <br/>
                {renderImage()}
            </div>
            <div className="col col-sm col-md">
                <br/>
                <b className="projectTitle">{title}</b>
                <br/>
                {technologies.map(tech => <a className="badge badge-light projectBadges p-2">{tech}</a>)}
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

export default Project;