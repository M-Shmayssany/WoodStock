import React from 'react';

import './css/ContactUs.css';

function ContactUs(){
    return (
        <section className="contactus-container">
            <h2 className="contactus-h2">CONTACT US</h2>
            <form className='from-contactus' method='get' action=''>
                <input type='text' name='firstname' placeholder="FIRST NAME" className="inp-firstname" />
                <input type='text' name='lastname' placeholder="LAST NAME" className="inp-lastname" />
                <input type='email' name='email' placeholder="MAIL ADRESS" className="inp-email" />
                <textarea rows="10" cols="50" name='message' placeholder="   MESSAGE" className="inp-message" ></textarea>
            </form>
        </section>
    );
}

export default ContactUs;