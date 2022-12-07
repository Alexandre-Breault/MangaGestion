import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Manga } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(
    await prisma.manga.create({
      data: {
        numero: parseInt(req.body.numero),
        title: req.body.title,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })
  );
}
