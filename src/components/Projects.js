import React from "react";
import "../App.css";
import todo_img from "../images/todo_img.png";
import simon from "../images/simon.png";
import storyboard from "../images/storyboard.png";
import calendar from "../images/calendar.png";

function Projects() {
  return (
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
                focused. Future plans include adding User logins and linking to
                databases. This project used React, HTML, CSS, and Javascript.
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
                This is my take on a classic Simon Game of Memorization. It uses
                JavaScript, HTML, and CSS. It was a great way to learn about the
                asynchronous nature of Javascript, as that presented several
                learning challenges.
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
                This project was a fun project idea that focuses on breaking up
                the front-end and back-end parts. The front-end uses React,
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
            <img src={calendar} class="card-img-top" alt="to-do image" />
            <div class="card-body">
              <h5 class="card-title">Calendar App</h5>
              <p class="card-text">
                This project was to work with Django's built in authentication
                features. It was fun practicing the skills learned in Python and
                Django. Deployed to Heroku
              </p>
              <a
                href="https://calendar-1.herokuapp.com/calendar/"
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
  );
}

export default Projects;
