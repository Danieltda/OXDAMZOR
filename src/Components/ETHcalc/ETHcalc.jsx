import React from 'react';
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";


function ETHcalc() {
  return (
      <>
      <section className="overview-section-s1">
      <h1>ETHcalc</h1>
      <div>
          <input type="text" />
      </div>
      </section>
    <footer className="footer-overview">
    {" "}
    <div className="section1-footer-icons">
      <a href="https://github.com/Danieltda" target="_blank" rel="noreferrer">
        {" "}
        <FaGithubSquare />
      </a>
      <a href="https://mobile.twitter.com/Gr4mzl3gend" target="_blank" rel="noreferrer">
        <FaTwitterSquare />
      </a>
      <a href="https://www.linkedin.com/in/danieltendamme/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
    </div>
  </footer>
  </>
  )
}

export default ETHcalc