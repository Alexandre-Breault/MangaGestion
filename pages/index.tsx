"use client";
import { Manga, PrismaClient } from "@prisma/client";
import { Grid } from "@nextui-org/react";
import TableManga from "../components/TableManga";
import { InferGetStaticPropsType } from "next";
import Layout from "../components/Layout/Layout";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const manga: Manga[] = JSON.parse(
    JSON.stringify(await prisma.manga.findMany())
  );
  return {
    props: {
      manga,
    },
  };
}

export default function MangaHome({
  manga,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Grid.Container gap={2}>
        <Grid xs={12} md={6}>
          <TableManga manga={manga} />
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
