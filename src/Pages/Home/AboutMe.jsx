

export default function AboutMe() {
    return(
        <section id='AboutMe' className="about-section">
            <div className="about-section-img">
                <img src="./img/angel-girasoles.png" alt="aboutme"/>
            </div>
            <div className="hero-section-content-box about-section-box">
                <p className="section-title">About</p>
                <h1 className="skill-section-description">About Me</h1>
                <p className="hero-section-text">
                    I am a very passionate and dedicated person who loves to learn new things and explore new opportunities. 
                    I have gained experience working with different types of teams in multiple environments and always ready to take
                    new challenges and grow as a professional and as a human being. I have experience with multiple programming 
                    languages and frameworks.
                </p>
                <p className="hero-section-text">
                    That is why I do not have fear of learning new things and I can proudly say that I play multiple string
                    instruments I do  
                    {/* here I can put my hobbies in the about me section: scuba diving, music, gaming, homelab(server), traveling*/}
                </p>
            </div>
        </section>
    )
}