import React from 'react';
import AnimatedSection from './AnimatedSection';

const hostingPlatforms = [
  {
    name: 'Netlify',
    description: 'Ideal para principiantes por su facilidad de uso. Ofrece despliegue continuo desde Git y una interfaz de "arrastrar y soltar".',
    steps: '1. Regístrate y conecta tu cuenta de GitHub/GitLab. 2. Selecciona tu repositorio. 3. Configura el comando de build (`npm run build`) y el directorio de publicación (`dist`). 4. ¡Despliega!',
    logo: 'https://www.netlify.com/v3/img/components/logomark-light.svg'
  },
  {
    name: 'Vercel',
    description: 'Plataforma optimizada para frameworks de JavaScript como React. Conocida por su velocidad y excelentes herramientas para desarrolladores.',
    steps: '1. Importa tu proyecto desde tu proveedor de Git. 2. Vercel detectará automáticamente que es un proyecto de Vite/React. 3. Confirma la configuración y despliega. El proceso es casi instantáneo.',
     logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png'
  },
  {
    name: 'GitHub Pages',
    description: 'Integrado directamente en GitHub. Es una opción sólida y gratuita para alojar sitios estáticos directamente desde tu repositorio.',
    steps: '1. Sube tu código a un repositorio de GitHub. 2. Ve a la pestaña "Settings" > "Pages". 3. Selecciona la rama (`main` o `gh-pages`) y la carpeta (`/root` o `/docs`) a desplegar. 4. Guarda y tu sitio estará en línea.',
     logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  },
  {
    name: 'Cloudflare Pages',
    description: 'Ofrece un rendimiento global increíble gracias a su CDN. Es una opción muy robusta con un generoso plan gratuito.',
    steps: '1. Conecta tu cuenta de Git. 2. Selecciona tu repositorio y la rama de producción. 3. Configura los ajustes de build (framework: Vite, comando: `npm run build`, directorio: `dist`). 4. Despliega y disfruta de la velocidad global.',
     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cloudflare_Logo.svg/2560px-Cloudflare_Logo.svg.png'
  }
];

const HostingCard: React.FC<typeof hostingPlatforms[0]> = ({ name, description, steps, logo }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col h-full">
        <div className="flex items-center mb-4">
             <img src={logo} alt={`${name} logo`} className={`h-8 mr-4 ${name === 'Vercel' || name === 'GitHub Pages' ? 'invert' : ''}`} style={{ objectFit: 'contain' }} />
            <h3 className="text-xl font-bold text-white">{name}</h3>
        </div>
        <p className="text-gray-300 flex-grow">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-700">
            <h4 className="font-semibold text-gray-200">Cómo subir tu código:</h4>
            <p className="text-sm text-gray-400 mt-1">{steps}</p>
        </div>
    </div>
);


const Hosting = () => {
  return (
    <section id="hosting" className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Recomendaciones de Alojamiento Gratuito
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Una vez que personalices tu sitio, puedes alojarlo en línea sin costo utilizando estas excelentes plataformas para sitios estáticos.
            </p>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {hostingPlatforms.map((platform, index) => (
            <AnimatedSection key={index}>
              <HostingCard {...platform} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hosting;