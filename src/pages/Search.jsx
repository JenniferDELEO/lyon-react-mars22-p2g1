/* eslint-disable prefer-const */
/* eslint-disable no-return-assign */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Search.css';
import { Link, useSearchParams } from 'react-router-dom';
import RatingStar from '../components/ratingStar';
import notFound from '../assets/notfound.jpeg';
import UseMediaQuery from '../hooks/useMediaQuery';
import BookDetail from './BookDetail';

export default function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [getBooks, setGetBooks] = useState([]);
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [bookId, setBookId] = useState();
  const isDesktop = UseMediaQuery('(min-width: 1000px)');

  useEffect(() => {
    if (searchParams.get('query')) {
      axios
        .get(
          `${
            process.env.REACT_APP_API_URL
          }books/search?search=${searchParams.get('query')}`
        )
        .then((result) => result.data)
        .then((result) => {
          setSearchResult(result);
          setUserHasSearched(true);
        });
    }
  }, [searchParams, bookId]);

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
          value={searchParams.get('query') || ''}
          onChange={(e) => {
            setSearchParams({ query: e.target.value });
          }}
        />
        <img
          className="bookshelf"
          src="https://bouquinbec.ca/wp-content/uploads/2020/03/bouquinbec-dessin-etagere-livres-tab-cell.png"
          alt="étagère de livre"
        />
      </div>
      {searchResult.map((book) => (
        <div className="Card" key={book.ISBN}>
          {' '}
          <img
            className="book-img-search"
            onClick={() => setBookId(book.id)}
            src={book.picture !== 'None' || null ? book.picture : notFound}
            alt={book.title}
            style={{ cursor: 'pointer' }}
          />
          <div className="book-infos">
            <div>
              <Link
                to={`/bookdetail/${book.id}`}
                style={{ cursor: isDesktop ? 'initial' : 'pointer' }}
              >
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
        <h3 className="top5">Nos coups de coeur </h3>
        {getBooks.slice(0, 5).map((book) => (
          <div className="Card" key={book.ISBN}>
            {' '}
            <img
              className="book-img-search"
              onClick={() => setBookId(book.id)}
              key={book.ISBN}
              src={book.picture}
              alt={book.title}
              style={{ cursor: 'pointer' }}
            />
            <div key={book.ISBN} className="book-infos">
              <div>
                <Link
                  to={`/bookdetail/${book.id}`}
                  style={{ cursor: isDesktop ? 'initial' : 'pointer' }}
                >
                  <p className="font-black text-sm underline">
                    {book.title.slice(0, 40)}
                  </p>
                  <p key={book.ISBN} className="text-xs">
                    {book.author.slice(0, 23)}
                  </p>
                </Link>
              </div>
              <div key={book.ISBN} className="Stars">
                <RatingStar key={book.ISBN} rate={parseFloat(book.note)} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {isDesktop ? <BookDetail id={bookId} /> : null}
    </div>
  );
}
