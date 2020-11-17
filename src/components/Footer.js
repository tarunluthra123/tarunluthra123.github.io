import React, {Component} from 'react';
import {Icon, Transition} from "semantic-ui-react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }

    componentDidMount() {
        let intervalId = setInterval(this.toggleVisibility, 500)
        this.setState({
            intervalId: intervalId
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    toggleVisibility = () => {
        this.setState((prevState) =>
            ({visible: !prevState.visible})
        )
    }

    render() {
        const {visible} = this.state
        return (
            <div className="footer">
                <div className="row">
                    <div className="col-1"/>
                    <div className="col container footerContainer">
                        <br/>
                        <div className="footerContent">Thanks for coming here.</div>
                        <div className="footerContent">Made by Tarun Luthra</div>
                        <div className="footerContent">View the code{` `}
                            <a
                                href="https://github.com/tarunluthra123/tarunluthra123.github.io" style={{
                                color: 'white',
                                textDecoration: 'underline'
                            }}
                                target="_blank">
                                here
                            </a>.
                        </div>
                        <div className="footerContent"><b>Copyright ©️ 2020 | All Rights Reserved</b></div>
                    </div>

                    <div className="col-1 goToTopContainer m-2">
                        <Transition visible={visible} animation='scale' duration={500}>
                            <span style={{"color": "white", cursor: "pointer"}}>
                                <Icon name="angle double up" size="big" onClick={() => this.props.scrollToTop()}/>
                            </span>
                        </Transition>
                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;