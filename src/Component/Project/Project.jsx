import React from "react";
import "./Project.css";
import projects from "../../Data/project.json";

const Project = () => {
  return (
    <div className="container">
      <ul className="projects">
        {projects.map((projects, id) => {
          return (
            <li key={id} className="single-project">
              <img src={`/assets/${projects.img}`} className="left-side" />
              <div className="right-side">
                <h3>{projects.name}</h3>
                <p>{projects.description}</p>
                <a href={projects.link} target="_">
                  View Project
                </a>
              </div>
            </li>
          );
        })}
      </ul>
      <h1 className="place-holder">Working on a project!</h1>
    </div>
  );
};

export default Project;
