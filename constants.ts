import { NavLink, Skill, Project } from './types';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFlutter, SiFramer, SiThreedotjs, SiFirebase } from 'react-icons/si';

export const NAV_LINKS: NavLink[] = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React', icon: FaReact },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Three.js', icon: SiThreedotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  // Fix: Corrected a typo in the property name.
  { name: 'Git', icon: FaGitAlt },
  { name: 'Firebase', icon: SiFirebase },
];

export const PROJECTS: Project[] = [
  {
    title: 'Ai Culinary Alpha',
    description: 'A cutting-edge web application demonstrating the integration of AI with culinary arts, built using React and Three.js for an immersive user experience.',
    image: '/images/ai1.png',
    images: [
        '/images/ai1.png',
        '/images/ai2.png',
    ],
    githubUrl: 'https://github.com/fraNCESKAY2006/AI-Receipe-Generator',
    liveUrl: '#',
    galleryUrl: '#',
    tags: ['React', 'Three.js', 'Framer Motion'],
  },
  {
    title: 'ClimeCast',
    description: 'A cross-platform mobile app built with next js, and api that provides real-time weather updates and forecasts with a sleek and intuitive user interface.',
    image: '/images/climecast1.png',
    images: [
        '/images/climecast1.png',
        '/images/climecast2.png',
    ],
    githubUrl: 'https://github.com/fraNCESKAY2006/WeatherForecastWeb.git',
    liveUrl: '#',
    galleryUrl: '#',
    tags: ['Next js', 'vite', 'Open Ai'],
  },
  {
    title: 'MediCare Records System',
    description: 'A comprehensive healthcare records management system that streamlines patient data handling, built with Flutter for cross-platform compatibility and a Firebase backend.',
    image: '/images/medicare1.png',
    images: [
        '/images/medicare1.png',
        '/images/medicare2.png',
    ],
    githubUrl: 'https://github.com/fraNCESKAY2006/Patient-Management-System.git',
    liveUrl: '#',
    galleryUrl: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
  },
   {
    title: 'Crystal Cleaners Website',
    description: 'A modern and responsive website for a cleaning service company, featuring service listings, booking functionality, and customer testimonials, built with React and Tailwind CSS.',
    image: '/images/crystalclean1.png',
    images: [
        '/images/crystalclean1.png',
        '/images/crystalclean2.png',
        '/images/crystalclean3.png',
    ],
    githubUrl: 'https://github.com/fraNCESKAY2006/Cleaning-Website.git',
    liveUrl: '#',
    galleryUrl: '#',
    tags: ['React', 'TypeScript'],
  },

  {
    title: 'LinguaLearn',
    description: 'A language learning mobile app that offers interactive lessons, quizzes, and progress tracking, developed using Flutter for a seamless experience across iOS and Android devices.',
    image: '/images/lingua1.png',
    images: [
        '/images/lingua1.png',
        '/images/lingua2.png',
    ],
    githubUrl: 'https://github.com/fraNCESKAY2006/Lingua.git',
    liveUrl: '#',
    galleryUrl: '#',
    tags: ['React', 'TypeScript'],
  },
];