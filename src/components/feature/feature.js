import React from "react";
import "./feature.css";
import icon1 from "./project.svg";
// import icon2 from "./group.svg";
import icon3 from "./graduation.svg";
import { Fade } from "react-awesome-reveal";
function Feature() {
  return (
    <div className="container feature-custom-padding ">
      <div className="feature-global row col-md-12 col-lg-12 offset-md-1 offset-lg-1">
        <div className=" feature-list col-lg-4 col-md-4">
          <span>
            <img alt="" src={icon1}></img>
          </span>
          <h3>Certificate</h3>
          <p>
            A Google Docs scam that appears to be widespread began landing in
            Wednesday in what seemed to be a phishing attack.
          </p>
        </div>

        <div className=" feature-list col-lg-4 col-md-4">
          <span>
            <img alt="" src={icon3}></img>
          </span>
          <h3>Expert Instructors</h3>
          <p>
            A Google Docs scam that appears to be widespread began landing in
            Wednesday in what seemed to be a phishing attack.
          </p>
        </div>

        <div className=" feature-list col-lg-4 col-md-4">
          <span>
            <img alt="" src={icon1}></img>
          </span>
          <h3>Learn from anywhere</h3>
          <p>
            A Google Docs scam that appears to be widespread began landing in
            Wednesday in what seemed to be a phishing attack.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="feature-bottom-section col-md-8 col-lg-8 offset-md-2 offset-lg-2">
          <Fade delay={400} triggerOnce>
            <h3>Educrown is trusted by 50,000+ student.</h3>
            <p>
              Microsoft has spent a lot of time trying to make Windows
              self-repairing, partly because it generally gets the blame when
              other programs or users try to improve” it. Given that tens of
              thousands of expert programmers have worked on the code over the
              past 30 years.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Feature;
