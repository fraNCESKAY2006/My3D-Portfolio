
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
  { name: 'Git', icon: FaGitAlt },
  { name: 'Firebase', icon: SiFirebase },
];

export const PROJECTS: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge web application demonstrating complex 3D animations and interactive UI using React Three Fiber and Framer Motion.',
    image: 'https://picsum.photos/seed/alpha/500/300',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    tags: ['React', 'Three.js', 'Framer Motion'],
  },
  {
    title: 'Project Beta',
    description: 'A cross-platform mobile app built with Flutter, focusing on a seamless user experience and performance.',
    image: 'https://picsum.photos/seed/beta/500/300',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    tags: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    title: 'Project Gamma',
    description: 'A responsive e-commerce platform with a custom backend, built with the MERN stack and styled with Tailwind CSS.',
    image: 'https://picsum.photos/seed/gamma/500/300',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
  },
   {
    title: 'Project Delta',
    description: 'An interactive data visualization dashboard using D3.js and React, presenting complex data in an intuitive way.',
    image: 'https://picsum.photos/seed/delta/500/300',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    tags: ['React', 'D3.js', 'TypeScript'],
  },
];
