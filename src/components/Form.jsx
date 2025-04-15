import "./Form.css";

import { useState } from "react";

import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { icons } from "../data/icons";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_pfaxt2j",
        "template_7xis6hd",
        templateParams,
        "RCjEQg5dIpYGM_cCU"
      )
      .then((response) => {
        console.log("Email Enviado", response.status);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="default-label">
        Nome
        <input
          className="default-input"
          type="text"
          placeholder="Seu nome"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>

      <label className="default-label">
        Email
        <input
          className="default-input"
          type="text"
          placeholder="seu@email.com"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label className="default-label">
        Assunto
        <input
          className="default-input"
          type="text"
          placeholder="Como posso ajudar?"
          required
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
      </label>

      <label className="default-label">
        Mensagem
        <textarea
          className="default-input message"
          placeholder="Descreva sua ideia..."
          required
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </label>

      <div className="default-button form">
        <input className="submit-input" type="submit" value="Enviar Mensagem" />
        <FontAwesomeIcon className="default-icon" icon={icons.faPaperPlane} />
      </div>
    </form>
  );
};

export default Form;
