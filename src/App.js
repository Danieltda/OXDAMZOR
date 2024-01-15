import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import MetaMask from "./Components/AboutPage/AboutPage.jsx";
import ETHcalc from "./Components/ETHcalc/ETHcalc.jsx"
import { SiBlockchaindotcom } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <nav className="navigation-bar">
        <div className="div-blockroot">
          <SiBlockchaindotcom /> OXDAMZOR
        </div>
        <div className="navigation-bar-links">
          <Link to="/" className="link-style">
            Home
          </Link>
          <br />
          <Link to="/ETHcalc" className="link-style">
            ETHcalc
          </Link>
          <br />
          <MetaMask/>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ETHcalc" element={<ETHcalc/>} />
      </Routes>
    </div>
  );
}

export default App;
