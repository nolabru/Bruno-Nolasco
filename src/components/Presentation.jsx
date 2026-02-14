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
        <h3 className="about-text work">Mobile & Frontend Software Engineer</h3>
        <p className="about-description">
          Desenvolvedor Mobile Pleno com foco em Flutter & Dart, com forte experiência
          na integração de IA generativa, aplicando inteligência artificial na
          resolução de problemas reais.
        </p>
        <DefaultButton buttons={[textButtons[0]]} />
      </div>
    </section>
  );
};

export default Presentation;
