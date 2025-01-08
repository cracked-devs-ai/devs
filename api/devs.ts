import type { VercelRequest, VercelResponse } from '@vercel/node'
import { developers } from '../data/devs'

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.status(200).json(developers)
} 