import React from "react";
import experience from "../../Data/experience.json";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experiences">
      <ul className="company-lists">
        {experience.map((experience, id) => {
          return (
            <li key={id} className="company">
              <div className="left-side">
                <img src={`/assets/${experience.img}`} alt={experience.name} />
                <h2>{experience.name}</h2>
              </div>
              <div className="right-side">
                <h2>{experience.role}</h2>
                <h3>{experience.period}</h3>
                <p>{experience.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
