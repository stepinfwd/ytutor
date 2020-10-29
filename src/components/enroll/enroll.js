import React from "react";
import "./enroll.css";
import ReactWhatsapp from "react-whatsapp";
import wi from "./img/whatsapp.svg";
function Enroll() {
  return (
    <div className="container-fluid enroll-global row">
      <ReactWhatsapp
        classname="whatsapp-chat"
        number="917907041628"
        message="Hey"
        style={{
          border: "1px solid white",
          marginBottom: "20px",
          position: "fixed",
          right: "3rem",
          bottom: "1rem",
          zIndex: "1005",
        }}
      >
        <span className="whatsapp-icon">
          <img src={wi}></img>
        </span>
      </ReactWhatsapp>
    </div>
  );
}

export default Enroll;
