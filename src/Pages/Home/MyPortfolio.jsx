import data from '../../data/index.json';

export default function MyPortfolio() {
    return(
        <section className='portfolio-section' id='MyPortfolio'>
            <div className='portfolio-container-box'>
                <div className='portfolio-container'>
                    <p className="sub-title">Projects</p>
                    <h2 className="section-heading">Porfolio</h2>
                </div>
                <div className='portfolio-github-btn-div'>
                    <button className='btn btn-outline-primary'><a href="https://github.com/AngelRomero5"></a>Visit My Github</button>
                </div>
            </div>
            <div className="portfolio-section-container">
                {data?.portfolio?.map((item, index) => (
                    <article
                    key={index}
                    className="portfolio-section-card"
                    style={{ backgroundImage: `url(${item.src})` }}
                    >
                    <div className="portfolio-section-overlay">
                        <h3 className="portfolio-section-title">
                        {item.title}
                        </h3>

                        <div className="portfolio-section-details">
                        <p className="text-md portfolio-section-description">
                            {item.description}
                        </p>

                        {item.link && (
                            <a
                            className="text-sm portfolio-link"
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            >
                            <span>{item.link}</span>
                            </a>
                        )}
                        </div>
                    </div>
                    </article>
                ))}
                </div>
        </section>
    );
}