import "./Tools.css";

import { useState } from "react";

import useScrollReveal from "../hooks/useScrollReveal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { sectionHeaders, toolTitle, tools } from "../data/data";

const Tools = () => {
  useScrollReveal(".title-section-reveal", { delay: 200 });
  useScrollReveal(".cards-tools-reveal", {
    delay: 400,
    interval: 200,
  });

  const originalSubtitle = sectionHeaders[3].subtitle;
  const [subtitle, setSubtitle] = useState(originalSubtitle);

  const techDescription = (desc) => {
    setSubtitle(desc);
  };

  const changeDefaultSubtitle = () => {
    setSubtitle(originalSubtitle);
  };

  return (
    <section id="Habilidades" className="tools scr-mt">
      {/* <span className="square two"></span> */}
      <div className="title-section-reveal">
        <h2 className="section-headers-title">{sectionHeaders[3].title}</h2>
        <p className="section-headers-subtitle">{subtitle}</p>
      </div>
      {toolTitle.map((title) => (
        <div key={title}>
          <h3 className="tool-title cards-tools-reveal">{title}</h3>
          <div className="my-tools">
            {tools
              .filter((tool) => tool.category === title)
              .map((tool, i) => (
                <div
                  onMouseOver={() => techDescription(tool.techDescription)}
                  onMouseOut={changeDefaultSubtitle}
                  key={i}
                  className="tool-card cards-tools-reveal"
                >
                  <FontAwesomeIcon icon={tool.icon} className="tool-icon" />
                </div>
              ))}
          </div>
        </div>
      ))}
      {/* <span className="square three"></span> */}
    </section>
  );
};

export default Tools;
