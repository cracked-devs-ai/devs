import { Project } from '../types/types'

export const projects: Record<string, Project> = {
  ModernStoicAI: {
    id: '1',
    name: 'Modern Stoic AI',
    description: 'Stoic is a platform that brings together the power of AI agents, LLM models and blockchain technology. Built on Solana, designed for Degens who turned Stoic. Stoic AI will consist of exceptional tools for active traders, all in one spot, easy to access, without the noise.',
    tokenAddress: '62mETtNRaVY5iNsJr5YexsbVg1uyyoLwtoWLSnjApump',
    keyword: 'stoic',
  },
  Eliza: {
    id: '2',
    name: 'Eliza',
    description: 'Eliza is a simple, fast, and lightweight AI agent framework.',
    github: 'https://github.com/elizaOS/eliza'
  },
  Degen8Ball: {
    id: '3',
    name: 'Degen8Ball',
    description: 'Degen8Ball is an AI memecoin with real utility by predicting the future trends of a coin, analyzing the markets and scan the sentiment around each coin on social media, making life easier for degenerate investors.',
    github: 'https://github.com/degen8ball/eliza',
    tokenAddress: '8iQCQd8TwARsBGyB7zUvEQqU3LCWXRFPmaKvyTPytPCP',
  },
  Aiko: {
    id: '4',
    name: 'Aiko',
    description: 'Our vision is to revolutionize digital storytelling and audience interaction by creating a fully immersive platform for AI-driven narratives, collaborative creativity, and community engagement. Through this innovative ecosystem, we enable agents and creators to transform entertainment into a dynamic, shared experience within vibrant 3D worlds.',
    github: 'https://github.com/aiko-tv',
  },
  FOMO: {
    id: '5',
    name: 'FOMO',
    description: 'Launch your own AI agent in seconds with FOMO. No code required. Just a few clicks and you\'re ready to go.',
    github: 'https://github.com/fomoTon',
  }
}
