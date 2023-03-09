export default async function handler(req, res) {
  const responce = await fetch(
    'https://dog.ceo/api/breed/shiba/images/random/12'
  );
  const dogs = await responce.json();
  res.status(200).json({ dogs });
}
