import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.75, delay: index * 0.1 } }
      }}
      className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
    >
      <div className="relative w-full h-[230px]">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl" />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover space-x-2">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors">
            <FaGithub className="w-1/2 h-1/2 object-contain"/>
          </a>
           <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors">
            <FaLink className="w-1/2 h-1/2 object-contain"/>
          </a>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-2xl">{project.title}</h3>
        <p className="mt-2 text-gray-300 text-sm">{project.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <p key={tag} className="text-[14px] text-transparent bg-clip-text royal-gradient">
            #{tag}
          </p>
        ))}
      </div>
    </motion.div>
  );
};


const Projects: React.FC = () => {
  return (
     <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="container mx-auto px-6 py-16"
    >
       <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          show: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1 } }
        }}
      >
        <p className="text-sm uppercase tracking-wider text-gray-400">My Work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 glowing-text">Projects.</h2>
      </motion.div>

      <motion.p
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 1, delay: 0.2 } }
        }}
        className="mt-4 text-gray-300 text-lg max-w-3xl leading-relaxed"
      >
        Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos.
      </motion.p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;