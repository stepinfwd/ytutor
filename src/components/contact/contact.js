import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="container contact-global">
      <h3>Any question in mind? Don’t Worry Contact Us.</h3>
      <form>
        <div className="form-group contact-form col-lg-6 colsm-12 cpl-xs-12">
          <input type="text" class="form-control" placeholder="Name." />
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email@example.com"
          />
          <input type="text" class="form-control" placeholder="subject." />
          <textarea
            class="form-control"
            rows="6"
            id="form-message"
            name="form-message"
            required=""
          ></textarea>

          <button type="submit">send message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
