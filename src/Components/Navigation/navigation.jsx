import React from "react";
import "./navigation.css";
import { SiBlockchaindotcom } from "react-icons/si";

export default function Navigation() {
  return (
    <header className="navigation-bar">
      {" "}
      <div className="div-blockroot">
        <SiBlockchaindotcom />
        BlockRoot
      </div>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Select Crypto </li>
          <a href="#" className="suggest-resource">
            <li>Suggest a resource</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
