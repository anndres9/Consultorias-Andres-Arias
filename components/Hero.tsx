import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-brand-dark text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark opacity-80"></div>
       <div 
        className="absolute inset-0 z-0 opacity-5" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm0-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm0-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm0-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 6h4v4H6V6zm10 0h4v4h-4V6zm10 0h4v4h-4V6zm10 0h4v4h-4V6zm10 0h4v4h-4V6zm10 0h4v4h-4V6zm10 0h4v4h-4V6zm10 0h4v4h-4V6zM6 16h4v4H6v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM6 26h4v4H6v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM6 36h4v4H6v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM6 46h4v4H6v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM6 56h4v4H6v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM6 66h4v4H6v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM6 76h4v4H6v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM6 86h4v4H6v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Consultor Senior en Inyección de Polímeros y Transformación Operacional
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Liderazgo de Alto Impacto, Estrategia de Optimización de Costos y Transformación Digital para la industria del plástico.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#contacto"
            className="inline-block bg-brand-accent hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            Solicitar Asesoría
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;