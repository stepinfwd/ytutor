import React from "react";
import { Fade } from "react-awesome-reveal";

import "./video.css";
import img from "./img/about.jpg";
function Video() {
  return (
    <div className="container  video-global row col-lg-8 col-md-12 col-sm-12 offset-lg-2 ">
      <div className=" col-lg-6 col-md-5 col-sm-12 ">
        <Fade delay={200} triggerOnce>
          <h3 className="video-section-header">
            Education is the foundation upon which we build our future.
          </h3>
          <p>
            YoursTutor has a huge reputation of having rapidly made a national
            presence across our country and along with it, expanding all around
            the globe. The key to our very successful present and hopeful future
            are our vast amount of customers, for whom we ensure to provide
            customized sessions in various packages that will best suit their
            children. In every field regarding our service, from tuition hours
            to it's frequency, YoursTutor rather focuses on the quality over the
            numbers.
          </p>
        </Fade>
      </div>
      <div className=" col-lg-6 col col-md-6   col-sm-12">
        <Fade delay={800} triggerOnce>
          <img alt="" className="video-img" src={img}></img>
        </Fade>
      </div>
    </div>
  );
}

export default Video;
