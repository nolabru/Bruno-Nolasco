import "./ProjectDetail.css";

import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { icons } from "../data/icons";

import { buttonProjects } from "../data/data";

const ProjectDetail = ({ selectedProject, closeDetail }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const isHidden = (textButton) => {
    if (textButton === "Detalhes") return "display-none";
    if (
      selectedProject.state === "Professional" &&
      textButton === "Repositório"
    )
      return "display-none";
    if (selectedProject.state === "Personal" && textButton === "Projeto")
      return "display-none";
    return "";
  };
  
  return (
    <div className="project-detail-box">
      <div className="project-detail">
        <button className="close-button" onClick={closeDetail}>
          <FontAwesomeIcon className="x-icon" icon={icons.faXmark} />
        </button>

        <img className="detail-image" src={selectedProject.background} alt="" />

        <div className="detail-data">
          <h1 className="detail-project-title">{selectedProject.title}</h1>

          <p className="card-description">{selectedProject.description}</p>

          <h3 className="detail-card-title">Tecnologias</h3>

          <div
            className="detail-mini-cards"
            style={{
              gridTemplateColumns: `repeat(${selectedProject.tools.length},1fr)`,
            }}
          >
            {selectedProject.tools.map((tool) => (
              <div className="tech-item">
                <FontAwesomeIcon
                  icon={tool.icon}
                  className="tech-item-icon"
                  style={{ color: `${tool.color}` }}
                />
                <p className="tech-item-tool">{tool.language}</p>
              </div>
            ))}
          </div>

          <h3 className="detail-card-title">Links</h3>

          <div className="detail-mini-cards links">
            {buttonProjects.map((button, i) => (
              <a
                key={i}
                href={`${
                  button.text === "Projeto"
                    ? selectedProject.hrefProject
                    : selectedProject.hrefRepository
                }`}
                target="_blank"
                className={`default-button projects detail ${isHidden(
                  button.text
                )}`}
              >
                {button.text}
                <FontAwesomeIcon
                  icon={button.icon}
                  className="default-icon projects"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
