import type { NextApiRequest, NextApiResponse } from "next";
import { Manga, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function mangaHandler(
  req: NextApiRequest,
  res: NextApiResponse<Manga[]>
) {
  const manga = await prisma.manga.findMany();
  res.status(200).json(manga);
}
