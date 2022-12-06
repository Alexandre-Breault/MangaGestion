import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Manga } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const manga = await prisma.manga.findMany();
  res.status(200).json(manga);
}
