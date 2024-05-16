import React, { useRef } from "react";
import Slider from "react-slick";

import testimonialImage1 from "../assets/images/testimonialimage/1.jpg";
import testimonialImage2 from "../assets/images/testimonialimage/2.jpg";

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/style.css";

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    let refCarousel = useRef(null);
    const goPrev = () => {
        refCarousel.slickPrev();
    };
    const goNext = () => {
        refCarousel.slickNext();
    };

    return (
        <>
                <Slider
                    ref={(slider) => {
                        refCarousel = slider;
                    }}
                    {...settings}
                >
                    <div className="item">
                        <div className="client">
                            <div className="client-image">
                                <img
                                    src={testimonialImage1}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <p className="client-say">
                                Do play they miss give so up. Words to up style
                                of since world. Way own uncommonly travelling
                                now acceptance bed compliment solicitude. We
                                leaf to snug on no need.
                            </p>
                            <h4 className="client-name">
                                <a href="#nothing">Natha Roy</a>
                            </h4>
                            <h5 className="designation">CEO of Apple</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="client">
                            <div className="client-image">
                                <img
                                    src={testimonialImage2}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <p className="client-say">
                                Do play they miss give so up. Words to up style
                                of since world. We leaf to snug on no need. Way
                                own uncommonly travelling now acceptance bed
                                compliment solicitude.
                            </p>
                            <h4 className="client-name">
                                <a href="#nothing">Natasha li</a>
                            </h4>
                            <h5 className="designation">CEO of Facebook</h5>
                        </div>
                    </div>
                </Slider>
            
            <div className="owl-controls">
                <div className="owl-nav">
                <button className="prev-arrow" onClick={goPrev}>
                        <MdOutlineKeyboardArrowLeft />
                </button>    
                </div>
                <div className="owl-nav">
                    <button className="next-arrow" onClick={goNext}>
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Carousel;
