import "./Header.css";

import logo from "../assets/logo.svg";

import { useEffect, useState } from "react";

import { linkTitle } from "../data/data";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <section className={`header-scroll-true ${scrolled ? "scrolled" : ""}`}>
      <header className="header">
        <img className="logo reveal" src={logo} alt="logo" />
        <nav className="nav-bar">
          <ul className={`header-link-list ${menuOpen ? "open" : ""}`}>
            {linkTitle.map((link) => (
              <li className="reveal">
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
    </section>
  );
};

export default Header;
