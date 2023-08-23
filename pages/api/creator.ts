// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'GET' });
  } else if (req.method === 'POST') {
    const inputDataObj = {
      keyword: '', // string
      countries: [], // string array
      occupations: [2], // int array 'Code Document'의 2번 Occupation 단락 확인
      pageNo: 1, // int, 기본값 1
      pageSize: 24, // int, 기본값 24
      defaultSortBy: 1, // int => Recent=1, AllTime=2, 기본값=1
      sortby: 2, // int => Views=2, Likes=3, Comments=6, 기본값=2
    };
    const response = await axios.post(
      `https://test-connect.api.clo-set.com/api/creators`,
      inputDataObj,
    );
    const creatorList = response.data;
    res.status(200).json({ creatorList });
  } else {
    res.status(500).json({ message: 'wrong connection' });
  }
};
