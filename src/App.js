import React, { useState, useRef } from "react";
import "./App.css";
import Feature from "./components/feature/feature";
import Numbers from "./components/number/numbers";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Blog from "./components/blog/blog";
import Testimonial from "./components/testimonial/testimonial";
import Video from "./components/video/video";
import Enroll from "./components/enroll/enroll";
import Banner from "./components/banner/banner";
import { Fade } from "react-awesome-reveal";
import Header from "./components/header/header";

function App() {
  //  DATA FOR MODAL
  const [data, setData] = useState({
    name: "",
    email: "",
    phno: "",
  });
  //  DATA FOR FOOTER SUBSCRIPTION MAIL
  const [subEmail, setSubEmail] = useState("");

  //  DATA FOR FOOTER CONTACT FORM

  const [contact, setContact] = useState({
    name: "",
    email: "",
    sub: "",
    message: "",
  });

  const scrollToRef = (key) => {
    window.scrollTo(0, key.current.offsetTop);
  };
  const myRef = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  const itemRef = [myRef, myRef1, myRef2, myRef3];

  const executeScroll = (key) => scrollToRef(key);

  return (
    <div className="App">
      <Header
        data={data}
        setData={setData}
        executeScroll={executeScroll}
        itemRef={itemRef}
      />
      <div ref={myRef}>
        <Banner data={data} setData={setData} id="feature" />
      </div>
      <Numbers />
      <div ref={myRef1}>
        <Feature />
      </div>
      <Enroll />
      {/* WHATS APP ICON DEFINED IN ENROLL JS */}
      <div ref={myRef2}>
        <Testimonial id="testimonial" />
      </div>
      <Video />
      {/* <Blog /> */}
      <Fade delay={1000} triggerOnce>
        <div ref={myRef3}>
          <Contact contact={contact} setContact={setContact} id="contact" />
        </div>
      </Fade>
      <Fade delay={700} triggerOnce></Fade>
      <Footer subEmail={subEmail} setSubEmail={setSubEmail} />
    </div>
  );
}

export default App;
