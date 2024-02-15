import './App.css';
import Home from './Pages/Home';
import Features from './Pages/Features';
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Contact from './Pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="router">
          <Routes>
              <Route exact path="" element={ <Home/>} />
              <Route exact path="/Features" element={ <Features/>} />
              <Route exact path="/Projects" element={ <Projects/>} />
              <Route exact path="/Resume" element={ <Resume/>} />
              <Route exact path="/Contact" element={ <Contact/>} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
