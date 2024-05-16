import React from 'react';
import faqImage from '../assets/images/faq.png';
import Accordion from './Accordion';

const Faq = () => {
    return(
        <section id="faq" class="faq">
        <img class="shape" src="assets/images/bg-shape.png" alt=""/>
        <img class="shape2" src="assets/images/bg-shape2.png" alt=""/>
        <div class="container">
          <div class="section-title extra">
            <h2 class="title">Asked Questions</h2>
            <p>
              Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="panel-group accordion" id="accordion-1">
                  <Accordion title="How can I complete the order with payment ?">
                    <p>Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.</p>
                  </Accordion>
                  <Accordion title="How can I complete the order with payment ?">
                    <p>Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.</p>
                  </Accordion>
                  <Accordion title="How can I complete the order with payment ?">
                    <p>Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.</p>
                  </Accordion>
                  <Accordion title="How can I complete the order with payment ?">
                    <p>Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.</p>
                  </Accordion>
              </div>
            </div>
            <div class="col-lg-6 d-flex">
              <div class="faq-img">
                <img src={faqImage} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Faq;