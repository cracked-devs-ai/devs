/**
 * Developer type represents a developer profile in the Cracked Devs API
 * @property name - Full display name of the developer
 * @property image - URL to developer's github or twitterprofile image (must be a direct image URL)
 * @property github - GitHub username without the @ symbol
 * @property description - Short biography or introduction (recommended 150-300 characters)
 * @property twitter - Twitter/X username without the @ symbol (optional)
 * @property twitch - Twitch channel username (optional)
 * @property youtube - YouTube channel username or ID (optional)
 * @property projects - Array of associated projects (optional)
 */
export type Developer = {
  name: string;
  image: string;
  github: string;
  description: string;
  twitter?: string;
  twitch?: string;
  youtube?: string;
  projects?: Project[];
};

/**
 * Project type represents a project in the Cracked Devs API
 * @property name - Display name of the project
 * @property description - Concise explanation of the project's purpose and features (recommended 150-300 characters)
 * @property tokenAddress - Blockchain token contract address (optional)
 * @property keyword - Primary search term or hashtag used to track project mentions (optional)
 * @property github - Full URL to the project's GitHub repository (optional)
 * @property twitter - Full URL to the project's Twitter/X profile (optional)
 * @property website - Full URL to the project's main website or documentation (optional)
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