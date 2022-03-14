import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation/navigation.jsx";
import Overview from "./Components/Overview/overview.jsx";
import Resources from "./Components/Resources/resources.jsx";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Overview />
      <Resources />
    </div>
  );
}

export default App;
