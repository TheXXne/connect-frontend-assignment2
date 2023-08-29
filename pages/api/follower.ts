// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { userId }: any = req.query;
    const response = await axios.get(
      `https://test-connect.api.clo-set.com/api/Social/${userId}/Followers`,
    );
    const followerList = response.data;
    res.status(200).json({ followerList });
  } else if (req.method === 'POST') {
    res.status(200).json({ message: 'POST' });
  } else {
    res.status(500).json({ message: 'wrong connection' });
  }
};
