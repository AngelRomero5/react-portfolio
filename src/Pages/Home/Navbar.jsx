import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {

    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {   
       const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
       }
       window.addEventListener('resize', handleResize);

       return () => {
        window.removeEventListener('resize', handleResize);
       }
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200){
            closeMenu();
        }

    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="./img/a-letter.png" alt="logo" />
            </div>
            <a className={`nav-hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </a>
            <div className={`navbar-items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="HeroSection" className="navbar-content">Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar-content">Portfolio</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar-content">About Me</Link>
                    </li>
                </ul>
            </div>
             <div>
                <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-outline-primary">Contact Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;
 