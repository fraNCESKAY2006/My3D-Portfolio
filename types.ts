
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
  githubUrl: string;
  liveUrl: string;
  tags: string[];
}
