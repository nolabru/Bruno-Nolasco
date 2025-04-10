import "./Header.css";

import { useEffect, useState } from "react";

import { linkTitle } from "../data/data";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  return (
    <header className="header">
      <img className="logo" src="logo.svg" alt="logo" />
      <nav className="nav-bar">
        <ul className={`header-link-list ${menuOpen ? "open" : ""}`}>
          {linkTitle.map((link) => (
            <li>
              <a
                onClick={handleLinkClick}
                className="header-link"
                href={`#${link}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={toggleMenu}
          className={`toggle-menu ${menuOpen ? "open" : ""}`}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
