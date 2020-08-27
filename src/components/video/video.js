import React from "react";
import "./video.css";
import img from "./about.jpg";
function Video() {
  return (
    <div className="container  video-global row col-lg-8 col-md-12 col-sm-12 offset-lg-2 ">
      <div className=" col-lg-6 col-md-5 col-sm-12 ">
        <h3>Education is the foundation upon which we build our future.</h3>
        <p>
          A Google Docs scam that appears to be widespread began landing in
          users’ inboxes on Wednesday in what seemed to be a sophisticated
          phishing or malware attack. The deceptive invitation to edit a Google
          Doc on Google Docs with you.
        </p>
      </div>
      <div className=" col-lg-6 col col-md-6   col-sm-12">
        <img alt="" className="video-img" src={img}></img>
      </div>
    </div>
  );
}

export default Video;
