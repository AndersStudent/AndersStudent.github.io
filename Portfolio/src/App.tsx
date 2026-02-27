import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Games from './pages/Games';
{/*import Papers from './pages/Papers';*/}
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <Link to="/games">Games</Link>
              <ul className="dropdown-menu">
                <li><Link to="/games#published-games">Solo Dev</Link></li>
                <li><Link to="/games#in-development">In Development</Link></li>
                <li><Link to="/games#game-jams">Game Jams</Link></li>
              </ul>
            </li>
            {/* <li><Link to="/papers">Papers</Link></li>*/}
            <li className="dropdown">
              <Link to="/projects">Projects</Link>
              <ul className="dropdown-menu">
                <li><Link to="/projects#Semester-Projects">University</Link></li>
                <li><Link to="/projects#In-Development">In Development</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/about">About Me</Link>
              <ul className="dropdown-menu">
                <li><Link to="/about#Background">Background</Link></li>
                <li><Link to="/about#Experience">Experience</Link></li>
                <li><Link to="/about#Skills">Skills</Link></li>
                <li><Link to="/about#Hobbies">Hobbies</Link></li>
                <li><Link to="/about#Goal">Goal</Link></li>
                <li><Link to="/about#SendMeAMessage">Send Mail</Link></li>
                <li><Link to="/about#Contact-Info">Contact Info</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          {/*<Route path="/papers" element={<Papers />} />*/}
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;