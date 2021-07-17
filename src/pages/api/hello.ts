// Next.js API route support: https://nextjs.org/docs/basic-features/typescript

import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'KhunNunthawat' });
};
