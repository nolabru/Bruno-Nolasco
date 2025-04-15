import "./Slider.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../data/icons";
import { projects, buttonProjects } from "../data/data";
import ProjectDetail from "./ProjectDetail";

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const [itemsPerPage, setItemsPerPage] = useState(() =>
    window.innerWidth <= 980 ? 2 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      const newItems = window.innerWidth <= 980 ? 2 : 4;
      setItemsPerPage(newItems);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handleDetailClick = (project) => {
    setSelectedProject(project);
    setShowDetail(true);
  };

  const closeDetail = () => {
    setShowDetail(false);
    setSelectedProject(null);
  };

  return (
    <div className="slider">
      <div className="controll-slider">
        <button onClick={handlePrev} className="slide-button">
          <FontAwesomeIcon
            icon={icons.faArrowLeft}
            className="slider-button-icon"
          />
        </button>

        <button onClick={handleNext} className="slide-button">
          <FontAwesomeIcon
            icon={icons.faArrowRight}
            className="slider-button-icon"
          />
        </button>
      </div>

      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {[...Array(totalPages)].map((_, pageIndex) => {
          const start = pageIndex * itemsPerPage;
          const currentProjects = projects.slice(start, start + itemsPerPage);

          return (
            <div className="project-list" key={pageIndex}>
              {currentProjects.map((project, index) => (
                <div className="project-card" key={index}>
                  <img
                    className="project-image"
                    src={project.background}
                    alt={project.title}
                  />

                  <div className="project-data">
                    <h3 className="project-title">{project.title}</h3>

                    <div className="info-acess">
                      {buttonProjects.map((button, i) => {
                        if (button.text === "Detalhes") {
                          return (
                            <button
                              key={i}
                              onClick={() => handleDetailClick(project)}
                              className="default-button projects"
                            >
                              {button.text}
                              <FontAwesomeIcon
                                icon={button.icon}
                                className="default-icon projects"
                              />
                            </button>
                          );
                        }

                        let dynamicHref = "#";

                        if (button.text === "Projeto") {
                          dynamicHref = project.hrefProject;
                        } else if (button.text === "Repositório") {
                          dynamicHref = project.hrefRepository;
                        }

                        const configState = (buttonText) => {
                          if (
                            project.state === "Professional" &&
                            buttonText === "Repositório"
                          ) {
                            return "display-none";
                          } else if (
                            project.state === "Personal" &&
                            buttonText === "Projeto"
                          ) {
                            return "display-none";
                          } else {
                            return;
                          }
                        };

                        return (
                          <a
                            key={i}
                            href={dynamicHref}
                            target="_blank"
                            className={`default-button projects ${configState(
                              button.text
                            )}`}
                          >
                            {button.text}
                            <FontAwesomeIcon
                              icon={button.icon}
                              className="default-icon projects"
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="select-slide">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`selected-slide ${
              index === currentPage ? "active" : ""
            }`}
            onClick={() => setCurrentPage(index)}
          ></button>
        ))}
      </div>
      {showDetail && selectedProject && (
        <ProjectDetail
          selectedProject={selectedProject}
          closeDetail={closeDetail}
          showDetail={showDetail}
        />
      )}
    </div>
  );
};

export default Slider;
