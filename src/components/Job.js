import React, {Component} from 'react';

const Images = require.context('../assets/', true)

class Job extends Component {
    renderImage = () => {
        let imageUrl = this.props.data.orgIcon
        if (imageUrl) {
            let image = Images('./' + imageUrl)
            return <img src={image} height="50px"/>
        }
    }

    render() {
        let {title, startDate, endDate, organisation, orgWebsite, description} = this.props.data
        return (
            <div className="row p-2 m-2">
                <div className="col-1">
                    <a href={orgWebsite} target="_blank">{this.renderImage()}</a>
                </div>
                <section className="col">
                    <section className="jobTitle">
                        <b>{title}</b>
                    </section>
                    <br/>
                    <React.Fragment className="p-2">
                        <a style={{"color": "black"}} href={orgWebsite} target="_blank">{organisation}</a>
                    </React.Fragment>
                    <br/>
                    <i>{startDate} - {endDate}</i>
                    <ul type="disc">
                        {description.map((item) => {
                            return <li>{item}</li>
                        })}
                    </ul>

                </section>
            </div>
        );
    }
}

export default Job;