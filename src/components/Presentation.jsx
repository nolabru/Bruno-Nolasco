import "./Presentation.css";

import { textButtons } from "../data/data";

import DefaultButton from "./DefaultButton";

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="photo"></div>
      <div className="about-me">
        <h2 className="about-text subtitle">Olá, eu sou o</h2>
        <h1 className="about-text name">Bruno Nolasco</h1>
        <h3 className="about-text work">Desenvolvedor Full Stack</h3>
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
