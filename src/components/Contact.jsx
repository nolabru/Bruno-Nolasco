import "./Contact.css";

import useScrollReveal from "../hooks/useScrollReveal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socialLinks } from "../data/data";

import Form from "./Form";

const Contact = () => {
  useScrollReveal(".contact-box-reveal"), { delay: 500 };

  return (
    <section id="Contato" className="contact contact-box-reveal">
      <div className="card-contact">
        <div className="contact-text">
          <h2 className="contact-title">Vamos criar o seu próximo projeto</h2>
          <p className="card-description">
            Foi um grande prazer te receber aqui e compartilhar um pouco da
            minha trajetória e experiências. Fique a vontade para me mandar uma
            mensagem, estarei sempre a disposição!
          </p>
          <div className="social-media">
            {socialLinks.map((link) => (
              <a className="social-media-link" href={link.href} target="_blank">
                <FontAwesomeIcon
                  className="social-media-link-icon"
                  icon={link.icon}
                />
              </a>
            ))}
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
