import React from "react";
import "../App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import resume from "../assets/David_Loesch_Resume.pdf";

import {
  faCheckSquare,
  faCoffee,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faCheckSquare, faCoffee, faFileAlt);

function Resume() {
  return (
    <div className="resume">
      <div className="resume-row">
        <div className="resume-col">
          <div className="resume-link">
            <h3>RESUME</h3>
            <hr></hr>
            <p>
              If you only have 6 seconds to spare, check out the highlights in
              the 6-Second Box. If you would prefer a classic resume, click
              below for the PDF version. (You're still welcome to check out the
              rest of the site!)
            </p>
            <a href={resume} target="_blank">
              <FontAwesomeIcon
                icon="file-alt"
                size="6x"
                className="resume-icon"
              />
            </a>
            <br></br>
            <small>Resume</small>
            <br></br>
            <div className="tech-skills">
              <FontAwesomeIcon
                icon={["fab", "html5"]}
                size="3x"
                className="link-icon"
              />
              <FontAwesomeIcon
                icon={["fab", "css3-alt"]}
                size="3x"
                className="link-icon"
              />
              <FontAwesomeIcon
                icon={["fab", "js-square"]}
                size="3x"
                className="link-icon"
              />
            </div>
            <div className="tech-skills">
              <FontAwesomeIcon
                icon={["fab", "react"]}
                size="3x"
                className="link-icon"
              />
              <FontAwesomeIcon
                icon={["fab", "node-js"]}
                size="3x"
                className="link-icon"
              />
              <FontAwesomeIcon
                icon={["fab", "python"]}
                size="3x"
                className="link-icon"
              />
            </div>
          </div>
        </div>
        <div className="resume-col">
          <div className="six-sec-box">
            <h3>6 - SECOND BOX</h3>
            <hr></hr>
            <div className="ssb-container">
              <div className="ssb left">
                <h4>Soft Skills</h4>
                <ul>
                  <li>
                    10+ years of Customer Service with a focus on upselling and
                    support
                  </li>
                  <li>
                    Problem-Solver with a proven history of being able to
                    resolve issues quickly and efficiently while minimizing
                    costs
                  </li>
                  <li>
                    Effective Communicator with a sharpened sense of empathy and
                    compassion
                  </li>
                  <li>Fast learner with great teamwork skills</li>
                  <li>Analytical and Detail Oriented</li>
                  <li>
                    Teaching Experience with a focus on speaking in terms that
                    the client/student can understand
                  </li>
                </ul>
              </div>
              <div className="vertical-line"></div>
              <div className="ssb right">
                <h4>Technical Skills</h4>
                <h6>Front-End Technologies</h6>
                <ul>
                  <li>HTML5, CSS, JavaScript, React</li>
                  <li>Django Templating</li>
                  <li>UI/UX design</li>
                </ul>
                <h6>Back-End Technologies</h6>
                <ul>
                  <li>Node.js Express</li>
                  <li>MongoDB, MySQL, PostgreSQL</li>
                  <li>Python / Django</li>
                </ul>
                <h6>Common Software</h6>
                <ul>
                  <li>Hubspot CRM</li>
                  <li>Trello</li>
                  <li>G-Suites</li>
                  <li>Slack</li>
                  <li>Zoom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume