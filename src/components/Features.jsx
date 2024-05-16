import React from 'react';
import w2 from '../assets/images/w2.png';
import { FaLeaf } from "react-icons/fa";

const Features = () => {
    return(
        <section class="feature" id="feature">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-8">
              <div class="section-title">
                <h2 class="title">Attractive Features</h2>
                <p>
                  Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="left-feature">
                <div class="feature-box feature-box1">
                  <div class="feature-circle">
                    <div class="feature-circle-inner"><i class="fas fa-plus"></i></div>
                  </div>
                  <div class="details">
                    <h4>
                      <a href="#home" class="title">
                        Heart Monitor
                      </a>
                    </h4>
                    <p class="text">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                  </div>
                  <div class="icon-area">
                      <div class="icon">
                      <FaLeaf/>
                      </div>
                  </div>
                </div>
                <div class="feature-box feature-box2">
                  <div class="feature-circle">
                    <div class="feature-circle-inner"><i class="fas fa-plus"></i></div>
                  </div>
                  <div class="details">
                    <h4>
                      <a href="#home" class="title">Alarm Alert</a>
                    </h4>
                    <p class="text">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                  </div>
                  <div class="icon-area">
                      <div class="icon">
                      <FaLeaf/>
                      </div>
                  </div>
                </div>
                <div class="feature-box feature-box3">
                  <div class="feature-circle">
                    <div class="feature-circle-inner"><i class="fas fa-plus"></i></div>
                  </div>
                  <div class="details">
                    <h4>
                      <a href="#home" class="title">Distance Counter</a>
                    </h4>
                    <p class="text">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                  </div>
                  <div class="icon-area">
                    <div class="icon">
                    <FaLeaf/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex justify-content-center">
              <div class="center-feature align-self-center">
                <img src={w2} alt=""/>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="right-feature">
                <div class="feature-box feature-box4">
                  <div class="feature-circle">
                    <div class="feature-circle-inner"><i class="fas fa-plus"></i></div>
                  </div>
                  <div class="icon-area">
                    <div class="icon">
                    <FaLeaf/>
                    </div>
                  </div>
                  <div class="details">
                    <h4>
                      <a href="#home" class="title">Bluetooth </a>
                    </h4>
                    <p class="text">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                  </div>
                </div>
                <div class="feature-box feature-box5">
                  <div class="feature-circle">
                    <div class="feature-circle-inner"><i class="fas fa-plus"></i></div>
                  </div>
                  <div class="icon-area">
                    <div class="icon">
                    <FaLeaf/>
                    </div>
                  </div>
                  <div class="details">
                    <h4>
                      <a href="#home" class="title">Weather Update</a>
                    </h4>
                    <p class="text">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                  </div>
                </div>
                <div class="feature-box feature-box6">
                  <div class="feature-circle">
                    <div class="feature-circle-inner"><i class="fas fa-plus"></i></div>
                  </div>
                  <div class="icon-area">
                    <div class="icon">
                      <FaLeaf/>
                    </div>
                  </div>
                  <div class="details">
                    <h4>
                      <a href="#home" class="title">Video Call</a>
                    </h4>
                    <p class="text">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Features;