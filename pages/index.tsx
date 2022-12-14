import {
  Alert,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Manga, PrismaClient } from "@prisma/client";

export const getStaticProps = async () => {
  const prisma = new PrismaClient();
  const manga = await prisma.manga.findMany();
  return { props: { manga: JSON.parse(JSON.stringify(manga)) } };
};

export default function MangaHome({ manga }: any) {
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
          {manga.map((element: Manga, index: number) => (
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
