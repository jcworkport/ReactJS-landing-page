import React from "react";
import navbarLogo from "../assets/images/logo-color.png";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
    return (
        <footer class="footer" id="footer">
            <img class="shape2" src="assets/images/bg-shape2.png" alt="" />
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="footer-info-area">
                            <div class="footer-logo">
                                <a href="#home" class="logo-link">
                                    <img
                                        src={navbarLogo}
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <div class="text">
                                <p>
                                    Conveying or northward offending admitting
                                    perfectly my. Colonel gravity get thought
                                    fat smiling add but.
                                </p>
                            </div>
                        </div>
                        <div class="fotter-social-links">
                            <ul>
                                <li>
                                    <a href="#home" class="facebook">
                                    <CiFacebook class="cifacebook"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#home" class="twitter">
                                    <FaTwitter/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#home" class="linkedin">
                                    <FaLinkedin/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#home" class="google-plus">
                                    <FaGooglePlus/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#home" class="dribbble">
                                    <FaDribbble/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copy-bg text-center">
                <p>
                    Copyright © 2024. All rights reserved by
                    <a href="index.html"> CostaDevland</a>
                </p>
            </div>
        </footer>
    );
};
export default Footer;
