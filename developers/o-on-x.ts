import { Developer } from '../types/types';
import { eliza } from '../projects/eliza';
import { ezsis } from '../projects/ezsis';

export const developer: Developer = {
  name: "Ophiuchus",
  image: "https://pbs.twimg.com/profile_images/1850526115242082304/xoF9sqvT_400x400.jpg",
  github: "o-on-x",
  twitter: "O_on_X",
  description: "",
  projects: [eliza, ezsis]
};
