import axios from 'axios';
import React, { useState } from 'react';
import '../styles/Search.css';
import { Link } from 'react-router-dom';

export default function Search() {
  const [userEntry, setUserEntry] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const handleChange = (e) => setUserEntry(e.target.value);

  function getSearch() {
    axios
      .get(`${process.env.REACT_APP_API_URL}books/search?search=${userEntry}`)
      .then((result) => result.data)
      .then((result) => {
        console.log(result);
        setSearchResult(result);
      });
    setUserEntry('');
  }
  return (
    <div className="SearchWrapper">
      <div className="SearchPortion">
        <input
          className="SearchInput"
          type="text"
          placeholder={'Recherche par titre'}
          value={userEntry}
          onChange={handleChange}
        />
        <div className="ButtonPortion">
          <button className="Btn SearchBtn" type="button" onClick={getSearch}>
            Search by Title
          </button>
        </div>
      </div>
      <div className="PreviewPortion">
        {searchResult.map((book) => (
          <div className="Card">
            {' '}
            <Link to={`/bookdetail/${book.id}`}>
              {' '}
              <img
                src={
                  book.picture === null || book.picture === 'None'
                    ? 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-46e27bb5bb18d1354f5acc1d96454f60_screen.jpg?ts=1637015775'
                    : book.picture
                }
                alt={book.title}
              />
            </Link>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
