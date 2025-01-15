import { Developer } from '../types/types';
import { eliza } from '../projects/eliza';
import { quickintel } from '../projects/quickintel';

export const developer: Developer = {
  name: "Ninja_Dev",
  image: "https://pbs.twimg.com/profile_images/1819069128033857536/LXTJkkvZ_400x400.jpg",
  github: "azep-ninja",
  twitter: "ninja_dev3",
  description: "Founder @Quick-Intel",
  projects: [eliza, quickintel]
};
