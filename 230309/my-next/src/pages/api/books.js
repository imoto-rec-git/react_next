export async function fetchBooks(req) {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=" + req
  )
  const books = await response.json()
  return books.items
}
