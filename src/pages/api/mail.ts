import type { NextApiRequest, NextApiResponse } from 'next';

const DOMAIN = 'omomo.finance';
const NAME_LIST = `contact@${DOMAIN}`;

const mailgun = require('mailgun-js')({
  apiKey: process.env.REACT_APP_MAILGUN_API_KEY,
  domain: DOMAIN,
});

const list = mailgun.lists(NAME_LIST);

type Data = {
  message: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { message } = await list.members().create({ address: req.body.email });
    res.status(200).json({ message });
  } catch (e) {
    // @ts-ignore
    res.status(e.statusCode).json({ message: e.message });
  }
};
