import React from "react";
import "./banner.css";
import Header from "../header/header";
import { Slide, Fade } from "react-awesome-reveal";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="container-fluid banner-global welcome-single-slide">
            <div className="banner-text col-md-7 col-lg-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
              <Slide direction={"up"}>
                <h3> You're at the right place</h3>
              </Slide>
              <Fade delay={800}>
                <p>
                  YT offers a platform where our tutors and students meet one on
                  one and turn learning a fun experience
                </p>
              </Fade>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid banner-global welcome-single-slide">
            <div className="banner-text banner-color-1 col-md-7 col-lg-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
              <Slide direction={"up"}>
                <h3>Your perfect learning partner</h3>
              </Slide>
              <Fade delay={800}>
                <p>
                  YT offers classes in a wide variety of subjects and have
                  highly qualified tutors aimed at helping your child achieve
                  their dreams
                </p>
              </Fade>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid banner-global welcome-single-slide">
            <div className="banner-text banner-color-2 col-md-7 col-lg-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
              <Slide direction={"up"}>
                <h3>Give us a chance</h3>
              </Slide>
              <Fade delay={800}>
                <p>
                  Book a free demo session with us now and let our work speak
                  for itself
                </p>
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
