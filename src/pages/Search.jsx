/* eslint-disable no-return-assign */
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import '../styles/Search.css';
import { Link } from 'react-router-dom';
import RatingStar from '../components/ratingStar';

export default function Search() {
  const [userEntry, setUserEntry] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [getBooks, setGetBooks] = useState([]);
  const [userHasSearched, setUserHasSearched] = useState(false);

  const form = useRef();
  const handleChange = (e) => {
    setUserEntry(e.target.value);
  };

  function handleSearch(e) {
    e.preventDefault();
    axios
      .get(`${process.env.REACT_APP_API_URL}books/search?search=${userEntry}`)
      .then((result) => result.data)
      .then((result) => {
        setSearchResult(result);
        setUserHasSearched(true);
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
        <form onSubmit={handleSearch} ref={form}>
          <input
            className="SearchInput"
            type="text"
            placeholder={'Entrez votre recherche ici'}
            value={userEntry}
            onChange={handleChange}
          />
          <button className="Btn SearchBtn" type="submit">
            Lancez votre recherche
          </button>
        </form>
      </div>
      <div className="PreviewPortion">
        {searchResult.map((book) => (
          <div className="Card" key={book.ISBN}>
            {' '}
            <img
              src={
                !book.picture.startsWith('http')
                  ? 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-46e27bb5bb18d1354f5acc1d96454f60_screen.jpg?ts=1637015775'
                  : book.picture
              }
              alt={book.title}
            />
            <div className="book-infos">
              <div>
                <Link to={`/bookdetail/${book.id}`}>
                  <p className="font-black text-sm underline">
                    {book.title.slice(0, 40)}
                  </p>
                  <p className="text-xs">{book.author.slice(0, 23)}</p>
                </Link>
              </div>
              <div className="Stars">
                <RatingStar rate={parseFloat(book.note)} />
              </div>
            </div>
          </div>
        ))}
        <div
          className="listholder"
          style={{
            display: userHasSearched ? 'none' : '',
          }}
        >
          <h3 className="top5">Top 5 de l'application :</h3>
          {getBooks.map((book) => (
            <div className="Card" key={book.ISBN}>
              {' '}
              <img src={book.picture} alt={book.title} />
              <div className="book-infos">
                <div>
                  <Link to={`/bookdetail/${book.id}`}>
                    <p className="font-black text-sm underline">
                      {book.title.slice(0, 40)}
                    </p>
                    <p className="text-xs">{book.author.slice(0, 23)}</p>
                  </Link>
                </div>
                <div className="Stars">
                  <RatingStar rate={parseFloat(book.note)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
