# Cracked Devs API

A community-driven API showcasing cracked developers who are building in public.

## Requirements

1. You must be building in public (one of the following)
    - Streaming your development process on platforms like X, Twitch,YouTube, etc.
    - Posting regular updates on social media about your process
    - Commiting to a public open source repository

## How to Add Yourself

1. Fork this repository
2. Add your project details to `data/projects.ts`
3. Add your developer profile to `data/devs.ts`
4. Test your changes locally by running `npm run build`
5. Open a PR back to the main repository

## Guidelines

1. Use your twitter profile picture as your image
    - Click twitter profile picture
    - Right click and select "Copy image address"
2. Keep descriptions concise and professional
3. Ensure all links are valid
4. Use unique IDs for both projects and developer profiles (iterate by 1 from the last ID)
5. Make note of which fields are optional and which are required