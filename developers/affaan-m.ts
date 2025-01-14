import { Developer } from '../types/types';
import { modernstoicai } from '../projects/modernstoicai';
import { eliza } from '../projects/eliza';

export const developer: Developer = {
  name: "Affaan Mustafa",
  image: "https://pbs.twimg.com/profile_images/1867322891194576898/dhnZM1Vs_400x400.jpg",
  github: "affaan-m",
  twitter: "affaanmustafa",
  description: "Building Modern Stoic AI in public",
  projects: [modernstoicai, eliza]
};
