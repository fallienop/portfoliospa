import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Projects from './Components/ProjectSamples/ProjectS';
import './App.css';
function getClassName({ isActive }) {
  if (isActive) {
    return 'active';
  }
  return '';
}

function App() {
  return (
    <BrowserRouter>

<ul>
        <li>
          <NavLink to="/" className={getClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getClassName}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getClassName}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/projs" className={getClassName}>
            Projects
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route
          path="/"
          element={<div><h1>Home</h1></div>}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/projs"
          element={<Projects />}
        />
      </Routes>

   
    </BrowserRouter>
  );
}

export default App;
