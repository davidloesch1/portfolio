import React from "react";
import "../App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faCheckSquare, faCoffee, faFileAlt);

function Header() {
  return (
    <div class="bg-dark p-4 header">
        <div>

      <h1 class="text-white">David Loesch</h1>
      <h6 class="text-white"> Full-Stack Developer</h6>
      <p class="text-white phone">678.899.0435</p>
      <p class="text-white email">davidloesch1@gmail.com</p>
      <span class="text-muted">Looking to work with amazing teams.</span>
      <br />
      <FontAwesomeIcon
        icon={["fab", "linkedin"]}
        size="3x"
        className="link-icon"
        onClick={() =>
          window.open("https://www.linkedin.com/in/davidloesch1/", "_blank")
        }
      />
      <FontAwesomeIcon
        icon={["fab", "twitter-square"]}
        size="3x"
        className="link-icon"
        onClick={() =>
          window.open("https://twitter.com/davidlo92284111", "_blank")
        }
      />
      <FontAwesomeIcon
        icon={["fab", "github-square"]}
        size="3x"
        className="link-icon"
        onClick={() => window.open("https://github.com/davidloesch1", "_blank")}
      />
        </div>
    </div>
  );
}

export default Header;
