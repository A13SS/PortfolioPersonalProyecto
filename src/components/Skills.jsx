import '../css/Skills.css';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'HTML/CSS', 'Git', 'Node.js', 
    'Java', 'C', 'SQL', 'MySQL', 'SpringBoot'];

  return (
    <section id="skills" className="skills">
      <h2>Habilidades</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;