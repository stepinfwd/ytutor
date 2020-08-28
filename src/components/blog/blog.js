import React from "react";
import "./blog.css";
import blogimg from "./img/blog-1.jpg";
import blogimg2 from "./img/blog-2.jpg";
import blogimg3 from "./img/blog-3.jpg";

function Blog() {
  return (
    <div className="container blog-global">
      <h3 className="blog-header">From Our Blog</h3>
      <div className="  row col-lg-12 col-md-12 ">
        <div className="blog-card col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
          <img alt="" className="blog-card-img-top zoom-img" src={blogimg} />
          <div className="blog-card-body">
            <h5 className="blog-card-title">
              Blazeon Scrambles to Police Content Amid Rapid Growth
            </h5>
            <p className="blog-card-text">
              <a className="blog-card-date">Feb 01, 2016</a> by Mark Stonis
            </p>
          </div>
        </div>

        <div className="blog-card col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
          <img alt="" className="blog-card-img-top zoom-img" src={blogimg2} />
          <div className="blog-card-body">
            <h5 className="blog-card-title">
              Blazeon Scrambles to Police Content Amid Rapid Growth
            </h5>
            <p className="blog-card-text">
              <a className="blog-card-date">Feb 01, 2016</a> by Mark Stonis
            </p>
          </div>
        </div>

        <div className="blog-card col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <img alt="" className="blog-card-img-top zoom-img" src={blogimg3} />
          <div className="blog-card-body">
            <h5 className="blog-card-title">
              Blazeon Scrambles to Police Content Amid Rapid Growth
            </h5>
            <p className="blog-card-text">
              <a className="blog-card-date">Feb 01, 2016</a> by Mark Stonis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
