import '../css/Projects.css';

const Projects = () => {
  const projects = [
    { title: 'App Empresa', description: 'Una app simple para gestionar los empleadosde una empresa.', link: 'https://github.com/A13SS/Empresa' },
    { title: 'Gestión Nóminas', description: 'Este es un proyecto de gestión de nóminas.', link: 'https://github.com/A13SS/GestionDeNominas' }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;