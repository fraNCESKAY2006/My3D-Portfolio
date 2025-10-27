import { IconType } from 'react-icons';

export interface NavLink {
  id: string;
  title: string;
}

export interface Skill {
  name: string;
  icon: IconType;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  images: string[];
  githubUrl: string;
  liveUrl: string;
  galleryUrl: string;
  tags: string[];
}