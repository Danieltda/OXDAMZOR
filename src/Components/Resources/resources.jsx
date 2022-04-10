import React from "react";
import { useState } from "react";
import "./resources.css";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export default function Resources() {
  return (
    <>
      <section className="section1-resources">
        <div className="section1-resources-sources">
          <h1 className="section1-resources-titles">Documentation </h1>
          <ul>
            <li className="section1-resources-li">
              <a
                href="https://ethereum.org/en/developers/docs/"
                target="_blank"
              >
                Ethereum Docs - Ethereum Development Documentation
              </a>
            </li>
          </ul>
        </div>
        <div className="section1-resources-sources">
          <h1 className="section1-resources-titles">DEV TOOLS </h1>
          <ul>
            <li className="section1-resources-li">
              {" "}
              <a href="https://trufflesuite.com/ganache/" target="_blank">
                Ganache - One Click Blockchain
              </a>
            </li>
            <li className="section1-resources-li">
              {" "}
              <a href="https://hardhat.org/" target="_blank">
                Hardhat - Ethereum Development Environment
              </a>
            </li>
            <li className="section1-resources-li">
              {" "}
              <a href="https://metamask.io/" target="_blank">
                Metamask - Blockchain Wallet
              </a>
            </li>
          </ul>
        </div>
        <div className="section1-resources-sources">
          <h1 className="section1-resources-titles">CRYPTOGRAPHY </h1>
          <ul className="section1-resources-sources">
            <li className="section1-resources-li">
              {" "}
              <a href="https://cryptocellar.org/" target="_blank">
                Cryptocellar - Cryptology and Its History
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="section1-resources">
        <div className="section1-resources-sources">
          <h1 className="section1-resources-titles">TWITTER </h1>
          <ul className="section1-resources-sources">
            <li className="section1-resources-li">
              {" "}
              <a
                href="https://twitter.com/VitalikButerin?s=20&t=bPOdTxT3_DMCMqzxGTeLGg"
                target="_blank"
              >
                Vitalik Buterin
              </a>
            </li>
          </ul>
        </div>
        <div className="section1-resources-sources">
          <h1 className="section1-resources-titles">REDDITS </h1>
          <ul className="section1-resources-sources">
            <li className="section1-resources-li">
              {" "}
              <a href="https://www.reddit.com/r/ethdev/" target="_blank">
                Ethdev - Ethereum Development and DApps
              </a>
            </li>
            <li className="section1-resources-li">
              {" "}
              <a href="https://www.reddit.com/r/ethdev/" target="_blank">
                Crypto Devs - Crypto-related Developer Discussions
              </a>
            </li>
          </ul>
        </div>
        <div className="section1-resources-sources">
          <h1 className="section1-resources-titles">DISCORDS </h1>
          <ul className="section1-resources-sources">
            <li className="section1-resources-li">
              {" "}
              <a href="https://discord.com/invite/CetY6Y4" target="_blank">
                Ethereum - Ethereum Main
              </a>
            </li>
            <li className="section1-resources-li">
              {" "}
              <a href="https://discord.gg/gK3dXFhM" target="_blank">
                Ethereum R&D - Core Technical Ethereum
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer className="footer-overview">
        {" "}
        <div className="section1-footer-icons">
          <a href="https://github.com/Danieltda" target="_blank">
            {" "}
            <FaGithubSquare />
          </a>
          <a href="https://mobile.twitter.com/Gr4mzl3gend" target="_blank">
            <FaTwitterSquare />
          </a>
          <a href="https://www.linkedin.com/in/danieltendamme/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </>
  );
}
