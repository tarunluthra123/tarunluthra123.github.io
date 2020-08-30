import React, {Component} from 'react';
import me from '../assets/me.jpg';

class AboutPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col container-fluid">
                        <img src={me} height="300px"/>
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
            </div>
        );
    }
}

export default AboutPage;