// About.jsx
import profilePic from '../../public/fotoo.png';
import '../css/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text-wrapper">
          <h2>Sobre mí</h2>
          <p>
            Apasionado del mundo de la informática. Me encanta trabajar en equipo y luchar por objetivos en
            común, dando el máximo de mí al igual que todo el apoyo y ayuda a mis compañeros y mi entorno
            para realizar dicho trabajo. Me gusta aprender y principalmente de gente con mucha más
            experiencia que yo, para así poder construir mi propio camino. Deseando descubrir nuevas metas y trabajar junto a personas
            que deseen el mismo objetivo.
          </p>
        </div>
        
        <div className="profile-container">
          <img src={profilePic} alt="Foto de perfil" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default About;