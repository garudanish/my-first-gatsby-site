import * as React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy;{" "}
        <a
          href="https://github.com/garudanish/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          김현수
        </a>
      </p>
    </footer>
  );
};

export default Footer;
