import { Manga } from "@prisma/client";
/**
 * Récupère les manga de la base de données dans un tableau de manga
 * @returns {Promise<Manga[]>} Retourne un tableau de Manga en "promesse"
 */
export async function getManga(): Promise<Manga[]> {
  const json = await fetch(process.env.VERCEL_URL + "/api/manga");
  const data: Manga[] = JSON.parse(JSON.stringify(await json.json()));
  return data;
}
