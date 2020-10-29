import React, { useState } from "react";
import "./App.css";
import Feature from "./components/feature/feature";
import Numbers from "./components/number/numbers";
// import Faq from "./components/faq/faq";
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
  const [data, setData] = useState({
    name: "",
    email: "",
    phno: "",
  });
  const [subEmail, setSubEmail] = useState("");
  console.log("APP details", data);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    sub: "",
    message: "",
  });
  console.log("APP email", subEmail);
  console.log("APP contact", contact);

  return (
    <div className="App">
      <Header data={data} setData={setData} />
      <Banner data={data} setData={setData} />
      <Numbers />
      <Feature />
      <Enroll />
      {/* WHATS APP ICON DEFINED IN ENROLL JS */}
      <Testimonial />
      <Video />
      {/* <Blog /> */}
      <Fade delay={1000} triggerOnce>
        <Contact contact={contact} setContact={setContact} />
      </Fade>
      <Fade delay={700} triggerOnce></Fade>
      <Footer subEmail={subEmail} setSubEmail={setSubEmail} />
    </div>
  );
}

export default App;
