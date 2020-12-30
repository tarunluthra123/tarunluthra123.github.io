import React, {useState} from 'react';
import {Button, Form, TextArea} from 'semantic-ui-react'


const ContactForm = (props) => {
    const [formDetails, setFormDetails] = useState({
        name: '',
        email: '',
        msg: ''
    })

    const handleChange = (e) => {
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {
        const {name, email, msg} = formDetails
        if (name === '' || email === '' || msg === '') {
            alert("All fields are mandatory")
            return
        }

        const SUBMISSION_ENDPOINT = process.env.REACT_APP_SUBMISSION_ENDPOINT;
        const formcakePost = data => fetch(SUBMISSION_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        formcakePost(formDetails)
            .then(() => {
                alert(`Thanks for getting in touch with me ${name}. I will try to get back to you as soon as possible.`)
            });
    }

    return (
        <div className="form contactInfoContainer p-4 m-4">
            <h3 className="sm-heading"><strong>If you’re interested to get in touch with me, just fill this form
                and I'll get back to you soon.</strong></h3>
            <br/><br/>
            <Form>
                <Form.Field>
                    <label>Full Name</label>
                    <input type="text" placeholder="Your name.." onChange={handleChange} name="name" required/>
                </Form.Field>
                <br/>
                <Form.Field>
                    <label>Email Address</label>
                    <input type="email" placeholder="Your email address.." onChange={handleChange} name="email"
                           required/>
                </Form.Field>
                <br/>
                <Form.Field>
                    <label>Your message</label>
                    <TextArea style={{"height": "200px"}} placeholder="Your Message..."
                              onChange={handleChange} name="msg" required/>
                </Form.Field>
                <Button size="big" onClick={submitForm}>Submit</Button>
            </Form>
        </div>
    );
}

export default ContactForm;