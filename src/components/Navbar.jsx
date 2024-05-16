import React, { useState } from 'react';
import navbarLogo from "../assets/images/logo-color.png";

const Navbar = ({scrolledEffect}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
  };
        
    return (
        <header className={`navigation ${scrolledEffect ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="/">
                                <img src={navbarLogo} alt="" />
                            </a>
                            <button
                                className={"navbar-toggler"} onClick={toggleNavbar}
                                type="button"
                                data-toggle="collapse"
                                data-target="#mainmenu"
                                aria-controls="mainmenu"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className={`navbar-collapse ${isOpen ? 'open' : ''}`}
                                id="mainmenu"
                            >
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#home">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#feature">
                                            Features
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">
                                            About
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#testimonial-area"
                                        >
                                            Testimonials
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#faq">
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
