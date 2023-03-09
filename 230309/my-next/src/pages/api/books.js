export default async function handler(req, res) {
  const responce = await fetch(
    'https://www.googleapis.com/books/v1/volumes?q=呪術廻戦'
  );
  console.log(req);
  const books = await responce.json();
  res.status(200).json({ books });
}
