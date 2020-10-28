import React from "react";
import "./footer.css";
function Footer(props) {
  const { subEmail, setSubEmail } = props;

  const subcriptionSubmit = (e) => {
    e.preventDefault();
    setSubEmail({ subEmail: e.target.value });
    console.log("submail", subEmail);
    clearField();
  };
  const clearField = () => {
    setSubEmail({ subEmail: "" });
  };
  return (
    <div className="container-fluid col-lg-12 footer-global">
      <div className=" footer">
        <div className="row col-lg-10 col-md-10 offset-lg-1 offset-md-1 footer-body-container">
          <div className=" col-md-6 col-sm-12 col-lg-6 col-xs-12 footer-body ">
            <h2>Yourstutor</h2>
            <h3>
              Saudi Arabia has been accused of using anti-terror laws to
              suppress free expression and failing to carry out independent
              inquiries into its Yemen.
            </h3>
          </div>

          {/* <div className=" col-md-2 col-sm-6 col-lg-2 col-xs-12 footer-links ">
            <ul>
              <li>Privacy Policy</li>
              <li>Testimonial</li>
              <li>Support</li>
            </ul>
          </div> */}

          <div className="newsletter  col-md-6 col-sm-6 col-lg-6 col-xs-12">
            <h3>Subscribe Our Newsletter</h3>
            <p>
              Doubtful for answered one fat indulged margaret sir shutters
              together. Ladies so in wholly .
            </p>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email@example.com"
            />
            <button
              onSubmit={subcriptionSubmit}
              className="footer-submit-button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>copyright @ 2020 all rights reserved yourstutor</p>
      </div>
    </div>
  );
}

export default Footer;
