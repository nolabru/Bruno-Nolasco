import "./DefaultButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DefaultButton = ({ buttons }) => {
  const renderIcon = (icon) => {
    if (typeof icon === "object" && "iconName" in icon) {
      return <FontAwesomeIcon className="default-icon" icon={icon} />;
    }

    const LucideIcon = icon;
    return <LucideIcon className="default-icon-lucide default-icon" icon={icon} />;
  };
  console.log(buttons);

  return (
    <div>
      {buttons.map((button) => (
        <a
          key={button.id}
          className={`default-button`}
          href={button.href}
          download={button.href.endsWith(".pdf")}
          target="_blank"
        >
          {button.text}
          {renderIcon(button.icon)}
        </a>
      ))}
    </div>
  );
};

export default DefaultButton;
