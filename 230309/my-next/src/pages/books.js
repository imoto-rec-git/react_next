import { useEffect, useState } from "react"

export default function exchange() {
  const [bookList, setBookList] = useState([])
  const [searchText, setSearchText] = useState("")

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (searchText === "") return
    const serchWord = searchText
    console.log("https://www.googleapis.com/books/v1/volumes?q=" + serchWord)
    const test = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" + serchWord
    )
    const data = await test.json()
    setBookList(data.items)
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
          {bookList.map((i, index) => {
            return (
              <>
                <p key={index}>{i.volumeInfo.title}</p>
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
