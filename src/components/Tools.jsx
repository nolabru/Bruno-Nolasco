import "./Tools.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { sectionHeaders, toolTitle, tools } from "../data/data";

const Tools = () => {
  return (
    <section className="tools">
      <span className="square two"></span>
      <h2 className="section-headers-title">{sectionHeaders[3].title}</h2>
      <p className="section-headers-subtitle">{sectionHeaders[3].subtitle}</p>
      {toolTitle.map((title) => (
        <div key={title}>
          <h3 className="tool-title">{title}</h3>
          <div className="my-tools">
            {tools
              .filter((tool) => tool.category === `${title}`)
              .map((tool, i) => (
                <div key={i} className="tool-card">
                  <FontAwesomeIcon icon={tool.icon} className="tool-icon" />
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Tools;
