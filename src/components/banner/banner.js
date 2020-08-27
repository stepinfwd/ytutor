import React from "react";
import "./banner.css";
import Header from "../header/header";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <div>
      <Header />
      <Carousel>
        <Carousel.Item>
          <div className="container-fluid banner-global welcome-single-slide">
            <div className="banner-text col-md-7 col-lg-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
              <h3>Develop a passion for learning new things.</h3>
              <p>
                Was certainty remaining engrossed applauded sir how discovery.
                Settled opinion how enjoyed greater joy adapted too shy. Now
                properly surprise expenses.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid banner-global welcome-single-slide">
            <div className="banner-text banner-color-1 col-md-7 col-lg-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
              <h3>Develop a passion for learning new things.</h3>
              <p>
                Was certainty remaining engrossed applauded sir how discovery.
                Settled opinion how enjoyed greater joy adapted too shy. Now
                properly surprise expenses.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid banner-global welcome-single-slide">
            <div className="banner-text banner-color-2 col-md-7 col-lg-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
              <h3>Develop a passion for learning new things.</h3>
              <p>
                Was certainty remaining engrossed applauded sir how discovery.
                Settled opinion how enjoyed greater joy adapted too shy. Now
                properly surprise expenses.
              </p>
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
