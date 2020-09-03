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
          <h3>Expert tutors</h3>
          <p>
            Expert and skillful tutors are what we unfailingly ensure to provide
            every student with.
          </p>
        </div>

        <div className=" feature-list col-lg-4 col-md-4">
          <span>
            <img alt="" src={icon3}></img>
          </span>
          <h3>Customized classes</h3>
          <p>
            Every one of our students is promised of exactly the kind of
            teaching they are in need of, based on their academic and personal
            requirements.
          </p>
        </div>

        <div className=" feature-list col-lg-4 col-md-4">
          <span>
            <img alt="" src={icon1}></img>
          </span>
          <h3>Individual attention</h3>
          <p>
            All the sessions will be lively interactions between the tutor and
            the student. Individual attention for every student is ensured this
            way. We provide one on one tutoring sessions.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="feature-bottom-section col-md-8 col-lg-8 offset-md-2 offset-lg-2">
          <Fade delay={400} triggerOnce>
            <h3>Yourstutor is trusted by 50,000+ student.</h3>
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
