import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { FaArrowLeft } from 'react-icons/fa';

interface GalleryProps {
  project: Project;
  onBack: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ project, onBack }) => {
  return (
    <div className="relative z-0 bg-[#050816] min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <button 
            onClick={onBack} 
            className="flex items-center gap-2 text-lg text-gray-300 hover:text-white transition-colors duration-300 mb-8"
          >
            <FaArrowLeft />
            Back to Portfolio
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white glowing-text">
            Gallery: <span className="royal-gradient text-transparent bg-clip-text">{project.title}</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl">{project.description}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full aspect-video bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <img 
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;