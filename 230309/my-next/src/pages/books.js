import { useEffect, useState } from "react"
import { fetchBooks } from "./api/books"

export default function exchange() {
  const [bookList, setBookList] = useState([])
  const [searchText, setSearchText] = useState("")

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (searchText === "") return
    const books = await fetchBooks(searchText)
    setBookList(books)
    setSearchText("")
  }

  return (
    <>
      <h1>Book Search</h1>
      <form onSubmit={handleSubmit}>
        <input value={searchText} onChange={handleSearch} />
        <button type="submit">検索</button>
      </form>
      {bookList ? (
        <>
          {bookList.map((book) => {
            return (
              <>
                <p key={book}>{book.volumeInfo.title}</p>
              </>
            )
          })}
        </>
      ) : (
        <p>存在しません</p>
      )}
    </>
  )
}
