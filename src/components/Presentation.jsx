import "./Presentation.css";

import useScrollReveal from "../hooks/useScrollReveal";

import { textButtons } from "../data/data";

import DefaultButton from "./DefaultButton";

const Presentation = () => {
  useScrollReveal(".presentation-top-reveal", { delay: 600 });
  useScrollReveal(".presentation-left-reveal", { origin: "left", delay: 500 });

  return (
    <section className="presentation">
      <div className="photo presentation-left-reveal"></div>
      <div className="about-me presentation-top-reveal">
        <h2 className="about-text subtitle">Olá, eu sou o</h2>
        <h1 className="about-text name">Bruno Nolasco</h1>
        <h3 className="about-text work">Desenvolvedor Front End</h3>
        <p className="about-description">
          Um jovem apaixonado por tecnologia e organização. Resido em São Paulo
          e sou estudante do último semestre de Ciência da Computação. Atuei
          como Desenvolvedor de Automações no Itaú Unibanco, Desenvolvedor
          Júnior no Colégio Iavne e atuo como Desenvolvedor Full-Stack
          freelancer.
        </p>
        <DefaultButton buttons={[textButtons[0]]} />
      </div>
    </section>
  );
};

export default Presentation;
