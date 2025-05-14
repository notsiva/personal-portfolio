import React from "react";
import linkedin from "/assets/linkedin.png";
import github from "/assets/github.png";
import contact from "/assets/contact.png";
import about from "/assets/about.png";
import project from "/assets/project.png";
import experience from "/assets/experience.png";

import "./Navbar.css";

const Navbar = ({ onNavigate }) => {
  return (
    <div className="navbar">
      <h1 className="name" onClick={() => onNavigate("hero")}>
        Sivakaran
      </h1>
      <div>
        <ul className="navigation">
          <li className="links" onClick={() => onNavigate("about")}>
            <img src={about} alt="about logo" />
            <a href="#">About</a>
          </li>

          <li className="links" onClick={() => onNavigate("project")}>
            <img src={project} alt="project logo" />
            <a href="#">Project</a>
          </li>
          <li className="links" onClick={() => onNavigate("experience")}>
            <img src={experience} alt="experience logo" />
            <a href="#">Experience</a>
          </li>
          <li className="links" onClick={() => onNavigate("contact")}>
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
