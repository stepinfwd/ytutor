import React, { Component } from "react";

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

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.listener = null;
  //   this.state = {
  //     status: "top",
  //   };
  // }
  // componentDidMount() {
  //   this.listener = document.addEventListener("scroll", (e) => {
  //     var scrolled = document.scrollingElement.scrollTop;
  //     if (scrolled >= 25) {
  //       if (this.state.status !== "diff") {
  //         this.setState({ status: "diff" });
  //       }
  //     } else {
  //       if (this.state.status !== "top") {
  //         this.setState({ status: "top" });
  //       }
  //     }
  //   });
  // }
  // componentDidUpdate() {
  //   document.removeEventListener("scroll", this.listener);
  // }
  render() {
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
            backgroundColor: "#fff",
            //   color: this.state.status === "top" ? "#fff" : "#fff",
          }}
        >
          <Navbar.Brand href="#home">Educrown</Navbar.Brand>
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
        <Feature />
        <Numbers />
        <Video />
        <Testimonial />
        <Blog />
        <Faq />
        <Contact />
        <Enroll />

        <Footer />
      </div>
    );
  }
}
export default App;
