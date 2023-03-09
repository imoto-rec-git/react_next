import { useEffect, useState } from 'react';

export default function exchange() {
  const [bookList, setBookList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      const responce = await fetch('api/books');
      const data = await responce.json();
      setBookList(data.books.items);
    };
    fetchBook();
  }, []);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText === '') return;
    setSearchText('');
    console.log(searchText);
  };

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
            );
          })}
        </>
      ) : (
        <p>存在しません</p>
      )}
    </>
  );
}
