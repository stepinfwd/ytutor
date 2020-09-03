import React from "react";
import { useState, useEffect } from "react";
import MyVerticallyCenteredModal from "./model.js";
import Button from "react-bootstrap/Button";
import "./enroll.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import wi from "./whatsapp.svg";
function Enroll() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="container-fluid enroll-global row">
      <div className="col-lg-5 col-md-5 col-sm-12 enrol-sections offset-lg-1 offset-md-1">
        <h3>Addmission are now open</h3>
        <p>
          Writers and stars of Veep have responded incredulously to the news an
          Australian politician required stitches after knocking himself
          unconscious .
        </p>
        <ReactWhatsapp
          classname="whatsapp-chat"
          number="1-212-736-5000"
          message="Hey"
          style={{ border: "1px solid white", marginBottom: "20px" }}
        >
          <span className="whatsapp-icon">
            <img src={wi}></img>
          </span>
        </ReactWhatsapp>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 offset-lg-2 offset-md-2 enrol-sections enroll-button">
        <button variant="primary" onClick={() => setModalShow(true)}>
          Enroll Now
        </button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}

export default Enroll;
