import '../css/Experience.css';

const Experience = () => {
  const experiences = [
    { role: 'Titulo de la ESO', company: 'IES Cavaleri', period: '2015 - 2019' },
    { role: 'Titulo de Bachillerato', company: 'IES Cavaleri', period: '2019 - 2021' },
    { role: 'Grado Ingeniería de telecomunicaciones', company: 'US Sevilla', period: '2021 - Presente' },
    { role: 'Formación profesional de Grado Superior', company: 'IES Sotero Hernández', period: '2024 - Presente' },
    { role: 'Prácticas en Desarrollo Web', company: 'Grupo Solutia', period: '2024 - Presente' }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experiencia y formación</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role}</h3>
            <p><strong>{exp.company}</strong> — {exp.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;