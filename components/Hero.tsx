
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Stars from './canvas/Stars';
import { FiDownload } from 'react-icons/fi';
import { FaPaperPlane } from 'react-icons/fa';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Base64 encoded placeholder PDF
  const placeholderCV = "data:application/pdf;base64,JVBERi0xLjEKJcKlwrHDqwoxIDAgb2JqCjw8IC9UeXBlIC9DYXRhbG9nIC9QYWdlcyAyIDAgUiA+PiBlbmRvYmoKMiAwIG9iago8PCAvVHlwZSAvUGFnZXMgL0tpZHMgWzMgMCBSXSAgL0NvdW50IDEgPj4gZW5kb2JqCjMgMCBvYmoKPDwgL1R5cGUgL1BhZ2UgL1BhcmVudCAyIDAgUiAvTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQogIC9Db250ZW50cyA0IDAgUiAvUmVzb3VyY2VzIDw8IC9Gb250IDw8IC9GMSA1IDAgUiA+PiA+PiA+PiBlbmRvYmoKNC legislaturesAwb2JqCjw8IC9MZW5ndGggNTggPj4gc3RyZWFtCkJUCi9GMSAyNCBUZgoxMDAgNzAwIFRkCihGcmFuY2VzIE1iYWggLSBDVikgVGoKRVQKZW5kc3RyZWFtCmVuZG9iago1IDAgb2JqCjw8IC9UeXBlIC9Gb250IC9TdWJ0eXBlIC9UeXBlMSAvQmFzZUZvbnQgL0hlbHZldGljYSA+PiBlbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDE1IAAwMDAwMCBuIAowMDAwMDAwMDYzACAwMDAwMCBuIAowMDAwMDAwMTIzACAwMDAwMCBuIAowMDAwMDAwMjQxACAwMDAwMCBuIAowMDAwMDAwMzE4ACAwMDAwMCBuIAp0cmFpbGVyCjw8IC9TaXplIDYgL1Jvb3QgMSAwIFIgPj4Kc3RhcnR4cmVmCjM4NAolJUVPRgo=";

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            Hi, I'm <span className="royal-gradient text-transparent bg-clip-text glowing-text">Frances Mbah</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-3xl">
            A passionate Frontend Developer transforming ideas into beautiful, interactive, and responsive web experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="px-8 py-3 bg-transparent border-2 border-white rounded-full text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#050816] glowing-button flex items-center justify-center gap-2 cursor-pointer">
            <FaPaperPlane /> Hire Me
          </a>
          <a href={placeholderCV} download="frances-mbah-cv.pdf" className="px-8 py-3 royal-gradient rounded-full text-white font-semibold transition-transform duration-300 hover:scale-105 glowing-button flex items-center justify-center gap-2">
            <FiDownload /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
