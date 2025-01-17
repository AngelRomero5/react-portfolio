import React from "react";

export default function HeroSection() {
    return (
        <>
            <section id="HeroSection" className="hero-section">
                <div className="hero-section-content-box">
                    <div className="hero-section-content">
                        <p className="section-title">Hi, I'm Ángel Gabriel</p>
                        <h1 className="hero-section-title">
                            <span className="hero-section-title-color">Software</span>{" "}
                            <br /> 
                            Developer
                        </h1>
                        <p className="hero-section-description">
                            "Be the designer of your world and not merely the consumer of it."
                            <br />
                            <br />
                            - James Clear, *Atomic Habits*
                        </p>
                    </div>
                    <div className="hero-section-contact-forms">
                        <a href="#Contact"><button className="btn btn-primary">Get In Touch</button></a>
                        <div className="social-icons">
                            <a href="https://github.com/AngelRomero5"><img src="/img/github.png" alt="GitHub" /></a>
                            <a href="https://www.linkedin.com/in/angel-g-romero-rosario/"><img src="/img/linkedin.png" alt="LinkedIn" /></a>
                            <a href="mailto:agabrielrr0@gmail.com"><img src="/img/mail.png" alt="Email"/></a>
                        </div>
                    </div>
                </div>
                <div className="hero-section-image">
                    <img src="/img/me.jpg" alt="Angel"/>
                </div>
            </section>
        </>
    );
}
// Todo:  
// Here I need to add a functionality that when I click on the "next" button to 
// change the picture, the title changes too, for example: photo of me with guitar, then the title should say 
// "Hardcore Musician", then, next photo of me scuba diving, then the title should say "Scuba Diver", etc.
// Here i will put: gamer, musician, traveler, scuba diver,  