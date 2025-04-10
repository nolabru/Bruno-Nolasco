import "./Experience.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { icons } from "../data/icons";

import DefaultButton from "./DefaultButton";

import { sectionHeaders, textButtons } from "../data/data";

import { experience } from "../data/data";

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="section-headers-title">{sectionHeaders[1].title}</h2>
      <p className="section-headers-subtitle">{sectionHeaders[1].subtitle}</p>
      <DefaultButton buttons={[textButtons[2]]} />
      <div className="experience-container">
        <div className="experience-line">
          <span className="experience-circle"></span>
          <span className="experience-circle"></span>
          <span className="experience-circle"></span>
        </div>
        {experience.map((item, i) => (
          <div
            key={i}
            className={`experience-route-box ${i === 1 ? "right" : ""}`}
          >
            <div className="experience-job">
              <h3 className="position">
                <FontAwesomeIcon
                  className="experience-icon"
                  icon={icons.faBriefcase}
                />
                {item.position}
              </h3>
              <p className="company">{item.company}</p>
              <p className="time">
                <FontAwesomeIcon
                  className="experience-icon"
                  icon={icons.faCalendar}
                />
                {item.time}
              </p>
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
