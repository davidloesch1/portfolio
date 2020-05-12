import React from "react";
import Resume from './components/Resume'
import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
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
      <Header />

      {/* Start of the About Section */}
      <About />

      {/* Start of the Resume Section */}
      <Resume />

      {/* Start of the Project section */}
      <Projects />
    </>
  );
}

export default App;
