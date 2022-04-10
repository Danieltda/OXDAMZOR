import React from "react";
import { useState } from "react";
import "./resources.css";

export default function Resources() {
  const [like, setLike] = useState([]);

  return (
    <>
      <section className="section1-resources">
        <div>
          <h1 className="section1-resources-titles">Documentation </h1>
          <ul className="section1-resources-sources">
            <li>
              <a
                href="https://ethereum.org/en/developers/docs/"
                target="_blank"
              >
                Ethereum Docs
              </a>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1 className="section1-resources-titles">DEV TOOLS </h1>
          <ul className="section1-resources-sources">
            <li>test</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1 className="section1-resources-titles">CRYPTOGRAPHY </h1>
          <ul className="section1-resources-sources">
            <li>test</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
      <section className="section1-resources">
        <div>
          <h1 className="section1-resources-titles">TWITTER </h1>
          <ul className="section1-resources-sources">
            <li>
              {" "}
              <a
                href="https://twitter.com/VitalikButerin?s=20&t=bPOdTxT3_DMCMqzxGTeLGg"
                target="_blank"
              >
                Vitalik Buterin
              </a>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1 className="section1-resources-titles">REDDITS </h1>
          <ul className="section1-resources-sources">
            <li>test</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1 className="section1-resources-titles">PODCASTS </h1>
          <ul className="section1-resources-sources">
            <li>test</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
      <footer className="footer-overview">test</footer>
    </>
  );
}
