import React from "react";
import "./contact.css";
function Contact(props) {
  const { contact, setContact } = props;
  const contactHandler = (e) => {
    setContact({ ...contact, name: e.target.value });
    console.log("contact isFinite", contact);
  };
  const contactSave = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container contact-global">
      <h3>Any question in mind? Don’t Worry Contact Us.</h3>
      <form>
        <div className="form-group contact-form col-lg-6 colsm-12 cpl-xs-12">
          <input
            type="text"
            class="form-control"
            placeholder="Name."
            onChange={contactHandler}
          />
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email@example.com"
            onChange={contactHandler}
          />
          <input
            type="text"
            class="form-control"
            placeholder="subject."
            onChange={contactHandler}
          />
          <textarea
            class="form-control"
            rows="6"
            id="form-message"
            name="form-message"
            required=""
            onChange={contactHandler}
          ></textarea>

          <button onSubmit={contactSave} type="submit">
            send message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
