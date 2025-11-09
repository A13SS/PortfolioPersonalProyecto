import './App.css';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Idioms from './components/Idioms.jsx';
import Certifications from './components/Certifications.jsx';

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="container">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Idioms />
        <Certifications />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;