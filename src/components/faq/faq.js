import React from "react";
import { Fade } from "react-awesome-reveal";
import "./faq.css";
function Faq() {
  return (
    <div className="container col-lg-10 col-md-10 offset-lg-1 offset-md-1 ">
      <div className=" faq-top-container">
        <h2> FAQS</h2>
        <div className=" faq-global col-lg-12 col-md-12 row">
          <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12 each-faq">
            <Fade delay={300} triggerOnce>
              <h3>1.Two Very Different Australias?</h3>
              <p>
                A Google Docs scam that appears to be widespread began landing
                in users’ inboxes on Wednesday in what seemed to be a
                sophisticated phishing.
              </p>
            </Fade>
          </div>

          <div className="col-md-4 col-sm-6 col-lg-4 col-xs-12 each-faq ">
            {" "}
            <Fade delay={325} triggerOnce>
              <h3>2.What Does Darwin Mean to You?</h3>
              <p>
                A Google Docs scam that appears to be widespread began landing
                in users’ inboxes on Wednesday in what seemed to be a
                sophisticated phishing.
              </p>
            </Fade>
          </div>

          <div className="col-md-4 col-sm-6 col-lg-4 col-xs-12 each-faq">
            <Fade delay={350} triggerOnce>
              <h3>3.Where Totem Poles Are a Living Art ?</h3>
              <p>
                A Google Docs scam that appears to be widespread began landing
                in users’ inboxes on Wednesday in what seemed to be a
                sophisticated phishing.
              </p>
            </Fade>
          </div>
        </div>

        <div className="faq-global col-lg-12 col-md-12 row">
          <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12 each-faq">
            <Fade delay={375} triggerOnce>
              <h3>4.Two Very Different Australias?</h3>
              <p>
                A Google Docs scam that appears to be widespread began landing
                in users’ inboxes on Wednesday in what seemed to be a
                sophisticated phishing.
              </p>
            </Fade>
          </div>

          <div className="col-md-4 col-sm-6 col-lg-4 col-xs-12 each-faq">
            <Fade delay={400} triggerOnce>
              <h3>5.Two Very Different Australias?</h3>
              <p>
                A Google Docs scam that appears to be widespread began landing
                in users’ inboxes on Wednesday in what seemed to be a
                sophisticated phishing.
              </p>
            </Fade>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4 col-xs-12 each-faq">
            <Fade delay={425} triggerOnce>
              <h3>6.Two Very Different Australias?</h3>
              <p>
                A Google Docs scam that appears to be widespread began landing
                in users’ inboxes on Wednesday in what seemed to be a
                sophisticated phishing.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
