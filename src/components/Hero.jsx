import React from 'react';
import heroImage from "../assets/images/w4.png";

const Hero = () => {
    return (
        <div id="home" className="hero-area">
            <img className="shape" src="../assets/images/bg-shape.png" alt="" />
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6 d-flex align-self-center">
                        <div className="left-content">
                            <div className="content">
                                <h1 className="title">
                                    Best digital watch for your daily life
                                </h1>

                                <p className="subtitle">
                                    Effects present letters inquiry no an
                                    removed or friends. Desire behind latter me
                                    though in. Supposing shameless am engrossed
                                    itatibus additions.
                                </p>
                                <div className="links">
                                    <a href="#nothing" className="mybtn3 mybtn-bg">
                                        <span>Buy Now</span>{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-first order-lg-last">
                        <div className="right-img">
                            <img
                                className="img-fluid img"
                                src={heroImage}
                                alt="watch"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
