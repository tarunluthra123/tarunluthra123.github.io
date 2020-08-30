import React, {Component} from 'react';

const Images = require.context('../assets/', true)

class Education extends Component {
    renderLogo = () => {
        let {logo, institute} = this.props.data
        if (logo) {
            let image = Images('./' + logo)
            return <img src={image} height="70px" alt={institute}/>
        }
        return <img height="50px" alt={institute}/>
    }

    render() {
        let {degree, institute, result, startTime, endTime} = this.props.data
        return (
            <div className="row p-2 m-2">
                <div className="col-1">
                    {this.renderLogo()}
                </div>
                <section className="col">
                    <section className="educationTitle">
                        <b>{degree}</b>
                    </section>
                    <div className="instituteName">
                        {institute}
                    </div>
                    <div style={{"padding-bottom": "0.5%"}}>
                        {result}
                    </div>
                    <i style={{"color": "grey"}}>{startTime} - {endTime}</i>
                </section>
            </div>
        );
    }
}

export default Education;