export type Developer = {
  id: string;
  name: string;
  image: string;
  github: string;
  twitter: string;
  description: string;
  projects?: Project[];
};

export type Project = {
  id: string;
  name: string;
  description: string;
  tokenAddress?: string;
  keyword?: string;
  github?: string;
  twitter?: string;
};