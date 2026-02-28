import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './App.css';
import Home from './pages/Home';
import Games from './pages/Games';
{/*import Papers from './pages/Papers';*/}
import Projects from './pages/Projects';
import About from './pages/About';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const crossPage = prevPathname.current !== pathname;
    prevPathname.current = pathname;

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    const scrollToEl = (behavior: ScrollBehavior) => {
      const el = document.getElementById(id);
      if (el) {
        const navHeight = document.querySelector('nav')?.getBoundingClientRect().height ?? 80;
        // Walk up offsetParent chain to get true distance from document top,
        // unaffected by CSS transforms/animations (unlike getBoundingClientRect)
        let offsetTop = 0;
        let node: HTMLElement | null = el;
        while (node) {
          offsetTop += node.offsetTop;
          node = node.offsetParent as HTMLElement | null;
        }
        window.scrollTo({ top: offsetTop - navHeight - 16, behavior });
      }
    };
    if (crossPage) {
      // Coming from a different page: jump instantly after layout is ready (no animated jiggle)
      setTimeout(() => requestAnimationFrame(() => requestAnimationFrame(() => scrollToEl('instant'))), 50);
    } else {
      // Already on the same page: smooth scroll
      requestAnimationFrame(() => scrollToEl('smooth'));
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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
                <li><Link to="/about#UniversityCourses">Courses</Link></li>
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