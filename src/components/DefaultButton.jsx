import "./DefaultButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DefaultButton = ({ buttons }) => {
  return (
    <div>
      {buttons.map((button) => (
        <a
          key={button.id}
          className={`default-button ${button.id === 2 ? "izzi" : ""}`}
          href={button.href}
          download={button.href.endsWith(".pdf")}
          target="_blank"
        >
          {button.text}
          <FontAwesomeIcon className="default-icon" icon={button.icon} />
        </a>
      ))}
    </div>
  );
};

export default DefaultButton;
