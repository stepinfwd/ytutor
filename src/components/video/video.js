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
            A Google Docs scam that appears to be widespread began landing in
            users’ inboxes on Wednesday in what seemed to be a sophisticated
            phishing or malware attack. The deceptive invitation to edit a
            Google Doc on Google Docs with you.
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
