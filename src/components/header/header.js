import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./header.css";
import logo from "../../logo/logo white.png";
import MyVerticallyCenteredModal from "../model/model";

// THIS CODE IS NOT USED,(HEADER IS DIRECTLY WRITTEN IN APP.js)
function Header(props) {
  const { data, setData, executeScroll, itemRef } = props;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="navbar-global">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
        className="nav-container"
        style={{
          backgroundColor: "rgb(14, 12, 12)",
        }}
      >
        <Navbar.Brand href="#home" className="nav-logo">
          <img
            alt=""
            onClick={() => executeScroll(itemRef[0])}
            src={logo}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <Nav.Link
              href="#features"
              onClick={() => executeScroll(itemRef[0])}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#features"
              onClick={() => executeScroll(itemRef[1])}
            >
              Features
            </Nav.Link>
            {/* <Nav.Link href="#pricing">Course</Nav.Link> */}
            <Nav.Link
              href="#testimonial"
              onClick={() => executeScroll(itemRef[2])}
            >
              Testimonial
            </Nav.Link>
            {/* <Nav.Link href="#blog">Blog</Nav.Link> */}
            {/* <Nav.Link href="#faq">Faq</Nav.Link> */}
            <Nav.Link href="#contact" onClick={() => executeScroll(itemRef[3])}>
              Contact
            </Nav.Link>
            <div className="navbar_mobile_dropdown_toggle">
              {/* FOR MOBILE UI */}
              <Nav.Link href="#blog">Student</Nav.Link>
              <Nav.Link href="#faq">Tutor</Nav.Link>
              <Nav.Link href="#contact">Marketer</Nav.Link>
            </div>
            {/* FOR DESKTOP */}
            <div className="navbar_desktop_dropdown_toggle">
              <NavDropdown title="Register" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Student</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Tutor</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Marketer</NavDropdown.Item>
              </NavDropdown>
            </div>
            <Nav.Link href="#enroll-tab" className="enroll-button-custom">
              <div className=" enrol-sections enroll-button ">
                <button variant="primary" onClick={() => setModalShow(true)}>
                  Enroll Now
                </button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  data={data}
                  setData={setData}
                />
              </div>
            </Nav.Link>
            {/* <Nav.Link href="#pricing">LOGIN</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
