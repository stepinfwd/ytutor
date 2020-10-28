import React from "react";
import "./testimonial.css";
import quote from "./img/quote.png";
import person1 from "./img/avataaars1.png";
import person2 from "./img/avataaars2.png";
import person3 from "./img/avataaars3.png";
import person4 from "./img/avataaars4.png";
import person5 from "./img/avataaars5.png";
import person7 from "./img/avataaars7.png";

import { Carousel } from "react-bootstrap";
function Testimonial() {
  return (
    <div>
      <div className="mt-20 testimonial-global container-fluid">
        <h3 className="testimonial-header ">What Our Customers Say</h3>
        <Carousel>
          <Carousel.Item>
            <div className="text-center mx-auto col-lg-8 col-md-8">
              <div class="mb-4 text-gray-500">
                <img alt="" src={quote}></img>

                <p className="mt-2 text-base leading-6">
                  Online tution platforms usually provide pre-recorded classes,
                  that are a bit bland and boring for kids. But with YT, the way
                  they hold live classes, we have chances of more interaction
                  and activity, which helped my kid a lot. Thanks to YT, he
                  scored a high rank in the NEET entrance too
                </p>
              </div>
              <div className="testimonial-client-details">
                <img alt="" src={person7}></img>
                <h3>Laila Mujeeb</h3>

                <p>Doctor</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center mx-auto col-lg-8 col-md-8">
              <div class="mb-4 text-gray-500">
                <img alt="" src={quote}></img>

                <p className="mt-2 text-base leading-6">
                  We live in the US and worst part of it is that I can't provide
                  my kids with satisfactory madrassa education here. YT
                  completely and impressively solved this issue for me, I can't
                  thank you guys enough.
                </p>
              </div>
              <div className="testimonial-client-details">
                <img alt="" src={person3}></img>
                <h3>Vinoy</h3>

                <p>sales manager</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center mx-auto col-lg-8 col-md-8">
              <div class="mb-4 text-gray-500">
                <img alt="" src={quote}></img>

                <p className="mt-2 text-base leading-6">
                  My daughter(10th std) with a learning disorder used to
                  struggle with online classes during the lockdown that it
                  really worried me. I tried YT hesitantly, but their
                  exceptionally talented tutor handled her so well that I owe to
                  YT for my daughter's board exam results. Thank you.
                </p>
              </div>
              <div className="testimonial-client-details">
                <img alt="" src={person1}></img>
                <h3>Harin Bhatt</h3>

                <p>Businessman</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center mx-auto col-lg-8 col-md-8">
              <div class="mb-4 text-gray-500">
                <img alt="" src={quote}></img>

                <p className="mt-2 text-base leading-6">
                  Here in UK, I'm so happy about how my kids recieve such high
                  standard education, but their lack of islamic knowledge and
                  madrassa education always kept me worried. After signing up on
                  YT, I've never had to be bothered about it because they do a
                  very good job.
                </p>
              </div>
              <div className="testimonial-client-details">
                <img alt="" src={person4}></img>
                <h3>Faseela</h3>

                <p>House Wife</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center mx-auto col-lg-8 col-md-8">
              <div class="mb-4 text-gray-500">
                <img alt="" src={quote}></img>

                <p className="mt-2 text-base leading-6">
                  The IGCSE syllabus used to kinda trouble my kid a bit. He
                  definitely needed some help with it and I'm glad I found YT on
                  time. Now, with their help, he manages studies so well and is
                  catching up surprisingly.
                </p>
              </div>
              <div className="testimonial-client-details">
                <img alt="" src={person5}></img>
                <h3>Amina</h3>

                <p>House Wife</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center mx-auto col-lg-8 col-md-8">
              <div class="mb-4 text-gray-500">
                <img alt="" src={quote}></img>

                <p className="mt-2 text-base leading-6">
                  One thing that always tensed my kid was his SAT exams. He
                  didn't know what and how to study for it. The help YT tutors
                  provided him with is indescribable, he performed so well and
                  I'm so happy about it.
                </p>
              </div>
              <div className="testimonial-client-details">
                <img alt="" src={person2}></img>
                <h3>Anantharaman</h3>

                <p>Lawyer</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
