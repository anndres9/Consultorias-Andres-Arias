import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setFormStatus('success');
      setFormData({ name: '', company: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000); // Reset form status after 5 seconds
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Contáctenos
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              ¿Listo para optimizar su producción? Envíeme un mensaje y comencemos a trabajar juntos.
            </p>
          </div>
        </AnimatedSection>
        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8">
          <AnimatedSection className="relative bg-gray-800 p-8 rounded-lg shadow-lg text-gray-300">
            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Email</h4>
                  <a href="mailto:anndres9ia@gmail.com" className="hover:text-brand-accent transition-colors">anndres9ia@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Teléfono</h4>
                  <a href="tel:+573334310367" className="hover:text-brand-accent transition-colors">+57 333 431 0367</a>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Ubicación</h4>
                  <p>Servicio a nivel nacional e internacional</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12 lg:mt-0 bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Empresa</label>
                <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm"></textarea>
              </div>
              <div>
                <button type="submit" disabled={formStatus === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-accent hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors disabled:bg-gray-400">
                  {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
              {formStatus === 'success' && <p className="text-center text-green-600">¡Gracias! Su mensaje ha sido enviado. Le contactaremos pronto.</p>}
              {formStatus === 'error' && <p className="text-center text-red-600">Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.</p>}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;