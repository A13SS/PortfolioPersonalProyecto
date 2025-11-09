import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#experience">Experiencia y formación</a></li>
        <li><a href="#idioms">Competencias de idiomas</a></li>
        <li><a href="#certification">Certificaciones</a></li> 
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;