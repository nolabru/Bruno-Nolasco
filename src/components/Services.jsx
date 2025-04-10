import "./Services.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { sectionHeaders, textButtons, services } from "../data/data";

import DefaultButton from "./DefaultButton";

const Services = () => {
  return (
    <section className="services">
      <span className="square one"></span>
      <h2 className="section-headers-title">{sectionHeaders[0].title}</h2>
      <p className="section-headers-subtitle">{sectionHeaders[0].subtitle}</p>
      <DefaultButton buttons={[textButtons[1]]} />
      <div className="services-container">
        {services.map((card, i) => (
          <div key={i} className="service-card">
            <div className={`service-description ${i === 1 ? "mid" : ""}`}>
              <FontAwesomeIcon
                className={`service-icon ${i === 1 ? "mid" : ""}`}
                icon={card.icon}
              />
              <h3 className="service-title">{card.title}</h3>
              <p className={`card-description ${i === 1 ? "mid" : ""}`}>
                {card.description}
              </p>
            </div>
            <div className="service-data">
              <h3 className="service-data-title">{card.data}</h3>
              <p className="service-data-text">{card.dataText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
