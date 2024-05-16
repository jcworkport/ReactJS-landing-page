import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import React, { useState, useEffect } from "react";

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="home9">
            <Navbar scrolledEffect={scrolled} />
            <Hero />
            <Features />
            <About />
            <Testimonials />
            <Faq />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
