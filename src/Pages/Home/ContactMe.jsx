function sendEmail(){
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    const data = {
        firstName,
        lastName,
        phoneNumber,
        email,
        description
    }
}

export default function ContactMe() {
    
    return(
        <section id="Contact" className="contact-section">

            <div>
                <p className="sub-title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">If you want to know more about me and my work feel free to reach out. I will get back to you ASAP!</p>
            </div>
            <form className="contact-form-container">
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
                        <textarea type="text" id="description" className="contact-input text-md" rows={8} placeholder="Type your message here"/>
                    </label>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" id='submit-button' onClick={sendEmail}>Submit</button>
                </div>
            </form>

        </section>
    );
}
