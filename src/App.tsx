import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Home />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
