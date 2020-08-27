import React from "react";
import "./testimonial.css";
import quote from "./quote.png";
import person from "./testmonial.jpg";
import { Carousel } from "react-bootstrap";
function Testimonial() {
  return (
    <div>
      <div className="mt-20 testimonial-global container-fluid">
        <h3 className="testimonial-header ">What Our Customers Say</h3>
        <Carousel>
          <Carousel.Item>
            <div className="text-center mx-auto col-lg-8 col-md-8">
              <div class="mb-4 text-gray-500">
                <img alt="" src={quote}></img>
                {/* <svg
              height="35px"
              class="mb-2 mx-auto"
              fill="#5a67d8"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 32 32"
              xml:space="preserve"
            >
              <g>
                <g id="right_x5F_quote">
                  <g>
                    <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                    <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
                  </g>
                </g>
              </g>
            </svg> */}
                <p className="mt-2 text-base leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="testimonial-client-details">
                <img alt="" src={person}></img>
                <h3>Harould crouse</h3>

                <p>sales manager</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center mx-auto col-lg-8 col-md-8">
              <div class="mb-4 text-gray-500">
                <img alt="" src={quote}></img>
                {/* <svg
              height="35px"
              class="mb-2 mx-auto"
              fill="#5a67d8"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 32 32"
              xml:space="preserve"
            >
              <g>
                <g id="right_x5F_quote">
                  <g>
                    <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                    <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
                  </g>
                </g>
              </g>
            </svg> */}
                <p className="mt-2 text-base leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="testimonial-client-details">
                <img alt="" src={person}></img>
                <h3>Harould crouse</h3>

                <p>sales manager</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
