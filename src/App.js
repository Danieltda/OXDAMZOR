// App.jsx

import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import { SiBlockchaindotcom } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navigation-bar navbar">
        <div className="container">
          <div className="navbar-brand div-blockroot">
            <SiBlockchaindotcom /> OXDAMZOR
          </div>
          <div className="navigation-bar-links d-flex align-items-center">
            <Link to="/" className="nav-link link-style">
              Home
            </Link>
          </div>
        </div>
      </nav>
      {/* <div className="container mt-4"> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
