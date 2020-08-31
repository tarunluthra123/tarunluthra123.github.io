import React, {Component} from 'react';
import {HorizontalBar} from "react-chartjs-2";
import me from '../assets/me.jpg';
import skillsData from '../assets/data/skills.json'

const labels = [], skillValue = []
for (let label in skillsData) {
    labels.push(label)
    skillValue.push(skillsData[label])
}

const graphColorRGBCode = '34, 195, 243'

const data = {
    labels: labels,
    datasets: [
        {
            label: 'My Skill',
            backgroundColor: "rgba(" + graphColorRGBCode + ",0.2)",
            borderColor: 'rgba(' + graphColorRGBCode + ',1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(' + graphColorRGBCode + ',0.4)',
            hoverBorderColor: 'rgba(' + graphColorRGBCode + ',1)',
            data: skillValue,
        }
    ],
    fill: false,
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
            <div className="container">
                <div className="row">
                    <div className="col-4 container-fluid">
                        <img src={me} height="250px"/>
                    </div>
                    <div className="col">
                        <h1>Hi. I am Tarun Luthra</h1>
                        <p>
                            I am a Computer Science undergrad.
                            I am proficient competitive programmer with advanced Algo-DS skills and a trained web
                            developer.
                            I love to create web apps with React and Ember.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <HorizontalBar data={data} options={options} width={100} height={50}/>
                </div>
            </div>
        );
    }
}

export default AboutPage;