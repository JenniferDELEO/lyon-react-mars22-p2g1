/* eslint-disable no-return-assign */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Search.css';
import { Link } from 'react-router-dom';
import RatingStar from '../components/ratingStar';

export default function Search() {
  const [userEntry, setUserEntry] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [getBooks, setGetBooks] = useState([]);
  const [userHasSearched, setUserHasSearched] = useState(false);

  const handleChange = (e) => {
    setUserEntry(e.target.value);
  };

  useEffect(() => {
    if (userEntry) {
      axios
        .get(`${process.env.REACT_APP_API_URL}books/search?search=${userEntry}`)
        .then((result) => result.data)
        .then((result) => {
          setSearchResult(result);
          setUserHasSearched(true);
        });
    }
  }, [handleChange]);

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
      </div>
      <div className="PreviewPortion">
        {searchResult.map((book) => (
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
        <div
          className="listholder"
          style={{
            display: userHasSearched ? 'none' : '',
          }}
        >
          <h3 className="top5">Top 5 de l'application :</h3>
          {getBooks.slice(0, 5).map((book) => (
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
