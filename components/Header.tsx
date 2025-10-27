import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 royal-gradient origin-left z-50" style={{ scaleX }} />
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-2xl font-bold glowing-text cursor-pointer">
            FM
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-lg hover:text-white transition-colors duration-300 glowing-text-hover relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:block after:bg-white after:transition-all after:duration-300 hover:after:w-full after:left-0 after:bottom-[-2px] cursor-pointer"
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-md absolute w-full"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    handleNavClick(e, link.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-lg hover:text-white transition-colors duration-300"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;