import type { NextApiRequest, NextApiResponse } from "next";
import { WriteStream, ReadStream, statSync } from "fs";
import path from "path";
const fs = require("fs");

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const filepath = path.join(__dirname, "resume.pdf");

    console.log(filepath, "filepath");

    const fileWriter = fs.createReadStream(
      "/Users/shanshe/Desktop/hprojects/personal-blog/pages/api/resume.pdf"
    );

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");

    fileWriter.pipe(res);
  } catch (error) {
    res.status(400);
  }
}
