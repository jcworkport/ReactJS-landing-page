import React from 'react';
import testimonialImage1 from "../assets/images/testimonialimage/1.jpg";
import testimonialImage2 from "../assets/images/testimonialimage/2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";

const Testimonials = () => {
    return (
        <section class="testimonial-area" id="testimonial-area">
            <img class="shape" src="assets/images/bg-shape.png" alt="" />
            <img class="shape2" src="assets/images/bg-shape2.png" alt="" />
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-8">
                        <div class="section-title extra">
                            <h2 class="title">Our Clients Say </h2>
                            <p>
                                Prepared is me marianne pleasure likewise
                                debating. Wonder an unable except better stairs
                                do ye admire. His secure called esteem praise.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-7">
                        <div class="testimonial-img">
                            <img class="img1" src={testimonialImage1} alt="" />
                            <img class="img2" src={testimonialImage2} alt="" />
                            <img class="img3" src={testimonialImage1} alt="" />
                            <img class="img4" src={testimonialImage2} alt="" />
                            <img class="img5" src={testimonialImage1} alt="" />
                            <img class="img6" src={testimonialImage2} alt="" />
                        </div>
                        <div class="testimonial-slider owl-carousel owl-theme owl-loaded">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
