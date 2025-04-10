import "./Contact.css";

import { linkTitle } from "../data/data";

const Contact = () => {
  return (
    <section className="contact">
      <div className="card-contact">
        <div className="contact-text">
          <h2 className="contact-title">Vamos criar o seu próximo projeto</h2>
          <p className="contact-description">
            Foi um prazer te receber aqui e compartilhar um pouco da minha
            trajetória. Caso queira me mande uma mensagem, estarei sempre a
            disposição.
          </p>
        </div>
        <div className="contact-box-button">
          <button className="contact-button">{linkTitle[4]}</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
