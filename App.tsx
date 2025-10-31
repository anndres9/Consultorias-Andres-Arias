
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Hosting from './components/Hosting';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-brand-light text-brand-dark font-sans antialiased">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <Services />
        <About />
        <Skills />
        <Contact />
        <Hosting />
      </main>
      <Footer />
    </div>
  );
}

export default App;
