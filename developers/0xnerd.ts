import { Developer } from '../types/types';
import { degen8ball } from '../projects/degen8ball';
import { eliza } from '../projects/eliza';
import { fomo } from '../projects/fomo';

export const developer: Developer = {
  name: "Tenji",
  image: "https://pbs.twimg.com/profile_images/1801672505301532672/Nr76tLOV_400x400.png",
  github: "0xNerd",
  twitter: "ineedtendies",
  description: "",
  projects: [degen8ball, eliza, fomo]
};
