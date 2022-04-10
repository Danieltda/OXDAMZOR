import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import DailyNewsItem from "./Components/DailyNewsItem/DailyNewsItem";
import { SiBlockchaindotcom } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <nav className="navigation-bar">
        <div className="div-blockroot">
          <SiBlockchaindotcom /> BlockSources
        </div>
        <div className="navigation-bar-links">
          <Link to="/" className="link-style">
            Home
          </Link>
          <br />
          <Link to="/about" className="link-style">
            About
          </Link>
          <br />
          <Link to="/dailynewsitem" className="link-style">
            Daily News Item
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dailynewsitem" element={<DailyNewsItem />} />
      </Routes>
    </div>
  );
}

export default App;
