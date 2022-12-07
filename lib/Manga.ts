export function getManga() {
  console.log("CALL API");
  const resquest = fetch(process.env.VERCEL_URL + "/api/manga", {
    method: "GET",
    mode: "cors",
  }).then((data) => {
    return data.json();
  });
  return resquest;
}
