import type { NextApiRequest, NextApiResponse } from "next";
export default function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    res.status(200).send("auth get");
  } else if (req.method == "POST") {
    res.status(200).send("auth post");
  }
}
