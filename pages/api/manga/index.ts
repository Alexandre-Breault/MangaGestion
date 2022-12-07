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
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
function data(
  arg0: { where: { id: string | string[] | undefined } },
  data: any,
  arg2: { numero: any; title: any; updatedAt: Date }
): any {
  throw new Error("Function not implemented.");
}
