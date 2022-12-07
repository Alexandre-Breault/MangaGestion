import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function mangaHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json(await prisma.manga.findMany());
      prisma.$disconnect();
      break;
    case "POST":
      // create data in your database
      res.status(200).json(
        await prisma.manga.create({
          data: {
            numero: req.body.numero,
            title: req.body.title,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        })
      );
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
