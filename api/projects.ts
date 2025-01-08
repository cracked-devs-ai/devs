import type { VercelRequest, VercelResponse } from '@vercel/node'
import { projects } from '../data/projects'

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.status(200).json(projects)
} 