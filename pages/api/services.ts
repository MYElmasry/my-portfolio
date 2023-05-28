import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";
const hanler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services });
};

export default hanler;
