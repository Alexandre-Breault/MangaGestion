import { Table } from "@nextui-org/react";
import { Manga } from "@prisma/client";
type MangaProps = {
  manga: Array<Manga>;
};

type TableColumns = {
  key: string;
  label: string;
};

type RowProps = {
  [key: string]: string;
  id: string;
  title: string;
  numero: string;
};

export default function TableManga({ manga }: MangaProps) {
  let rows: Array<RowProps> = [];
  manga.forEach((item) =>
    rows.push({
      key: item.id.toString(),
      id: item.id.toString(),
      title: item.title,
      numero: item.numero.toString(),
    })
  );
  const columns: Array<TableColumns> = [
    {
      key: "id",
      label: "#",
    },
    {
      key: "title",
      label: "Titre",
    },
    {
      key: "numero",
      label: "Numéro",
    },
  ];
  return (
    <Table
      aria-label='Table manga possede'
      selectionMode='single'
      containerCss={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
