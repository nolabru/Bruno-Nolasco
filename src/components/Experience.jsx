import "./Experience.css";

import useScrollReveal from "../hooks/useScrollReveal";

import { icons } from "../data/icons";

import DefaultButton from "./DefaultButton";

import { sectionHeaders, textButtons } from "../data/data";

import { experience } from "../data/data";

const Experience = () => {
  useScrollReveal(".title-section-reveal");
  useScrollReveal(".card-exp-reveal", {
    delay: 500,
    interval: 200,
    distance: "30px",
    origin: "left",
  });

  return (
    <section id="Experiência" className="experience scr-mt">
      <div className="title-section-reveal">
        <h2 className="section-headers-title">{sectionHeaders[1].title}</h2>
        <p className="section-headers-subtitle">{sectionHeaders[1].subtitle}</p>
        <DefaultButton buttons={[textButtons[1]]} />
      </div>
      <div className="experience-container">
        <div className="experience-line">
          <span className="experience-circle"></span>
          <span className="experience-circle"></span>
          <span className="experience-circle"></span>
        </div>
        {experience.map((item, i) => {
          const WorkIcon = icons.work;
          const CalendarIcon = icons.calendar;
          return (
            <div
              key={i}
              className={`experience-route-box card-exp-reveal ${
                i === 1 ? "right" : ""
              }`}
            >
              <div className="experience-job">
                <h3 className="position">
                  <WorkIcon className="work-icon" /> {item.position}
                </h3>
                <p className="company">{item.company}</p>
                <p className="time">
                  <CalendarIcon className="calendar-icon" />
                  {item.time}
                </p>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
