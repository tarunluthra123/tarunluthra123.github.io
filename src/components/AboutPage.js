import React, {Component} from 'react';
import {HorizontalBar} from "react-chartjs-2";
import me from '../assets/me.jpg';
import skillsData from '../assets/data/skills.json'

const labels = [], skillValue = []
for (let label in skillsData) {
    labels.push(label)
    skillValue.push(skillsData[label])
}

const graphColorRGBCode = [
    '34, 195, 243',
    '212, 97, 243',
    '238, 116, 51',
    '79, 238, 51',
    '226, 39, 99',
    '39, 58, 226',
    '147, 16, 229',
    '5, 92, 9',
    '239, 194, 33',
    '33, 208, 239',
    '158, 10, 86'
]
const backgroundColor = []
const borderColor = []
const hoverBackgroundColor = []
const hoverBorderColor = []

for (let color of graphColorRGBCode) {
    backgroundColor.push("rgba(" + color + ",0.2)")
    borderColor.push("rgba(" + color + ",1)")
    hoverBackgroundColor.push("rgba(" + color + ",0.4)")
    hoverBorderColor.push("rgba(" + color + ",1)")
}

const data = {
    labels: labels,
    datasets: [
        {
            label: 'My Skills',
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1,
            hoverBackgroundColor: hoverBackgroundColor,
            hoverBorderColor: hoverBorderColor,
            data: skillValue,
        }
    ],
}

const options = {
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 100
            },
        }]
    }
}

class AboutPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"/>
                        <div className="col-md-4 col-sm-5 col-5 container-fluid ">
                            <img src={me} height={window.innerWidth > 500 ? 200 : 150} className="introductionPhoto"/>
                        </div>
                        <div className="col-md col-sm col">
                            <h1>Hi. I am Tarun Luthra</h1>
                            <p>
                                I am a Computer Science undergrad.
                                I am proficient competitive programmer with advanced Algo-DS skills and a trained web
                                developer.
                                I love to create web apps with React and Ember.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <HorizontalBar data={data} options={options} width={100} height={50}/>
                </div>
            </React.Fragment>
        )
            ;
    }
}

export default AboutPage;