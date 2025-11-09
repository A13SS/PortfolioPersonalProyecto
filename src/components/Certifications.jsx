import '../css/Certifications.css';
const Certifications = () => {

   const certifications = [
    { role: 'Certificación de nivel básico de prevención de riesgos laborables', company: 'IES Cavaleri', period: '10/01/2025', modality: 'Presencial' },
    { role: 'Certificación de nivel medio de prevención de riesgos en puestos de análisis, programación e informática', company: 'Quirón Prevención', period: '22/04/2025', modality: 'En línea'}
    
  ];

  return (
    <section id="certification" className="certification">
        <br />
      <h2>Certificaciones</h2>
      <div className="certification-list">
        {certifications.map((cer, index) => (
          <div key={index} className="certification-item">
            <h3>{cer.role}</h3>
            <p><strong>{cer.company}</strong> — {cer.period}</p>
            <p><strong>{cer.modality}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;