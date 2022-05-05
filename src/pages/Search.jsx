import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Search.css';
import { Link } from 'react-router-dom';
import Vintage from '../assets/vintage.jpg';

export default function Search() {
  const [userEntry, setUserEntry] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [getBooks, setGetBooks] = useState([]);
  const handleChange = (e) => setUserEntry(e.target.value);

  function handleSearch() {
    axios
      .get(`${process.env.REACT_APP_API_URL}books/search?search=${userEntry}`)
      .then((result) => result.data)
      .then((result) => {
        setSearchResult(result);
      });
    setUserEntry('');
  }
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}books/note/5`)
      .then((result) => result.data)
      .then((result) => {
        setGetBooks(result[0]);
      });
  }, []);

  return (
    <div className="SearchWrapper">
      <div className="SearchPortion">
        <input
          className="SearchInput"
          type="text"
          placeholder={'Entrez votre recherche ici'}
          value={userEntry}
          onChange={handleChange}
        />
        <div className="ButtonPortion">
          <button
            className="Btn SearchBtn"
            type="button"
            onClick={handleSearch}
          >
            Lancez votre recherche
          </button>
        </div>
      </div>
      <div className="PreviewPortion">
        {searchResult.map((book) => (
          <div className="Card" key={book.ISBN}>
            {' '}
            <Link to={`/bookdetail/${book.id}`}>
              {' '}
              <img
                src={
                  book.picture === null || book.picture === 'None'
                    ? { Vintage }
                    : book.picture
                }
                alt={book.title}
              />
            </Link>
            <div className="Bookinfo">
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
            </div>
          </div>
        ))}
        <div className="listholder">
          {getBooks.map((book) => (
            <div className="Card" key={book.ISBN}>
              {' '}
              <img src={book.picture} alt={book.title} />
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
