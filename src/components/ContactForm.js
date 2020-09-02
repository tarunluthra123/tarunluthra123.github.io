import React, {Component} from 'react';
import {Button, Form, TextArea} from 'semantic-ui-react'

class ContactForm extends Component {
    constructor(props) {
        super(props);
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleMessageChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    submitForm = () => {
        let {name, email, msg} = this.state
        if (!name || !email || !msg) {
            alert("All fields are mandatory")
            return
        }
        const SUBMISSION_ENDPOINT = 'https://api.formcake.com/api/form/3fb9153e-c13c-4be9-90da-3bf6558dbeb5/submission';
        const formcakePost = (data = {}) => fetch(SUBMISSION_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        formcakePost({name, email, msg})
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    render() {
        return (
            <div className="form contactInfoContainer p-4 m-4">
                <h3 className="sm-heading"><strong>If you’re interested to get in touch with me, just fill this form
                    and I'll get back to you soon.</strong></h3>
                <br/><br/>
                <Form method="POST">
                    <Form.Field>
                        <label>Full Name</label>
                        <input type="text" placeholder="Your name.." onChange={this.handleNameChange} required/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <label>Email Address</label>
                        <input type="email" placeholder="Your email address.." onChange={this.handleEmailChange}
                               required/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <label>Your message</label>
                        <TextArea style={{"height": "200px"}} placeholder="Your Message..."
                                  onChange={this.handleMessageChange}
                                  required/>
                    </Form.Field>
                    <Button size="big" onClick={this.submitForm}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default ContactForm;