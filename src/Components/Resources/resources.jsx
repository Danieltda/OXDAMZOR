import React from "react";
import { useState } from "react";
import "./resources.css";

export default function Resources() {
  const [like, setLike] = useState([]);

  return (
    <>
      <section className="section1-resources">
        <div>DOCUMENTATION</div>
        <div>DEV TOOLS</div>
        <div>CRYPTOGRAPHY</div>
      </section>
      <section className="section1-resources">
        <div>TWITTER</div>
        <div>REDDITS</div>
        <div>PODCASTS</div>
      </section>
      <footer className="footer-overview">test</footer>
    </>
  );
}
