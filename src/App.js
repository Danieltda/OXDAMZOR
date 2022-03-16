import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import SuggestaResource from "./Components/Suggestaresource/SuggestaResource";
import { SiBlockchaindotcom } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <nav className="navigation-bar">
        <div className="div-blockroot">
          <SiBlockchaindotcom /> BlockRoot
        </div>
        <Link to="/" className="link-style">
          Home
        </Link>
        <br />
        <Link to="/about" className="link-style">
          About
        </Link>
        <br />
        <Link to="/suggestaresource" className="link-style">
          Suggest a Resource
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/suggestaresource" element={<SuggestaResource />} />
      </Routes>
    </div>
  );
}

export default App;
