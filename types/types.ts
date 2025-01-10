/**
 * Developer type represents a developer profile in the Cracked Devs API
 * @property id - Unique identifier for the developer
 * @property name - Name of the developer
 * @property image - URL to developer's profile image (right click copy image address on your profile picture)
 * @property github - GitHub username of the developer
 * @property twitter - Twitter username of the developer
 * @property description - Brief bio or description of the developer
 * @property projects - Optional array of projects associated with the developer
 */
export type Developer = {
  name: string;
  image: string;
  github: string;
  twitter: string;
  description: string;
  twitch?: string;
  youtube?: string;
  projects?: Project[];
};

/**
 * Project type represents a project in the Cracked Devs API
 * @property id - Unique identifier for the project
 * @property name - Display name of the project
 * @property description - Brief description of what the project does
 * @property tokenAddress - Optional token address if project has an associated token
 * @property keyword - Optional keyword/tag to categorize the project (this helps us identify users on social talking about your project)
 * @property github - Optional GitHub repository URL for the project
 * @property twitter - Optional Twitter URL for the project
 * @property website - Optional website URL for the project
 */
export type Project = {
  name: string;
  description: string;
  tokenAddress?: string;
  keyword?: string;
  github?: string;
  twitter?: string;
  website?: string;
};