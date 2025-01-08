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
  }
}
