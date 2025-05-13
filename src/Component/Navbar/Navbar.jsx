import React from "react";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/github.png";
import contact from "../../../assets/contact.png";
import about from "../../../assets/about.png";
import project from "../../../assets/project.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="name">Sivakaran</h1>
      <div>
        <ul className="navigation">
          <li>
            <img src={about} alt="about logo" />
            <a href="#">About</a>
          </li>

          <li>
            <img src={project} alt="project logo" />
            <a href="#">Project</a>
          </li>
          <li>
            <img src={contact} alt="contact logo" />
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="quick-links">
        <a
          href="https://www.linkedin.com/in/notsiva/"
          target="#"
          className="linkedin"
        >
          <img src={linkedin} alt="linkedin logo" />
        </a>
        <a href="https://github.com/notsiva" target="#" className="github">
          <img src={github} alt="github logo" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
