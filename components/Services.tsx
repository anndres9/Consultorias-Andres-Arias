import React from 'react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: 'Excelencia Técnica y Productiva',
    description: 'Logro consistente en la reducción del tiempo de ciclo y scrap. Diseño de protocolos para la integración de material reciclado y profundo conocimiento en Polipropilenos (Homo, Copo, Random) y aditivos.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    title: 'Liderazgo y Gestión de Personas',
    description: 'Dirección de equipos de hasta 70 personas. Estrategias efectivas para la retención de talento y mejora del clima laboral. Implementación de sistemas de rotación persona-máquina para salud ocupacional y eficiencia.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    title: 'Sistemas de Información e Innovación',
    description: 'Desarrollo e implementación de Apps internas para la organización de moldes, agilizando montajes y reduciendo tiempos de set-up. Optimización de la OEE (Overall Equipment Effectiveness) y trazabilidad.',
  },
];

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-brand-dark">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Áreas Clave de Experiencia
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Soluciones integrales para llevar su producción al siguiente nivel de calidad y rendimiento.
            </p>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {services.map((service, index) => (
             <AnimatedSection key={index}>
                <ServiceCard {...service} />
             </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;