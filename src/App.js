import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Feature from "./components/feature/feature";
import Numbers from "./components/number/numbers";
import Faq from "./components/faq/faq";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Blog from "./components/blog/blog";
import Testimonial from "./components/testimonial/testimonial";
import Video from "./components/video/video";
import Enroll from "./components/enroll/enroll";
import Banner from "./components/banner/banner";
import { Fade } from "react-awesome-reveal";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
        className="nav-container"
        style={{
          //   backgroundColor: this.state.status === "top" ? "" : "#fff",
          backgroundColor: "rgb(117, 40, 241)",
          //   color: this.state.status === "top" ? "#fff" : "#fff",
        }}
      >
        <Navbar.Brand href="#home">Yourstutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Course</Nav.Link>
            <Nav.Link href="#pricing">Testimonial</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Faq</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            {/* <Nav.Link href="#pricing">LOGIN</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Banner />
      <Numbers offsetY={offsetY} />

      <Feature />
      <Enroll />

      <Testimonial />

      <Video />
      <Blog />
      <Fade delay={1000} triggerOnce>
        <Contact />
      </Fade>
      <Fade delay={700} triggerOnce></Fade>
      <Footer />
    </div>
  );
}

export default App;
