import "./App.css";
import Homepage from "./components/Homepage";
import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className=" nav-item">
          Homepage
        </Link>
        <Link to="/About" className="nav-item">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
