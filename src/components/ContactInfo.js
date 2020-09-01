import React, {Component} from 'react';
import ContactForm from "./ContactForm";

class ContactInfo extends Component {
    render() {
        return (
            <div>
                <ContactForm/>
                <div className="container">
                    Alternatively, you can drop a mail at
                    <br/>
                    tarunluthra987@gmail.com
                </div>
            </div>
        );
    }
}

export default ContactInfo;