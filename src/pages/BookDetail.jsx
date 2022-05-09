/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RatingStar from '../components/ratingStar';
import '../styles/bookDetail.css';
import vintage from '../assets/vintage.jpg';
import redHeart from '../assets/favorite_heart_red.svg';
import whiteHeart from '../assets/favorite_heart_white.svg';
import MapBookDetail from '../components/MapBookDetail';
import backArrow from '../assets/back-arrow.png';
import UseMediaQuery from '../hooks/useMediaQuery';

export default function BookDetail({ id }) {
  const emptyResume =
    "Resumé non disponible, mais c'est certainement un excellent livre !";
  const [book, setBook] = useState();
  const [isBookFavorite, setIsBookFavorite] = useState(false);
  function handleClickFavoriteBook() {
    setIsBookFavorite(!isBookFavorite);
    !isBookFavorite
      ? localStorage.setItem(book.id.toString(), JSON.stringify(book))
      : localStorage.removeItem(book.id.toString());
  }
  const [coords, setCoords] = useState([]);
  const isDesktop = UseMediaQuery('(min-width: 1000px)');
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}books/${isDesktop ? id : params.id}}`
      )
      .then((response) => response.data)
      .then((data) => {
        setBook(data);
        if (data !== 'undefined') {
          if (localStorage.getItem(data.id.toString())) {
            setIsBookFavorite(true);
          }
        }
        axios
          .get(`${process.env.REACT_APP_API_URL}books/isbn/${data.isbn}`)
          .then((response2) => response2.data)
          .then((data2) => {
            setCoords(data2);
          });
      });
  }, [id]);

  const returnBack = () => {
    window.history.back();
  };
  return (
    <div className="bookdetail">
      {book && (
        <div>
          <div className="buttonBar">
            <button type="button" onClick={returnBack}>
              <img src={backArrow} alt="back arrow" />
            </button>
            <button type="button" onClick={handleClickFavoriteBook}>
              <img
                src={isBookFavorite === true ? redHeart : whiteHeart}
                alt={book.title}
              />
            </button>
          </div>
          <div>
            <h2 className="titre">{book.title}</h2>
            <h3 className="auteur">{book.author}</h3>
          </div>
          <img
            className="bookImage"
            src={
              book.picture === null || book.picture === 'None'
                ? vintage
                : book.picture
            }
            alt={book.title}
          />
          <div className="carateristicsDatas">
            <RatingStar rate={book.note} padding={'pb-2'} size={'text-6xl'} />
            <p className="caracteristics">{book.pages_nbr} pages</p>
            <p className="caracteristics">
              Date publication : {book.publication_year}
            </p>
            <p className="caracteristics">Éditeur : {book.editions}</p>
            <p className="caracteristics">ISBN : {book.isbn}</p>
          </div>
          <p className="resumebookDetail">
            <strong>Résumé :</strong>{' '}
            {book.synopsis === null || book.synopsis === 'None'
              ? emptyResume
              : book.synopsis}
          </p>
          <p className="text-before-map">Où trouver ce livre ?</p>
          <MapBookDetail boxNumber={coords} />
        </div>
      )}
    </div>
  );
}
