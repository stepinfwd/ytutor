import React from "react";
import "./footer.css";
import logo from "../../logo/logo white.png";
function Footer(props) {
  const { subEmail, setSubEmail } = props;
  const emailHanlder = (e) => {
    setSubEmail(e.target.value);
  };
  const subcriptionSubmit = (e) => {
    e.preventDefault();
    if (subEmail) {
      const email = subEmail;
      setSubEmail({ subEmail: "" });
      alert("THANK YOU");
    }
  };
  // const clearField = () => {};to clear inputs after submission
  return (
    <div className="container-fluid col-lg-12 footer-global">
      <div className=" footer">
        <div className="row col-lg-10 col-md-10 offset-lg-1 offset-md-1 footer-body-container">
          <div className=" col-md-5 col-sm-12 col-lg-5 col-xs-12 footer-body ">
            <h2>Yourstutor</h2>

            <h3>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum */}
            </h3>
          </div>
          <div className=" col-md-2 col-sm-6 col-lg-2 col-xs-12 footer-links ">
            {/* <h4>OUR SERVICES</h4> */}
            <ul>
              <li>INDIA</li>
              <li>USA</li>
              <li>UK</li>
              <li>SWEDEN</li>
              <li>UAE</li>
              <li>QATAR</li>
              <li>BAHRAIN</li>
              <li>AFRICA</li>
              <li>AUSTRALIA</li>
              <li>GERMANY</li>
              <li>SWITZERLAND</li>
              <li>ITALY</li>
            </ul>
          </div>

          <div className="newsletter  col-md-5 col-sm-6 col-lg-5 col-xs-12">
            <h3>Subscribe Our Newsletter</h3>
            <p>
              Doubtful for answered one fat indulged margaret sir shutters
              together. Ladies so in wholly .
            </p>
            <form>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="email@example.com"
                onChange={emailHanlder}
              />
              <button
                className="footer-submit-button"
                type="submit"
                onClick={subcriptionSubmit}
                value={subEmail}
              >
                Subscribe
              </button>
            </form>
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
