export default function FormMangaAdd() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      numero: event.target.numero.value,
      title: event.target.title.value,
    };
    const JSONData = JSON.stringify(data);
    const endpoint = "/api/manga";
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONData,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result);
    alert(`Is this your full name: ${result}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='numero'>Numero</label>
      <input type='number' id='numero' name='numero' />
      <label htmlFor='title'>Titre</label>
      <input type='text' id='title' name='title' />
      <button type='submit'>Submit</button>
    </form>
  );
}
