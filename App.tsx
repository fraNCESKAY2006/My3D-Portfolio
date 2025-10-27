import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import { Project } from './types';

const App: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleViewGallery = (project: Project) => {
    setActiveProject(project);
    window.scrollTo(0, 0); 
  };

  const handleBackToHome = () => {
    setActiveProject(null);
  };

  if (activeProject) {
    return <Gallery project={activeProject} onBack={handleBackToHome} />;
  }

  return (
    <div className="relative z-0 bg-[#050816] min-h-screen">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div className="relative z-10 bg-[#050816]">
          <div id="about" className="pt-20">
            <About />
          </div>
          <div id="skills" className="pt-20">
            <Skills />
          </div>
          <div id="projects" className="pt-20">
            <Projects onViewGallery={handleViewGallery} />
          </div>
          <div id="contact" className="pt-20">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;