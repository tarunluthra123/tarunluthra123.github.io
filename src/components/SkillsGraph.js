import React from 'react';
import {HorizontalBar} from "react-chartjs-2";
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
    '158, 10, 86',
    '39, 58, 226',
    '147, 16, 229',
    '5, 92, 9',
    '239, 194, 33',
    '33, 208, 239'
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

const SkillsGraph = (props) => {
    const decideGraphWidth = () => {
        if (window.innerWidth < 800)
            return 80
        else
            return 150
    }
    return (
        <div className="container">
            <HorizontalBar data={data} options={options} width={decideGraphWidth()} height={50}/>
        </div>
    )
}

export default SkillsGraph;