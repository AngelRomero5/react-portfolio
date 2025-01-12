import React from "react";

export default function HeroSection() {
    return (
        <>
            <section id="heroSection" className="hero-section">
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
                            - James Clear, *Atomic Habits*
                        </p>
                    </div>
                    <div>
                        <button className="btn btn-primary">Get In Touch</button>
                        <div className="social-icons">
                            {/* Todo: add social icons */}
                        </div>
                    </div>
                </div>
                <div className="hero-section-image">
                    <img src="me.jpg" alt="Angel"/>
                </div>
            </section>
        </>
    );
}