import React from 'react';
import AnimatedSection from './AnimatedSection';

const skillsData = {
  technical: [
    'Inyección de Polipropileno (PP)',
    'Parametrización Avanzada',
    'Aditivación de Polímeros',
    'Control de Scrap y Costos',
    'Gestión de Moldes y Utillajes',
  ],
  systems: [
    'Krauss Maffei, Engel, Milacron',
    'Sistemas MES/ERP',
    'Desarrollo de Aplicaciones (Apps)',
    'Toshiba, Chen Hsong, Yizumi',
    'Trazabilidad y Recolección de Datos',
  ],
  leadership: [
    'Liderazgo de Alto Impacto',
    'Gestión de Conflictos Laborales',
    'Retención de Talento Operativo',
    'Mejora de Clima Laboral',
    'Estrategia de Producción',
  ],
};

const SkillColumn: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-brand-blue mb-4 border-b-2 border-brand-accent pb-2">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Habilidades Técnicas y de Gestión
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Competencias clave que impulsan la eficiencia y la innovación en cada proyecto.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            <SkillColumn title="Habilidades Técnicas" skills={skillsData.technical} />
            <SkillColumn title="Sistemas / Maquinaria" skills={skillsData.systems} />
            <SkillColumn title="Habilidades de Liderazgo" skills={skillsData.leadership} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;