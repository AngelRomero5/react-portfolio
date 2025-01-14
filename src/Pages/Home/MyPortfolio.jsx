import data from '../../data/index.json';

export default function MyPortfolio() {
    return(
        <section className='portfolio-section' id='MyPortfolio'>
            <div className='portfolio-container-box'>
                <div className='portfolio-container'>
                    <p className='subtitle'>Projects</p>
                    <h2 classname="section-heading">My Porfolio</h2>
                </div>
                <div className='portfolio-github-btn-div'>
                    <button className='btn btn-outline-primary'><a href="https://github.com/AngelRomero5"><img src="/img/github-black.png" alt="GitHub" /></a>Visit My Github</button>
                </div>
                <div className='portfolio-section-container'>
                    {data?.portfolio?.map((item, index) => (
                        <div key={index} className='portfolio-section-card'>
                            <div className='portfolio-section-img'>
                                <img src={item.src} alt="project image" />
                            </div>
                            <div className='portfolio-section-card-content'>
                                <h3 classname='portfolio-section-title'>{item.title}</h3>
                                <p className='text-md'>{item.description}</p>
                            </div>
                            <div className='text-sm porfolio-link'>{item.link}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}