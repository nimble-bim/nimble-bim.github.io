import React from "react";
import Blurb from "../../subcomponents/blurb/blurb.object";
import "./howitworks.style.scss";
import { Tabs, Tab, TabContainer, Row, Col, Nav } from "react-bootstrap";

import { Card } from "../../subcomponents/cards/cards.object";
import video01 from "../../img/video01.gif";
import video02 from "../../img/video02.gif";
import video03 from "../../img/video03.gif";

export default class HowItWorks extends React.Component {
  constructor(props) {
    super(props);
    console.log("Loading how it works page...");
  }

  render() {
    return (
      <div className="page">
        <div className="features">
          <span className="tagline">Features</span>
          <h1>Get More Work Done With Less Stress</h1>
          <div className="section section__features">
            <Tab.Container id="left-tabs-example" defaultActiveKey="01">
              <Row className="d-none d-md-block">
                <Nav variant="pills" className="flex">
                  <Nav.Item>
                    <Nav.Link eventKey="01">Flag Potential Issues</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="02">Let Us Do The Grunt Work</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="03">Fix It, Before it Breaks</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>
              <Row id="tabs-mob" className="d-md-none justify-content-center">
                <Nav variant="pills" className="flex">
                  <Nav.Item>
                    <Nav.Link eventKey="01">01</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="02">02</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="03">03</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>
              <Row className="">
                <Tab.Content>
                  <Tab.Pane eventKey="01">
                    <div className="section__features-container">
                      <div className="section__title">
                        <h3 className="section__title-text">
                          Flag Potential Issues
                        </h3>
                      </div>
                      <div className="section__image">
                        <img
                          className="section__image-frame"
                          src={video01}
                          alt=""
                        />
                      </div>
                      <div className="section__description">
                        <div>
                          <p className="description-title">
                            Alert Notification System
                          </p>
                        </div>
                        <div className="description-text">
                          <p>
                            Much of that change is being driven by huge strides
                            in technology since the start of the 21st century.
                            However, for many in the architectural services
                            industry, we‘ve found that much of that progress
                            hasn’t made its way over. Sure, we’ve got drones and
                            laser erage designer, it’s still 1999.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="02">
                    <div className="section__features-container">
                      <div className="section__title">
                        <h3 className="section__title-text">
                          Let Us Do The Grunt Work
                        </h3>
                      </div>
                      <div className="section__image">
                        <img
                          className="section__image-frame"
                          src={video02}
                          alt=""
                        />
                      </div>
                      <div className="section__description">
                        <div>
                          <p className="description-title">
                            Let Us Do The Grunt Work
                          </p>
                        </div>
                        <div className="description-text">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cupiditate architecto neque excepturi culpa
                            magnam possimus, voluptates hic ab, delectus tempora
                            nulla atque sed recusandae alias. Porro alias,
                            sapiente quis possimus, harum veritatis esse dolore
                            aliquam et perferendis eaque minus quo?
                          </p>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="03">
                    <div className="section__features-container">
                      <div className="section__title">
                        <h3 className="section__title-text">
                          Fix It, Before it Breaks
                        </h3>
                      </div>
                      <div className="section__image">
                        <img
                          className="section__image-frame"
                          src={video03}
                          alt=""
                        />
                      </div>
                      <div className="section__description">
                        <div>
                          <p className="description-title">
                            Fix It, Before it Breaks
                          </p>
                        </div>
                        <div className="description-text">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores assumenda eius dicta perspiciatis
                            aliquam esse laboriosam fugit temporibus quas
                            voluptatum nesciunt beatae ad voluptates officia est
                            magni aspernatur, officiis ea voluptatem eos!
                            Consequatur fugit, rerum repudiandae tempora et
                            aliquam porro.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
          </div>

          <div className="section page_buttons" />
        </div>
      </div>
    );
  }
}
