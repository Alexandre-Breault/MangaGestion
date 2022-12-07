export function getManga() {
  const urlApi = process.env.VERCEL_URL + "/api/manga";
  console.log(urlApi);
  const request = fetch(urlApi);
  const data = request.then((json) => json.json());
  return data;
}
