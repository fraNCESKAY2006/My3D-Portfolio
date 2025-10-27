
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.5, delay: index * 0.05 } }
      }}
      whileHover={{ y: -10, scale: 1.05, rotateX: 10, rotateY: 10 }}
      className="w-full aspect-square bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl flex flex-col justify-center items-center p-4"
      style={{ perspective: 800 }}
    >
      <skill.icon className="text-4xl md:text-5xl text-white" />
      <p className="mt-4 text-sm md:text-base font-medium text-center">{skill.name}</p>
    </motion.div>
  );
};

const Skills: React.FC = () => {
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
        <p className="text-sm uppercase tracking-wider text-gray-400">What I Know</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 glowing-text">My Skills.</h2>
      </motion.div>
      
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
        {SKILLS.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
