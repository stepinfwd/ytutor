import React from "react";
import "./banner.css";
import Header from "../header/header";
import { useState, useEffect } from "react";
import MyVerticallyCenteredModal from "../model/model.js";
import { Slide, Fade } from "react-awesome-reveal";
import { Carousel } from "react-bootstrap";

function Banner(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const { data, setData } = props;
  console.log("props", props);
  // console.log("banner func log", props.setData);
  const clickFunc = () => {
    props.setData({ ...data, name: " changed " });
  };
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="container-fluid banner-global welcome-single-slide slide-1">
            <div className="banner-text col-md-7 col-lg-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
              <Slide direction={"up"}>
                <h3> You're at the right place</h3>
              </Slide>
              <Fade delay={800}>
                <p>
                  YoursTutor offers a platform where our tutors and students
                  meet one on one and turn learning a fun experience
                </p>
                <div className=" enrol-sections demo-button">
                  <button variant="primary" onClick={() => setModalShow(true)}>
                    Free Demo
                  </button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data={data}
                    setData={setData}
                  />
                </div>
                {/* <button onClick={clickFunc}>HELOASDHAJSDKASD</button> */}
              </Fade>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid banner-global welcome-single-slide slide-2">
            <div className="banner-text banner-color-1 col-md-7 col-lg-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
              <Slide direction={"up"}>
                <h3>Your perfect learning partner</h3>
              </Slide>
              <Fade delay={800}>
                <p>
                  YoursTutor offers classes in a wide variety of subjects and
                  have highly qualified tutors aimed at helping your child
                  achieve their dreams
                </p>
                <div className=" enrol-sections demo-button">
                  <button variant="primary" onClick={() => setModalShow(true)}>
                    Free Demo
                  </button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data={data}
                    setData={setData}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid banner-global welcome-single-slide slide-3">
            <div className="banner-text banner-color-2 col-md-7 col-lg-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
              <Slide direction={"up"}>
                <h3>Give us a chance</h3>
              </Slide>
              <Fade delay={800}>
                <p>
                  Book a free demo session with us now and let our work speak
                  for itself
                </p>
                <div className=" enrol-sections demo-button">
                  <button variant="primary" onClick={() => setModalShow(true)}>
                    Free Demo
                  </button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data={data}
                    setData={setData}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* <Carousel.Caption>
            {" "}
            className="carousel-caption"
            <h3>Develop a passion for learning new things.</h3>
            <p>
              Was certainty remaining engrossed applauded sir how discovery.
              Settled opinion how enjoyed greater joy adapted too shy. Now
              properly surprise expenses.
            </p>
          </Carousel.Caption> */}
    </div>
  );
}

export default Banner;
