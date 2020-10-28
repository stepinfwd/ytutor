import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./header.css";
import logo from "../../logo/logo white.png";
import { useState, useEffect } from "react";
import MyVerticallyCenteredModal from "../model/model";

// THIS CODE IS NOT USED,(HEADER IS DIRECTLY WRITTEN IN APP.js)
function Header(props) {
  const { data, setData } = props;
  const [modalShow, setModalShow] = React.useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
          <img src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Course</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#faq">Faq</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#enroll-tab">
              <div className=" enrol-sections enroll-button">
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
