import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Manga } from "@prisma/client";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getManga } from "../lib/Manga";

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
  const { data, error, isError, isLoading } = useQuery("mangas", getManga, {
    enabled: false,
    staleTime: Infinity,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError && error instanceof Error) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Titre</TableCell>
            <TableCell>Numero</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((element: Manga, index: number) => (
            <TableRow key={element.id}>
              <TableCell component='th' scope='row'>
                {index + 1}
              </TableCell>
              <TableCell>{element.title}</TableCell>
              <TableCell>{element.numero}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
