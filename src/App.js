import React from "react";
import "./App.css";
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

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
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

export default App;
