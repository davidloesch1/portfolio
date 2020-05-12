import React from "react";
import profile from "../images/profile.jpg";

import "../App.css";

function About() {
    return(
        <div className="about">
        <div className="about-row">
          <div className="about-col profile">
            <h1>Hi, I'm David.</h1>
            <p>
              <b className="focus">Full-Stack Developer.</b> Wanderer.
              Motorcycle Enthusiast. Curious by Nature. Amateur Artist.{" "}
              <b className="focus">Customer Service Expert.</b> Entrepreneur.
              Teacher. Perpetual Learner.
            </p>
          </div>
          <div className="about-col">
            <img
              src={profile}
              class="mx-auto d-block profile_pic"
              alt="profile"
            />
          </div>
        </div>
        <div className="tag-line">
          <h3>Let's build something cool!</h3>
        </div>
      </div>
    )
}

export default About 