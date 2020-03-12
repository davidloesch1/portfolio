import React from "react";
import profile from "./images/profile.jpg";
import todo_img from "./images/todo_img.png";
import simon from "./images/simon.png";
import storyboard from "./images/storyboard.png"
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faFileAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee, faFileAlt);

function App() {
  return (
    <>
      {/* Start of the Contact Header */}
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h4 class="text-white">Contact Info</h4>
            <p class="text-white">678.899.0435</p>
            <p class="text-white">davidloesch1@gmail.com</p>
            <span class="text-muted">Looking to work with amazing teams.</span>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>

      {/* Start of the About Section */}
      <div className="about">
        <div className="about-row">
          <div className="about-col">
            <h1>Hi, I'm David.</h1>
            <p>
              <b>Full-Stack Developer.</b> Wanderer. Motorcycle Enthusiast.
              Curious by Nature. Amateur Artist. <b>Customer Service Expert.</b>{" "}
              Entrepreneur. Teacher. Perpetual Learner.
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

      {/* Start of the Resume Section */}
      <div className="resume">
        <div className="resume-row">
          <div className="resume-col">
            <div className="resume-link">
              <h3>RESUME</h3>
              <hr></hr>
              <p>
                If you only have 6 seconds to spare, check out the highlights to
                the right. If you would prefer a classic resume, click below for
                the PDF version. (You're still welcome to check out the rest of
                the site!)
              </p>
              <a
                href="./assets/David_Loesch_Resume.pdf"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon="file-alt"
                  size="6x"
                  className="resume-icon"
                />
              </a>
              <br></br>
              <small>Resume</small>
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
                      10+ years of Customer Service with a focus on upselling
                      and support
                    </li>
                    <li>
                      Problem-Solver with a proven history of being able to
                      resolve issues quickly and efficiently while minimizing
                      costs
                    </li>
                    <li>
                      Effective Communicator with a sharpened sense of empathy
                      and compassion
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

      {/* Start of the Project section */}
      <div className="projects">
        <div className="projects-body">
          <h2>Projects</h2>
          <h3></h3>
          <p>
            Below are some feature projects to look through with a short
            description.
          </p>
          <div className="projects-row">
            <div class="card">
              <img src={todo_img} class="card-img-top" alt="to-do image" />
              <div class="card-body">
                <h5 class="card-title">Simple To Do page</h5>
                <p class="card-text">
                  This is my take on a classic to-do list to help keep you
                  focused. Future plans include adding User logins and linking
                  to databases. This project used React, HTML, CSS, and
                  Javascript.
                </p>
                <a
                  href="https://davidloesch1.github.io/todo/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out
                </a>
              </div>
            </div>

            <div class="card">
              <img src={simon} class="card-img-top" alt="to-do image" />
              <div class="card-body">
                <h5 class="card-title">Classic Simon Game</h5>
                <p class="card-text">
                  This is my take on a classic Simon Game of Memorization. It
                  uses JavaScript, HTML, and CSS. It was a great way to learn
                  about the asynchronous nature of Javascript, as that presented
                  several learning challenges.
                </p>
                <a
                  href="https://davidloesch1.github.io/Simon_game/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>
          <div className="projects-row">
            <div class="card">
              <img src={storyboard} class="card-img-top" alt="to-do image" />
              <div class="card-body">
                <h5 class="card-title">
                  Storyboard - Crowd-Sourced Storytelling
                </h5>
                <p class="card-text">
                  This project was a fun project idea that focuses on breaking
                  up the front-end and back-end parts. The front-end uses React,
                  HTML, CSS, JS and Bootstrap. The back-end is a Django REST
                  framework that utilizes PostgreSQL Database. It's hosted using
                  Heroku for the backend and Surge for the frontend.
                </p>
                <a
                  href="http://frail-story.surge.sh"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out
                </a>
              </div>
            </div>

            <div class="card">
              <img src={simon} class="card-img-top" alt="to-do image" />
              <div class="card-body">
                <h5 class="card-title">Classic Simon Game</h5>
                <p class="card-text">
                  This is my take on a classic Simon Game of Memorization. It
                  uses JavaScript, HTML, and CSS. It was a great way to learn
                  about the asynchronous nature of Javascript, as that presented
                  several learning challenges.
                </p>
                <a
                  href="https://davidloesch1.github.io/Simon_game/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
