import "./ProjectDetail.css";

import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { icons } from "../data/icons";

import { buttonProjects } from "../data/data";

const ProjectDetail = ({ selectedProject, closeDetail }) => {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
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

  const renderTechIcon = (item, className) => {
    if (typeof item.icon === "string") {
      return <i className={`${item.icon} ${className}`} />;
    }

    if (item.icon && typeof item.icon === "object" && "iconName" in item.icon) {
      return (
        <FontAwesomeIcon
          icon={item.icon}
          className={className}
          style={item.color}
        />
      );
    }

    const LucideIcon = item.icon;
    return <LucideIcon className={className} />;
  };

  const renderIcon = (icon, className) => {
    if (icon && typeof icon === "object" && "iconName" in icon) {
      return <FontAwesomeIcon icon={icon} className={className} />;
    }
    const LucideIcon = icon;
    return <LucideIcon className={`${className}`} />;
  };

  return (
    <div className="project-detail-box">
      <div className="project-detail">
        <button className="close-button" onClick={closeDetail}>
          {renderIcon(icons.close, "x-icon")}
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
            {selectedProject.tools.map((tool, index) => (
              <div className="tech-item" key={`${tool.language}-${index}`}>
                {renderTechIcon(tool, "tech-item-icon colored")}
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
                  button.text,
                )}`}
              >
                {button.text}
                {renderIcon(button.icon, "default-icon detail-icon")}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
