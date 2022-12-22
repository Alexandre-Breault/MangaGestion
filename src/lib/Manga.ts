export function getManga() {
  return fetch(process.env.VERCEL_URL + "/api/manga").then((json) =>
    json.json()
  );
}
