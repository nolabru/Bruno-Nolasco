import DefaultButton from "./DefaultButton";

import { sectionHeaders, textButtons } from "../data/data";

const Projects = () => {
  return (
    <section>
      <h2 className="section-headers-title">{sectionHeaders[2].title}</h2>
      <p className="section-headers-subtitle">{sectionHeaders[2].subtitle}</p>
      <DefaultButton buttons={[textButtons[3]]} />
    </section>
  );
};

export default Projects;
