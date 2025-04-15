import DefaultButton from "./DefaultButton";

import useScrollReveal from "../hooks/useScrollReveal";

import { sectionHeaders, textButtons } from "../data/data";

const Projects = () => {
  useScrollReveal(".title-section-reveal", { delay: 200 });
  return (
    <section
      id="Projetos"
      className="title-section-reveal"
      style={{ scrollMarginTop: "var(--default-scroll-margin-top)" }}
    >
      <h2 className="section-headers-title">{sectionHeaders[2].title}</h2>
      <p className="section-headers-subtitle">{sectionHeaders[2].subtitle}</p>
      <DefaultButton buttons={[textButtons[3]]} />
    </section>
  );
};

export default Projects;
