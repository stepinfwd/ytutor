import React from "react";
import "./numbers.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Numbers() {
  return (
    <div
      className="container-fluid numbers-container "
      // style={{ transform: -`translateY(${offsetY * 0.6}px)` }}
    >
      <div className="overlay col-lg-12 col-md-12">
        <div className="number-box  row col-lg-8 col-md-8 offset-lg-2 offset-md-2 ">
          <div className="col-md-3 col-lg-3 each-number">
            <h2>
              <CountUp
                start={1}
                end={20}
                duration={4.3}
                useEasing={true}
                suffix=" K"
                redraw={true}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p>Enrolled Students</p>
          </div>
          <div className="col-md-3 col-lg-3 each-number">
            <h2>
              {" "}
              <CountUp
                start={0}
                end={3}
                duration={4.3}
                useEasing={true}
                suffix="K "
                redraw={true}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p>Expert Instructors</p>
          </div>
          <div className="col-md-3 col-lg-3 each-number">
            <h2>
              {" "}
              <CountUp
                start={53}
                end={600}
                duration={2.3}
                useEasing={true}
                suffix="K "
                redraw={true}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p>Books in our library</p>
          </div>
          <div className="col-md-3 col-lg-3 each-number">
            <h2>
              {" "}
              <CountUp
                start={1}
                end={10}
                duration={2.3}
                useEasing={true}
                suffix=" K"
                redraw={true}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p>Students get employed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
