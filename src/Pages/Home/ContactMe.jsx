import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';

export default function ContactMe() {

    const [showModal, setShowModal] = useState(false);
    const [state, handleSubmit] = useForm("mbllvgrb");

    useEffect(() => {
        if (state.succeeded) {
        setShowModal(true);
        }
    }, [state.succeeded]);

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    return(
        <section id="Contact" className="contact-section">

            <div>
                <p className="sub-title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">If you want to know more about me and my work feel free to reach out. I will get back to you soon!</p>
            </div>
            <form className="contact-form-container" onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="first-name" className="contact-label">
                        <span className="text-md">First Name</span>
                        <input type="text" id="first-name" className="contact-input text-md" name="first-name" required/>
                    </label>

                    <label htmlFor="last-name" className="contact-label">
                        <span className="text-md">Last Name</span>
                        <input type="text" id="last-name" className="contact-input text-md" name="last-name" required/>
                    </label>

                    <label htmlFor="phone-number" className="contact-label">
                        <span className="text-md">Phone Number</span>
                        <input type="number" id="phone-number" className="contact-input text-md" name="phone-number" required/>
                    </label>

                    <label htmlFor="email" className="contact-label">
                        <span className="text-md">Email Address</span>
                        <input type="email" id="email" className="contact-input text-md" name="email" required/>
                    </label>
                    <label htmlFor="description" className="contact-label">
                        <span className="text-md">Message</span>
                        <textarea type="text" id="description" className="contact-input text-md" name="message" rows={8} placeholder="Type your message here"/>
                    </label>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" id='submit-button' disabled={state.submitting}>Submit</button>
                </div>
            </form>

            {showModal && (
                <div className="modal">
                <div className="modal-content">
                    <p className="text-md">Thanks for contacting me!</p>
                    <br />
                    <button onClick={handleCloseModal} className="btn btn-primary">
                        Close
                    </button>
                </div>
                </div>
            )}
        </section>
    );
}
