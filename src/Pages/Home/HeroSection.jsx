import React from "react";
import { useState, useEffect } from "react";

export default function HeroSection() {

    const [textIndex, setTextIndex] = useState(0);
    const [photoIndex, setPhotoIndex] = useState(0);

    const texts = [
        { title: "Software", subtitle: "Developer" },
        { title: "Devoted", subtitle: "Musician" },
        { title: "Scuba", subtitle: "Diver" },
        { title: "World", subtitle: "Traveler" },
    ];

    const photos = [
        { src: "/img/me.jpg" },
        { src: "/img/cuatro.JPEG"},
        { src: "/img/lago.png" },
        { src: "/img/volcan.JPG" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [texts.length], [photos.length]);



    return (
            <section id="HeroSection" className="hero-section">
                <div className="hero-section-content-box">
                    <div className="hero-section-content">
                        <p className="section-title">Hi, I'm Ángel Gabriel</p>
                        <h1 className="hero-section-title">
                            <span className="hero-section-title-color">{texts[textIndex].title}</span>{" "}
                            <br /> 
                            {texts[textIndex].subtitle}
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
                    <img src={photos[photoIndex].src} alt="Angel"/>
                </div>
            </section>
    );
}
// Crear una seccion de hobbies
// en alguna parte tengo que poner un video sin sonido que contenga videitos de mis hobbies, como scuba diving, viajes, y música.
