import * as React from "react";
import { Link } from "gatsby";
import "./style.scss";

const GlobalHeader = ({ title }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">
          <Link to="/">{title}</Link>
        </h1>
      </div>
      <div className="header-right">
        <nav className="gnb">
          <ul className="gnb-link-list">
            <li className="gnb-link-item">
              <Link to="/about">about</Link>
            </li>
            <li className="gnb-link-item">
              <Link to="/blog">blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default GlobalHeader;
