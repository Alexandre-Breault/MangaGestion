import { Manga, PrismaClient } from "@prisma/client";
import { Grid } from "@nextui-org/react";
import { InferGetStaticPropsType } from "next";
import Layout from "../src/components/Layout/Layout";
import TableManga from "../src/components/TableManga";
import { getManga } from "../src/lib/Manga";

export async function getStaticProps() {
  const manga: Manga[] = await getManga();
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
