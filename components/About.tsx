import React from 'react';
import AnimatedSection from './AnimatedSection';

const profileImage = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="relative p-4">
               <div className="absolute inset-0 bg-brand-accent rounded-xl transform -rotate-3 z-0"></div>
               <img
                className="relative rounded-xl shadow-2xl w-full h-auto object-cover z-10"
                src={profileImage}
                alt="Consultor experto en inyección y transformación operacional"
              />
            </div>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
                Perfil Profesional
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Consultor experto con una trayectoria probada en la excelencia operacional y la gestión estratégica dentro del sector de inyección de plásticos. Mi valor reside en la intersección del dominio técnico avanzado y la capacidad de liderazgo humano y digital.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Como líder de operaciones, he dirigido y formado equipos de hasta 70 personas, destacando por mi habilidad para lidiar con caracteres difíciles, creando ambientes laborales más amenos y reduciendo drásticamente la deserción de operarios. Mi enfoque en las rotaciones persona-máquina garantiza la eficiencia, la seguridad y la salud ocupacional del equipo.
              </p>
               <p className="mt-4 text-lg text-gray-600">
                Busco liderar proyectos de consultoría y gestión donde la innovación técnica, la reducción de costes y el liderazgo estratégico del talento impulsen la máxima rentabilidad y eficiencia operativa.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
