
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
        {icon}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm py-8 px-6">
      <div className="container mx-auto text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4 text-2xl">
            <SocialIcon href="https://github.com" icon={<FaGithub />} />
            <SocialIcon href="https://linkedin.com" icon={<FaLinkedin />} />
            <SocialIcon href="mailto:contact@francesmbah.dev" icon={<FaEnvelope />} />
        </div>
        <p>&copy; {new Date().getFullYear()} Frances Mbah. All Rights Reserved.</p>
        <p className="mt-2 text-sm">Built with passion and React.js</p>
      </div>
    </footer>
  );
};

export default Footer;
