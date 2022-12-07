import { Manga } from "@prisma/client";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getManga } from "../../lib/Manga";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("mangas", getManga);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function MangaHome() {
  const { data, error, isError, isLoading } = useQuery("mangas", getManga);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError && error instanceof Error) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <ul>
      {data.map((element: Manga) => (
        <li key={element.id}>{element.title}</li>
      ))}
    </ul>
  );
}