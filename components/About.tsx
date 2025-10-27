import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container mx-auto px-6 py-16"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          show: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1 } }
        }}
      >
        <p className="text-sm uppercase tracking-wider text-gray-400">Introduction</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 glowing-text">About Me.</h2>
      </motion.div>

      <div className="mt-8 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: { opacity: 1, scale: 1, transition: { type: 'spring', duration: 1, delay: 0.2 } }
          }}
          className="lg:w-1/3 w-full flex justify-center"
        >
          <div className="p-1 rounded-full bg-gradient-to-br from-[#6a11cb] to-[#2575fc]">
            <div className="bg-[#050816] p-1 rounded-full">
              <img
                src="https://picsum.photos/seed/frances/400/400"
                alt="Frances Mbah"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
              />
            </div>
          </div>
        </motion.div>
        <motion.p
          variants={{
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1, delay: 0.6 } }
          }}
          className="text-lg text-gray-300 leading-relaxed lg:w-2/3"
        >
          I'm a skilled frontend developer with expertise in React, Flutter, and JavaScript. 
          I have a passion for creating beautiful, functional, and user-centered digital experiences. 
          With a strong foundation in modern web technologies, I enjoy solving complex problems and learning new skills. 
          I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. 
          Let's work together to bring your ideas to life!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;