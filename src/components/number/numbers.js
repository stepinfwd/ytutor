import React from "react";
import "./numbers.css";
function Numbers() {
  return (
    <div className="container-fluid numbers-container">
      <div className="number-box row col-lg-8 col-md-8 offset-lg-2 offset-md-2">
        <div className="col-md-3 col-lg-3 each-number">
          <h2>20k</h2>
          <p>Graduated Students</p>
        </div>
        <div className="col-md-3 col-lg-3 each-number">
          <h2>600k</h2>
          <p>Expert Instructors</p>
        </div>
        <div className="col-md-3 col-lg-3 each-number">
          <h2>124k</h2>
          <p>Books in our library</p>
        </div>
        <div className="col-md-3 col-lg-3 each-number">
          <h2>100</h2>
          <p>Students get employed</p>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
