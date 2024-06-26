import React from 'react';
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";


const Contact = () => {
    return(
        <section class="contact" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8">
          <div class="section-title">
            <h2 class="title">Contact Us</h2>
            <p>
              Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="info-box box1">
            <div class="left">
              <div class="icon">
                <FaPhone/>
              </div>
            </div>
            <div class="right">
              <div class="content">
                <p>+333 123 4565 7898</p>
                <p>+333 153 4575 7893</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="info-box box2">
            <div class="left">
              <div class="icon">
              <FaEnvelope/>
              </div>
            </div>
            <div class="right">
              <div class="content">
                <p>demoname@name.com</p>
                <p>anothername@name.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="info-box box3">
            <div class="left">
              <div class="icon">
                <FaMapLocationDot/>
              </div>
            </div>
            <div class="right">
              <div class="content">
                <p>140 Berkley Street, Philadelphia, Pennsylvania</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="contact-form-wrapper">
            <form id="contact-form" method="POST">
              <div class="row">
                <div class="col-md-12">
                  <input type="text" class="input-field borderd" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-12">
                  <input type="email" class="input-field borderd" id="email" placeholder="Eenter Your Email" required/>
                </div>
                <div class="col-12">
                  <textarea class="input-field borderd textarea" rows="3" id="message"
                    placeholder="Write your message here" required></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="mybtn3 mybtn-bg"> <span>Send Message</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="google_map_wrapper">
            <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3362149737545!2d90.3866213154314!3d23.73538709526567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c6d25f0a91%3A0xf8da21d64c3856dc!2sNew%20Work%20Aquarium%20Center!5e0!3m2!1sen!2sus!4v1593765590933!5m2!1sen!2sus"  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Contact;